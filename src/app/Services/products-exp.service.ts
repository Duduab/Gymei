import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductObject} from '../products';


@Injectable({
  providedIn: 'root'
})
export class ProductsExpService {

  private _url: string = '../assets/data/products.json';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductObject[]> {
    return this.http.get<ProductObject[]>(this._url);
  }

}
