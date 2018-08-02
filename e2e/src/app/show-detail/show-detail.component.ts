import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
data;
  constructor(private route:Router) { }
  back() {
    this.route.navigate(['']);
  }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem("data"));
  }

}
