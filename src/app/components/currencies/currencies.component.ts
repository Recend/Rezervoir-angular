import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Currencies} from "../../models/currencies";
import {CurrenciesService} from "../../services/currencies.service";

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  public currency:any|null=null;
  public key:any
  public loading=true;
  public error=false;
  public base:string|null=null;
  public from="EUR";
  public to="USD";
  public valiutos:any

  public outtext:string|null=null;

  constructor( private currenciesService:CurrenciesService) {
    this.loadCurrencies();
    this.loadValiutos();
  }

  private loadValiutos(){
    this.currenciesService.getValiutos().subscribe(
      {
        next: (response) => {
          this.valiutos =  Object.keys(response);
        }
      });
  }


  private loadCurrencies(){
    this.loading=true;
    this.error=false;
    this.currenciesService.getCurrencies(this.from, this.to).subscribe(
      {
        next:(response)=>{
          this.currency=Object.values(response.rates);
          this.key=Object.keys(response.rates);
          this.loading=false;
          this.outtext=this.from + ' to ' +this.to +' conversion is ' + this.currency + ' ' + this.to ;
        },
        error:(err)=>{
          this.error=true;
          this.loading=false;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  public clickAndCount(){
    this.loadCurrencies();
  }

}
