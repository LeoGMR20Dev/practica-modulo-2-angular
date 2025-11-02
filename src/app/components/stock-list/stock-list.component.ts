import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { IStock } from '../../interfaces/stock.interface';

@Component({
  selector: 'stock-list',
  imports: [],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockListComponent {
  stockTitle = signal<string>('Listado de stock');
  stockList = input.required<IStock[]>();
}
