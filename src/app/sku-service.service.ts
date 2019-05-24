import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class SkuServiceService {

  // skuUrl = 'https://swapi.co/api/starships/59/';
   skuUrl = 'http://sp-to-exp-staging-dev.us-e2.cloudhub.io/update/sku';

  constructor(private http: HttpClient) { }

  getSku(skuForm) {
    console.log(skuForm);
    skuForm = [skuForm];
    return this.http.post<any>(this.skuUrl, skuForm, httpOptions);
  }

}
