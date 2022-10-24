import { Injectable } from '@angular/core';
import {Currencies} from "../models/currencies";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {publish} from "rxjs";
import {Valiutos} from "../models/valiutos";

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

    // public _valiutos=['AUD', 'BGN', 'BRL', 'EUR', 'USD']

  constructor(private http:HttpClient) { }

  public getCurrencies(from:string, to:string){
    return this.http.get<Currencies>('https://api.frankfurter.app/latest?from='+from+'&to='+to)
  }

  public getValiutos(){
    return this.http.get<Valiutos>('https://api.frankfurter.app/currencies');

}
// // public get currencies(){
// //     return this._valiutos
// }
}
