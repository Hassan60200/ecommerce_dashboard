import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/API/api-manager.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  name: string = '';
  price: number = 0;
  availaible: boolean = false;
  best: boolean = false;
  category: number = 1;
  description: string = '';

  constructor(private api: ApiManagerService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const formData = {
      name: this.name,
      price: this.price,
      availaible: this.availaible,
      best: this.best,
      //category: this.category,
      description: this.description,
    };
    this.http.post('http://127.0.0.1:8000/admin/product/new', formData).subscribe(
      (response) => {
        // Gérez la réponse ici
        console.log('Réponse de la requête :', response);
      },
      (error) => {
        // Gérez les erreurs ici
        console.error('Erreur de la requête :', error);
      }
    );
  }
}
