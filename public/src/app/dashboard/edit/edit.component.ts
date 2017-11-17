import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  recipeId;
  recipe;
  ingredient={name:"", ingredient:""};

  constructor(private _service:RecipeService, private _route:ActivatedRoute){
    this._route.paramMap.subscribe((params)=>{
      this.recipeId=params.get("id");
      this._service.one(this.recipeId, (res)=>{
        this.recipe = res;
      })
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this.recipe.ingredients.push(this.ingredient);
    this._service.update(this.recipe, (res)=>{})
  }

}
