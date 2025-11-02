import { effect, Injectable, signal } from '@angular/core';
import { IStock } from '../interfaces/stock.interface';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  // stockList = signal<IStock[]>([
  //   {
  //     id: 1,
  //     name: 'Laptop',
  //     quantity: 5,
  //   },
  //   {
  //     id: 2,
  //     name: 'Escritorio',
  //     quantity: 10,
  //   },
  //   {
  //     id: 3,
  //     name: 'Silla',
  //     quantity: 30,
  //   },
  //   {
  //     id: 4,
  //     name: 'Fotocopiadora',
  //     quantity: 2,
  //   },
  //   {
  //     id: 5,
  //     name: 'Boligrafos',
  //     quantity: 200,
  //   },
  // ]);

  stockItems = signal<IStock[]>(loadFromLocalStorage());
  saveStocksInLocalStorage = effect(() => {
    localStorage.setItem('stock', JSON.stringify(this.stockItems()));
  });

  AddStock(stockItem: IStock) {
    this.stockItems.update((currentStocks) => [...currentStocks, stockItem]);
  }
}

function loadFromLocalStorage(): IStock[] {
  const stock = localStorage.getItem('stock');
  return stock ? JSON.parse(stock) : [];
}
