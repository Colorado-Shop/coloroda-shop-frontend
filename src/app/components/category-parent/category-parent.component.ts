import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-parent',
  templateUrl: './category-parent.component.html',
  styleUrls: ['./category-parent.component.css']
})
export class CategoryParentComponent implements OnInit {

  id: string = "";
  constructor(private router: Router,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.router.navigate(["./child/" + this.id], { relativeTo: this.route, skipLocationChange: true });
    })
  }

  ngOnInit() {
  }

}
