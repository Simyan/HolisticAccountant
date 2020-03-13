import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Observable, of, merge } from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Transaction, TransactionList} from '../transaction';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'price'];
  tempData = [{title: "asdds", price: 30}]
  mockHttpSource : MockHttpSource | null;
  data: Transaction[] = [];

  resultsLength = 1;

  constructor (private transactionService : TransactionService) {}

  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
 


  //ngOnInit(): void {}

  ngAfterViewInit() {
    console.log("Start");
    this.mockHttpSource = new MockHttpSource();
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith([{title: "def", price: 80}]),
        switchMap(() => {
            return this.transactionService.getTransactionList()
              //(this.sort.active, this.sort.direction, this.paginator.pageIndex);              
        }),
        map( data => {
          //.resultsLength = data.totalCount;
          console.log("data!");
          console.log("[2] Item: " + data.items[0].price)
          return data.items
        }),
        catchError(() => {
          return of([]);
        })
      ).subscribe(data => {
        console.log("S");
        this.data = data;
        //console.log("D:" + data[0].title);
      });
  }



}



export class MockHttpSource{
  
  getMockTransactions(sort : string, order: string, page: number ) : Observable<TransactionList>{
    let t : TransactionList;
    let i : Transaction = {title: "Pokemon Center", price:34.50}
    let j : Transaction = {title: "Pokemon Gym", price:14.50}
    t = {
      items : [i, j],
      totalCount : 2
    };
    console.log("Item: " + t.items[0].price)
    return of(t);
  }
}