import { Component, inject } from '@angular/core';
import { CategoryHeaderComponent } from "../../../components/category/category-header/category-header.component";
import { CategoryProductsComponent } from "../../../components/category/category-products/category-products.component";
import { CategoryHomeComponent } from "../../../components/category/category-home/category-home.component";
import { AudioGearComponent } from "../../../components/audio-gear/audio-gear.component";
import { CategoryService } from '../categories.service';

@Component({
    selector: 'app-earphones',
    standalone: true,
    templateUrl: './earphones.component.html',
    styleUrl: './earphones.component.scss',
    imports: [CategoryHeaderComponent, CategoryProductsComponent, CategoryHomeComponent, AudioGearComponent]
})
export class EarphonesComponent {
  private categoryService = inject(CategoryService);
  earphonesData = this.categoryService.productData.earphones
}
