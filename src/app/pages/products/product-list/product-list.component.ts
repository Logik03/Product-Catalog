import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from '../../../shared/products/components/product-card/product-card.component';
import { ProductFilterComponent } from '../../../shared/products/components/product-filter/product-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { EditProductComponent } from '../../../shared/products/modals/edit-product/edit-product.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductFilterComponent, ReactiveFormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  filtered = signal<Product[]>([]);
  selectedProduct: Product | null = null;
  modalService = inject(BsModalService);

  constructor() {
    this.productService.getProducts().subscribe(products => {
      this.products.set(products);
      this.filtered.set(products);
    });
  }

  applyFilters(filters: any) {
    const { search, category, priceMin, priceMax } = filters;
  
    this.filtered.set(
      this.products().filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
  
        const matchesCategory = category ? p.category === category : true;
        const matchesPrice = priceMin !== null && priceMax !== null
          ? p.price >= priceMin && p.price <= priceMax
          : true;
  
        return matchesSearch && matchesCategory && matchesPrice;
      })
    );
  }
  openEditModal(product: Product) {
    this.modalService.show(EditProductComponent, {
      initialState: { product },
      class: 'modal-lg'
    });
  }

}
