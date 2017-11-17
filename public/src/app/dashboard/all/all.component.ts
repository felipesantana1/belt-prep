import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  recipes;

  constructor(private _service: RecipeService){
    this._service.all((res) => {
      this.recipes=res;
    });
  }

  ngOnInit() {
  }

  like(idx){
    this.recipes[idx].rating += 1;
    this._service.update(this.recipes[idx], (res)=>{});
  }
}
