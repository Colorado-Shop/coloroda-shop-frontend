import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/api/post.model';
import { APIPostService } from '../../services/post.service';
import { SEOService } from '../../services/seo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  article: Post = new Post()
  isLoading = true;
  constructor(private postService: APIPostService, private seoService: SEOService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let slug: string = params["id"];
      this.postService.getArticle(slug).subscribe((data: Post) => {
        this.article = data
        this.isLoading = false;
        this.seoService.addTags(this.article.seo)
      })
    })
  }

}
