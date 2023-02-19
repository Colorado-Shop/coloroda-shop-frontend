import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Subject } from 'rxjs'

import { AuthData } from './auth-data.model'
import { environment } from '../../environments/environment'
import { exit } from 'process'
import Swal from 'sweetalert2'

const BACKEND_URL = environment.db_api_url + '/auth'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string
  private isAthenticated = false
  private tokenTimer: any
  private userId: string
  private authStatusListener = new Subject<boolean>()

  constructor(private http: HttpClient, private router: Router) {}

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token)
    localStorage.setItem('expiration', expirationDate.toISOString())
    localStorage.setItem('userId', userId)
  }

  private clearAuthData() {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    localStorage.removeItem('userId')
  }

  private getAuthData() {
    const token = localStorage.getItem('token')
    const expirationDate = localStorage.getItem('expiration')
    const userId = localStorage.getItem('userId')
    if (!token || !expirationDate) {
      return null
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId,
    }
  }

  private convertDaysToSeconds(day: number) {
    return day * 24 * 60 * 60
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout()
    }, duration * 1000)
  }

  autoAuthUser() {
    const authInformation = this.getAuthData()
    if (!authInformation) {
      return
    } else if (authInformation !== null) {
      const now = new Date()
      const expiresIn = authInformation.expirationDate.getTime() - now.getTime()
      //We might get a negative value from the above expression so we check if our duration is positive befor proceeding
      //Keep in mind the time obtained above is in milli seconds so needs to be converted in seconds
      if (expiresIn > 0) {
        this.token = authInformation.token
        this.isAthenticated = true
        this.userId = authInformation.userId
        this.setAuthTimer(expiresIn / 1000)
        this.authStatusListener.next(true)
      }
    }
  }

  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password }
    return this.http.post(BACKEND_URL + '/signup', authData).subscribe(
      (response) => {
        this.router.navigate(['auth/login'])
      },
      (error) => {
        this.authStatusListener.next(false)
      },
    )
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password }
    this.http
      .post<{ token: string; expiresIn: any; userId: any; message: string }>(
        BACKEND_URL + '/login',
        authData,
      )
      .subscribe(
        (response) => {
          const token = response.token
          console.log(response)
          this.token = token
          if (token) {
            const tokenDuration = response.expiresIn
            this.setAuthTimer(tokenDuration)
            this.isAthenticated = true
            this.userId = response.userId
            this.authStatusListener.next(true)
            const now = new Date()
            const expirationDate = new Date(
              now.getTime() + tokenDuration * 1000,
            )
            this.saveAuthData(this.token, expirationDate, this.userId)
            console.log(this.isAthenticated)
            localStorage.setItem('token', token)

            this.router.navigate(['../../dashboard'])
          }
        },
        (error) => {
          this.authStatusListener.next(false)
          if (error.error.message) {
            Swal({
              title: 'Invalid Credentials!',
              text: 'Wrong email and password combination.',
              type: 'error',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#28a745',
            })
          } else {
            Swal({
              title: 'An Unknown Error Occured!',
              text: 'Please make sure you have internet connection.',
              type: 'error',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#28a745',
            })
          }
        },
      )
  }

  logout() {
    this.token = null
    this.isAthenticated = false
    this.authStatusListener.next(false)
    this.userId = null
    clearTimeout(this.tokenTimer)
    this.clearAuthData()
    this.router.navigate(['auth/login'])
  }

  getAuthStatus() {
    return this.isAthenticated
  }

  getToken() {
    return this.token
  }

  getUserId() {
    return this.userId
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable()
  }
}
