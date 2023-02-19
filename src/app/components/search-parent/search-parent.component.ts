import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-parent',
  templateUrl: './search-parent.component.html',
  styleUrls: ['./search-parent.component.css']
})
export class SearchParentComponent implements OnInit {

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
