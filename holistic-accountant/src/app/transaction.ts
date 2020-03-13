export interface TransactionList {
    items: Transaction[];
    totalCount: number;
  }
  
  export interface Transaction {
    title: string;
    price: number;
  }