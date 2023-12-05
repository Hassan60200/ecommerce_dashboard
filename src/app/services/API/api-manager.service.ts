import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  urlAdmin: string = "http://localhost:8000/admin/"

  constructor(private http: HttpClient) {
  }


  productsIndex(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlAdmin}products`);
  }

  addProduct(ProductData: any): Observable<any> {
    return this.http.post<any>(`${this.urlAdmin}products/new`, ProductData);
  }

  getProductById(idNumber: number): Observable<any> {
    return this.http.get<any>(`${this.urlAdmin}products/${idNumber}`);
  }

  editProduct(categoryId: number, categoryData: any): Observable<any> {
    return this.http.put<any>(`${this.urlAdmin}products/edit/${categoryId}`, categoryData);
  }

  deleteProduct(categoryId: number): Observable<any> {
    return this.http.delete<any>(`${this.urlAdmin}products/delete/${categoryId}`);
  }

  chartsAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlAdmin}`);
  }

  categoriesIndex(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlAdmin}categories`);
  }

  addCategory(categoryData: any): Observable<any> {
    return this.http.post<any>(`${this.urlAdmin}categories/add`, categoryData);
  }

  getCategoryById(idNumber: number): Observable<any> {
    return this.http.get<any>(`${this.urlAdmin}categories/${idNumber}`);
  }

  editCategory(categoryId: number, categoryData: any): Observable<any> {
    return this.http.put<any>(`${this.urlAdmin}categories/edit/${categoryId}`, categoryData);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete<any>(`${this.urlAdmin}categories/delete/${categoryId}`);
  }
}
