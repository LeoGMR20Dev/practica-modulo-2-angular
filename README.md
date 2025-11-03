# Introducción

En este proyecto se agregó un formulario reactivo para la sección de stocks. A continuación, se explica los cambios realizados para la implementación de dicho formulario.

# Componentes Agregados

## Página reactive-stock

Se agregó un componente llamado **reactive-stock** en la carpeta de **pages**.

En el archivo .ts de este componente se injecta el servicio **StockService** para que pueda ser usado en los componentes que se mostrarán a continuación.

```
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
```

## Componente reactive-stock-add

Se agregó el componente **reactive-stock-add**, el cual se encarga de la gestión y renderizado del formulario para agregar stock.

Para usar las funciones del servicio de **StockService** se lo importa mediante el constructor de la clase. Luego se declara la función **onSubmit** para agregar un item del stock en la lista del servicio, esto en caso de que el formulario fuera valido.

```
constructor(public stockService: StockService) {}

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
```

Se añadío la función onSubmit en el formulario en el HTML respectivo del componente junto con sus inputs.

```
<form
  autocomplete="off"
  class="d-flex flex-column gap-2"
  [formGroup]="addStockReactiveForm"
  (ngSubmit)="onSubmit()"
>
  <div>
    <label>Nombre:</label>
    <input
      type="text"
      class="form-control"
      placeholder="Ingrese el nombre del producto"
      formControlName="product"
    />
  </div>
  ...
```

## Componente reactive-stock-list

Se agregó el componente **reactive-stock-list** para la renderización de la lista de productos de stock. Se invoca la lista de items de **StockService** para ser renderizada en una tabla en caso de tener algún item registrado, caso contrario solo se muestra un texto.

```

@if(stockService.stockItems().length >0){
<table class="table table-striped border">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Existencias</th>
    </tr>
  </thead>
  <tbody>
    @for (stock of stockService.stockItems(); track stock.id){
    <tr>
      <td>{{ stock.name }}</td>
      <td
        [class.text-danger]="stock.quantity < 10"
        [class.text-success]="stock.quantity >= 10"
      >
        {{ stock.quantity }}
      </td>
      <td>
        {{ stock.existances }}
      </td>
    </tr>
    }
  </tbody>
</table>
} @else {
<p class="">No se tienen productos registrados.</p>
}
```

# Resultado final

<img width="1881" height="425" alt="image" src="https://github.com/user-attachments/assets/ac4888a6-e12f-4cd6-a633-fde169059db1" />

