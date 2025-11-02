import { Component, inject } from '@angular/core';
import { StockAddComponent } from '../../components/stock-add/stock-add.component';
import { StockListComponent } from '../../components/stock-list/stock-list.component';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.html',
  imports: [StockAddComponent, StockListComponent],
  providers: [StockService],
})
export class StockComponent {
  constructor(public stockService: StockService) {}
}
