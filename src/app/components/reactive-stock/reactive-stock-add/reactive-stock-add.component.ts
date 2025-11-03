import { Component, inject } from '@angular/core';
import { StockService } from '../../../services/stock.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IStock } from '../../../interfaces/stock.interface';

@Component({
  selector: 'reactive-stock-add',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-stock-add.component.html',
  styleUrl: './reactive-stock-add.component.css',
})
export class ReactiveStockAddComponent {
  constructor(public stockService: StockService) {}

  private fb = inject(FormBuilder);

  public addStockReactiveForm = this.fb.group({
    product: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)],
    ],
    quantity: [null, [Validators.required, Validators.min(3)]],
    existance: [null, [Validators.required, Validators.min(3)]],
  });

  onSubmit() {
    if (this.addStockReactiveForm.valid) {
      const data = this.addStockReactiveForm.value;
      const newStock: IStock = {
        id: Math.floor(Math.random() * 100),
        name: data.product!,
        quantity: data.quantity!,
        existances: data.existance!,
      };

      this.stockService.AddStock(newStock);

      this.clearForm();
    }
  }

  clearForm() {
    this.addStockReactiveForm.reset();
  }
}
