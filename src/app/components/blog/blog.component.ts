import { Component, OnInit } from '@angular/core';
import { PostsPage } from '../../models/api/postsPage.model';
import { Post } from '../../models/api/post.model';
import { APIPostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  page: PostsPage = new PostsPage
  articles: Post[] = new Array()
  maxPosts: number = 12;
  numberPages: number = 5;
  currentPage: number = 1;
  isLoading = true;
  constructor(private postService: APIPostService, private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let passedPage: number = params["page"];
      this.postService.getPaginatedPublishedArticles(passedPage).subscribe((data: PostsPage) => {
        this.currentPage = data.pagination.currentPage
        this.numberPages = data.pagination.totalPages
        this.maxPosts = data.pagination.pageCount
        this.articles = data.posts
        this.isLoading = false
        console.log(this.articles)
      })
    })
  }

  getPagesArray() {
    let pages = this.numberPages
    return Array(pages).fill(1).map((x, i) => i + 1)
  }

  getArticlesArray() {
    let ats = this.articles.length
    return Array(ats).fill(1).map((x, i) => i + 1)
  }

}
