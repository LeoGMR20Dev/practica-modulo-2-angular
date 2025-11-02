import { Component, output, signal } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { IStock } from '../../interfaces/stock.interface';

@Component({
  selector: 'stock-add',
  imports: [],
  templateUrl: './stock-add.component.html',
  styleUrl: './stock-add.component.css',
  providers: [StockService],
})
export class StockAddComponent {
  public stockAddTitle = signal<string>('Agregar stock');

  public name = signal('Gafete');
  public quantity = signal(10);
  public existances = signal(0);

  onNewStock = output<IStock>();

  addStock() {
    const newStock: IStock = {
      id: Math.floor(Math.random() * 100),
      name: this.name(),
      quantity: this.quantity(),
      existances: this.existances(),
    };
    this.onNewStock.emit(newStock);
    this.resetInputs();
  }

  resetInputs() {
    this.name.set('');
    this.quantity.set(0);
    this.existances.set(0);
  }
}
