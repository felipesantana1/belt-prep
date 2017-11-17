import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RecipeService {

  user;

  constructor(private _http: Http){}
  all(callBack){
    this._http.get('/all').subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  };

  one(id, callBack){
    this._http.get("/one/"+id).subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  };
  
  create(data, callBack){
    this._http.post("/recipes", data).subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  };

  update(data, callBack){
    this._http.put("/recipes/"+data._id, data).subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
