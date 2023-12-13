import {Category} from "./Category";

export class Product {
  id!: number;
  title!: string;
  description!: string;
  price!: number;
  available!: boolean;
  best!: boolean;
  category!: Category;

  constructor(
    title: string = '',
    description: string = '',
    price: number,
    available: boolean,
    best: boolean = false,
    category: Category,
  ) {
    this.title = title;
    this.description = description;
    this.available = available;
    this.best = best;
    this.price = price;
    this.category = category;
  }
}
