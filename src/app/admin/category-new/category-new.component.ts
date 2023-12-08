import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {
  newCategoryName: string = '';
  newCategoryDescription: string = '';

  constructor(private api: ApiManagerService, private router: Router) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addNewCategory() {
    const newCategoryData = {
      name: this.newCategoryName,
      description: this.newCategoryDescription,
    }

    this.api.addCategory(newCategoryData).subscribe(
      (response) => {
        this.router.navigate(['/categories']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la catégorie :', error);
      }
    );

  };
}
