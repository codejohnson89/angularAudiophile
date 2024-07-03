import { Component, inject } from '@angular/core';
import { CategoryHomeComponent } from "../../../components/category/category-home/category-home.component";
import { AudioGearComponent } from "../../../components/audio-gear/audio-gear.component";
import { CategoryService } from '../categories.service';
import { CategoryHeaderComponent } from "../../../components/category/category-header/category-header.component";
import { CategoryProductsComponent } from "../../../components/category/category-products/category-products.component";

@Component({
    selector: 'app-headphones',
    standalone: true,
    templateUrl: './headphones.component.html',
    styleUrl: './headphones.component.scss',
    imports: [CategoryHomeComponent, AudioGearComponent, CategoryHeaderComponent, CategoryProductsComponent]
})
export class HeadphonesComponent {
  private categoryService = inject(CategoryService);
  headphonesData = this.categoryService.productData.headphones
}
