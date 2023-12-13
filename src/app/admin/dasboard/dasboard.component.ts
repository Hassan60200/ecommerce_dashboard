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
  chartsData: any
  chart: any = []

  constructor(private api: ApiManagerService) {
  }

  ngOnInit() {
    this.api.chartsAdmin().subscribe(
      (data: any) => {
        this.chartsData = data;
      },
      error => {
        console.error('Error fetching charts data:', error);
      }
    );
  }
}
