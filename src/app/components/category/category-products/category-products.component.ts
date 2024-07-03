import { Component, Input } from '@angular/core';

interface Product {
    id: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    gallery: {
      first: {
          mobile: string;
          tablet: string;
          desktop: string;
      };
      second: {
          mobile: string;
          tablet: string;
          desktop: string;
      };
      third: {
          mobile: string;
          tablet: string;
          desktop: string;
      };
  };
  others: {
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
}[];
}[]

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.scss'
})
export class CategoryProductsComponent {
 @Input() products!: Product[];
}
