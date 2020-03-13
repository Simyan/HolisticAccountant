import { Injectable } from '@angular/core';
import { Transaction, TransactionList } from './transaction'
//import { of } from 'rxjs';
import { Observable, of, merge } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private getTransactionListUrl = 'https://holistictransaction.free.beeceptor.com/getTransactionList';


  constructor(private http : HttpClient) { }

  getTransactionList() : Observable<TransactionList> {
    console.log("In Service function");
    let tlist  : TransactionList;
    let t1 : Transaction = { price : 55.42, title : "Transaction A" }
    let t2 : Transaction = { price : 75.12, title : "Transaction B" }
   
    tlist = {
      items : [t1, t2],
      totalCount : 2
    };

    console.log(tlist.items.length);

    let res : Observable<TransactionList> = this.http.get<TransactionList>(this.getTransactionListUrl);
    return res;
    //console.log("Res:" + res.items.length);
    //return of(tlist);
  }
}
