import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, shareReplay } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private readonly productsData: Product[] = [
    {
      id: 1,
      name: 'Airmax-90',
      category: 'Clothing',
      price: 150,
      discountPrice: 200,
      description: 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.',
      imageUrl: 'assets/images/shoe.png',
      sizes: [7, 8, 9, 10, 11],
      colors: ['yellow', 'black', 'blue']
    },
    {
      id: 2,
      name: 'Air Jordan 1 mid',
      category: 'Clothing',
      price: 150,
      discountPrice: 200,
      description: 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.',
      imageUrl: 'assets/images/shoe.png',
      sizes: [7, 8, 9, 10, 11],
      colors: ['yellow', 'black', 'blue']
    },
    {
      id: 3,
      name: 'Air Jordan 90 pro',
      category: 'Clothing',
      price: 150,
      discountPrice: 200,
      description: 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.',
      imageUrl: 'assets/images/shoe.png',
      sizes: [7, 8, 9, 10, 11],
      colors: ['yellow', 'black', 'blue']
    },
    {
      id: 4,
      name: 'Air Force-1',
      category: 'Clothing',
      price: 150,
      discountPrice: 200,
      description: 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.',
      imageUrl: 'assets/images/shoe.png',
      sizes: [7, 8, 9, 10, 11],
      colors: ['yellow', 'black', 'blue']
    },
    {
      id: 5,
      name: 'Air Jordan Pro',
      category: 'Clothing',
      price: 150,
      discountPrice: 200,
      description: 'Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.',
      imageUrl: 'assets/images/shoe.png',
      sizes: [7, 8, 9, 10, 11],
      colors: ['yellow', 'black', 'blue']
    },
    {
      id: 6,
      name: 'Sony WH-1000XM5 Headphones',
      category: 'Electronics',
      price: 379,
      discountPrice: 429,
      description: 'Industry-leading noise canceling with Dual Noise Sensor technology and up to 30 hours of battery life.',
      imageUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
      sizes: [],
      colors: ['black', 'silver']
    },
    {
      id: 7,
      name: 'Atomic Habits by James Clear',
      category: 'Books',
      price: 16,
      discountPrice: 20,
      description: 'An easy & proven way to build good habits and break bad ones — one of the most influential books on behavior change.',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
      sizes: [],
      colors: []
    },
    {
      id: 8,
      name: 'Fossil Smartwatch Gen 6',
      category: 'Accessories',
      price: 299,
      discountPrice: 349,
      description: 'Powered with Wear OS by Google, Fossil Gen 6 offers heart rate monitoring, phone notifications, and Alexa built-in.',
      imageUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
      sizes: [],
      colors: ['black', 'rose gold']
    },
    {
      id: 9,
      name: 'Philips Hue Smart Bulb',
      category: 'Home',
      price: 49,
      discountPrice: 59,
      description: 'Smart LED light that allows you to customize brightness, color temperature, and create automation from your phone.',
      imageUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
      sizes: [],
      colors: ['white', 'multicolor']
    },
    {
      id: 10,
      name: 'Adjustable Dumbbell Set',
      category: 'Fitness',
      price: 199,
      discountPrice: 229,
      description: 'Compact and versatile dumbbell set that adjusts from 5 to 52.5 pounds with a single turn.',
      imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
      sizes: [],
      colors: ['black', 'red']
    }
  ];


  
  private products$ = of(this.productsData).pipe(
    delay(300), 
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor() {}

  
  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  
  getCategories(): Observable<string[]> {
    return this.products$.pipe(
      map(list => Array.from(new Set(list.map(p => p.category))))
    );
  }

 
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.getProducts().pipe(
      map(list =>
        category ? list.filter(p => p.category === category) : list
      )
    );
  }

 
  getProductsByPriceRange(min: number, max: number): Observable<Product[]> {
    return this.getProducts().pipe(
      map(list => list.filter(p => p.price >= min && p.price <= max))
    );
  }

 
  getFilteredProducts(
    category: string,
    min: number,
    max: number,
    search: string
  ): Observable<Product[]> {
    const term = search.trim().toLowerCase();
    return this.getProducts().pipe(
      map(list =>
        list.filter(p => {
          const matchesCategory = category ? p.category === category : true;
          const matchesPrice = p.price >= min && p.price <= max;
          const matchesSearch = p.name.toLowerCase().includes(term);
          return matchesCategory && matchesPrice && matchesSearch;
        })
      )
    );
  }
}
