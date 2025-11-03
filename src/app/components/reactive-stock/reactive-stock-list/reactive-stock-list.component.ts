import { Component } from '@angular/core';
import { StockService } from '../../../services/stock.service';

@Component({
  selector: 'reactive-stock-list',
  imports: [],
  templateUrl: './reactive-stock-list.component.html',
  styleUrl: './reactive-stock-list.component.css',
})
export class ReactiveStockListComponent {
  constructor(public stockService: StockService) {}
  
}
