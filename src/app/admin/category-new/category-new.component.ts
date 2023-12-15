import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {
  formData!: FormGroup
  isSubmitted: boolean = false

  constructor(private api: ApiManagerService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    })
  }

  addNewCategory() {
    if (this.formData.valid) {
      this.isSubmitted = true;
      this.api.addCategory(this.formData.value).subscribe(
        (response) => {
          this.router.navigateByUrl('/categories');
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la catégorie :', error);
        }
      );
    }
  };
}
