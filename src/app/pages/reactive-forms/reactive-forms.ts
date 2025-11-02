import { JsonPipe, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-forms',
  imports: [ReactiveFormsModule, TitleCasePipe, JsonPipe],
  templateUrl: './reactive-forms.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReactiveForms {
  public name = signal('Guichisin');
  private fb = inject(FormBuilder);

  public myForm = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(5)]],
    quantity: [0, [Validators.required, Validators.min(3)]],
    existance: [0, [Validators.required, Validators.min(3)]],
  });

  ngOnInit() {
    console.log(this.name());
  }
}
