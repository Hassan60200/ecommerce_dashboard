import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  urlAdmin: string = "http://localhost:8000/admin/"

  constructor(private http: HttpClient) {}


  productsIndex(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlAdmin}products`);
  }

  chartsAdmin(): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlAdmin}`);
  }

  categoriesIndex(): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlAdmin}category`);
  }

}
