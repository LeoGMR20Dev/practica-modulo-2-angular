import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StockService } from '../../services/stock.service';
import { ReactiveStockAddComponent } from '../../components/reactive-stock/reactive-stock-add/reactive-stock-add.component';
import { ReactiveStockListComponent } from '../../components/reactive-stock/reactive-stock-list/reactive-stock-list.component';

@Component({
  selector: 'app-reactive-stock',
  imports: [
    ReactiveFormsModule,
    ReactiveStockAddComponent,
    ReactiveStockListComponent,
  ],
  templateUrl: './reactive-stock.component.html',
  styleUrl: './reactive-stock.component.css',
})
export default class ReactiveStockComponent {
  stockService = inject(StockService);
}
