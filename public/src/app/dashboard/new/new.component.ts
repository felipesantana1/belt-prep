import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  recipe = new Recipe();

  constructor(private _service: RecipeService, private _router: Router){}

  ngOnInit() {
  }

  onSubmit(){
    this.recipe.chef = this._service.user;
    this._service.create(this.recipe, (res)=>{
      this._router.navigateByUrl("/recipes/edit/"+res._id)
    });
  }

}
