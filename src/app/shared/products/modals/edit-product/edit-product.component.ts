import { Component, Input, inject, input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { CurrencyFormatDirective } from '../../../../core/directives/currency-format.directive';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CurrencyFormatDirective],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {

  @Input() product!: Product;
  form!: FormGroup;

  private fb = inject(FormBuilder);
  private bsModalRef = inject(BsModalRef<EditProductComponent>);

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.product.name, Validators.required],
      price: [this.product.price, [Validators.required, Validators.min(1)]],
      category: [this.product.category, Validators.required],
      description: [this.product.description]
    });
  }

  save(): void {
    if (this.form.valid) {
      const updatedProduct = { ...this.product, ...this.form.value };
      this.bsModalRef.hide();
      console.log('Updated Product:', updatedProduct);
    }
  }

  close(): void {
    this.bsModalRef.hide();
  }
}
