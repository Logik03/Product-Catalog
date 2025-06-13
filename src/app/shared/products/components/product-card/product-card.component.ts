import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
  addToCart = output<Product>();
  editProduct = output<Product>();

  selectedColor?: string;

  onAddToCart() {
    this.addToCart.emit(this.product()); 
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }
  
  onEditProduct(product: Product) {
    this.editProduct.emit(this.product());
  }

}
