import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../../services/API/api-manager.service";
import {Observable} from "rxjs";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  countUsers: number = 0
  countOrders: number = 0
  countProducts: number = 0

  constructor(private api: ApiManagerService) {
  }

  ngOnInit() {
    this.api.userIndex().subscribe(count =>{
      this.countUsers = count.length
    })
    this.api.productsIndex().subscribe(count =>{
      this.countProducts = count.length
    })
    this.api.orderIndex().subscribe(count =>{
      this.countUsers = count.length
    })
  }
}
