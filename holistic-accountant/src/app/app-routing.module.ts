import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransactionDashboardComponent} from './transaction-dashboard/transaction-dashboard.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {MasterPageComponent} from './master-page/master-page.component'
const appRoutes : Routes = [
    {
        path: '',
        component: MasterPageComponent,
        children: [
            { path: 'dashboard', component: TransactionDashboardComponent},
            { path: 'list', component: TransactionListComponent},
        ] 
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }