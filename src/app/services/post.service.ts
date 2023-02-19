import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Comment } from "../models/api/comment.model";
import { Post } from "../models/api/post.model";
import { map } from "rxjs/operators";
import { PostsPage } from "../models/api/postsPage.model";
import { TransferHttpService } from '@gorniv/ngx-universal';

@Injectable()
export class APIPostService {
    private rootUrl = environment.API_URL;
    //private draftArticlesSubject = new BehaviorSubject<Post[]>([] as Post[]);
    private publishedArticlesSubject = new BehaviorSubject<Post[]>([] as Post[]);

    getheadersNoAuth() {
        let headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Token': '',
            'No-Auth': 'True',
            'observe': 'response'
        };
        return headerDict;
    }

    // getheadersWithAuth() {
    //     let headerDict = {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Credentials': 'true',
    //         'observe': 'response'
    //     };
    //     return headerDict;
    // }

    constructor(private http: TransferHttpService) { }

    // Article Section

    getPublishedArticles(): Observable<Post[]> {
        let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) }
        return this.http.get(this.rootUrl + '/posts/published?delay=3', reqHeaders).pipe(map((data: any) => {
            let posts: Post[] = new Array();
            data.map(value => posts.push(new Post().deserialize(value)))
            this.publishedArticlesSubject.next(posts)
            return posts
        }))
    }

    // getDraftArticles(): Observable<Post[]> {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) }
    //     return this.http.get(this.rootUrl + '/posts/draft', reqHeaders).pipe(map((data: any) => {
    //         let posts: Post[] = new Array();
    //         data.map(value => posts.push(new Post().deserialize(value)))
    //         this.draftArticlesSubject.next(posts)
    //         return posts
    //     }))
    // }
    
    getPaginatedPublishedArticles(pageNumber: number): Observable<PostsPage> {
        let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) }
        return this.http.get(this.rootUrl + '/posts/published/page/' + pageNumber + "?delay=3", reqHeaders).pipe(map((data: any) => {
            let page: PostsPage = new PostsPage().deserialize(data)
            return page
        }))
    }

    getArticle(id: string): Observable<Post> {
        let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) }
        return this.http.get(this.rootUrl + '/post/' + id + "?delay=3", reqHeaders).pipe(map((data: any) => {
            let post: Post = new Post().deserialize(data)
            return post
        }))
    }

    // saveArticle(article: Post) {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
    //     let body = JSON.stringify(article)
    //     return this.http.post(this.rootUrl + '/post', body, reqHeaders)
    // }

    // updateArticle(article: Post) {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
    //     let body = JSON.stringify(article)
    //     return this.http.post(this.rootUrl + '/post/' + article.slug, body, reqHeaders)
    // }

    // deleteArticle(id: string) {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
    //     return this.http.delete(this.rootUrl + '/post/' + id, reqHeaders)
    // }   

    // Comment section

    getArticlePublishedComments(id: string): Observable<Comment[]> {
        let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) }
        return this.http.get(this.rootUrl + '/post/' + id + '/comments/published?delay=3', reqHeaders).pipe(map((data: any) => {
            let comments: Comment[] = new Array()
            data.map(value => comments.push(new Comment().deserialize(value)))
            return comments
        }))
    }

    // getArticleDraftComments(id: string): Observable<Comment[]> {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
    //     return this.http.get(this.rootUrl + '/post/' + id + '/comments/draft', reqHeaders).pipe(map((data: any) => {
    //         let comments: Comment[] = new Array()
    //         data.map(value => comments.push(new Comment().deserialize(value)))
    //         return comments
    //     }))
    // }

    // getComment(id: string): Observable<Comment> {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
    //     return this.http.get(this.rootUrl + '/post/comment/' + id, reqHeaders).pipe(map((data: any) => {
    //         let comment: Comment = new Comment().deserialize(data)
    //         return comment
    //     }))
    // }

    SaveComment(comment: Comment, articleId: string) {
        let reqHeaders = { headers: new HttpHeaders(this.getheadersNoAuth()) }
        let body = JSON.stringify(comment)
        return this.http.post(this.rootUrl + '/post/' + articleId + '/comment?delay=3', body, reqHeaders)
    }

    // updateComment(comment: Comment) {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
    //     let body = JSON.stringify(comment)
    //     return this.http.post(this.rootUrl + '/post/comment/' + comment.id, body, reqHeaders)
    // }

    // deleteComment(id: string) {
    //     let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
    //     return this.http.delete(this.rootUrl + '/post/comment/' + id, reqHeaders)
    // }

    // Utility methods

    // getDraftPosts() {
    //     return this.draftArticlesSubject
    // }

    getPublishedPosts() {
        return this.publishedArticlesSubject
    }
}