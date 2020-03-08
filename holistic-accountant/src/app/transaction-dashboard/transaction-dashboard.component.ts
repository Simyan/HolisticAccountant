import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-dashboard',
  templateUrl: './transaction-dashboard.component.html',
  styleUrls: ['./transaction-dashboard.component.css']
})
export class TransactionDashboardComponent implements OnInit {

  stat1 = 300;
  stat2 = 500;
  stat3 = 42;
  constructor() { }

  ngOnInit(): void {
  }

}
