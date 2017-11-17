import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user;

  constructor(private _service:RecipeService, private _router:Router) {
    this.user = this._service.user;
  }

  ngOnInit() {
  }

  logOut(){
    this._service.user = null;
    this._router.navigateByUrl("/");
  }

}
