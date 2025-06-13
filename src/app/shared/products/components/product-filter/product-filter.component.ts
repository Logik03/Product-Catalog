import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CurrencyFormatDirective } from '../../../../core/directives/currency-format.directive';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyFormatDirective ],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent {

  filtersChanged = output<any>();

  categories = ['Electronics', 'Books', 'Clothing'];

  form = inject(FormBuilder).group({
    search: [''],
    filterType: ['category'],
    category: [''],
    priceMin: [null], 
  priceMax: [null]
  });

  constructor() {
    this.form.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      const { search, filterType, category, priceMin, priceMax } = value;

      if (filterType === 'category') {
        this.filtersChanged.emit({
          search,
          category,
          priceMin: null,
          priceMax: null
        });
      } else {
        this.filtersChanged.emit({
          search,
          category: null,
          priceMin: parseFloat(priceMin ?? '') || 0,
          priceMax: parseFloat(priceMax ?? '') || Infinity
        });
      }
    });
  }
}
