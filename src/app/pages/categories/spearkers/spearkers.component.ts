import { Component, inject } from '@angular/core';
import { CategoryHeaderComponent } from "../../../components/category/category-header/category-header.component";
import { CategoryProductsComponent } from "../../../components/category/category-products/category-products.component";
import { CategoryHomeComponent } from "../../../components/category/category-home/category-home.component";
import { AudioGearComponent } from "../../../components/audio-gear/audio-gear.component";
import { CategoryService } from '../categories.service';

@Component({
    selector: 'app-spearkers',
    standalone: true,
    templateUrl: './spearkers.component.html',
    styleUrl: './spearkers.component.scss',
    imports: [CategoryHeaderComponent, CategoryProductsComponent, CategoryHomeComponent, AudioGearComponent]
})
export class SpearkersComponent {
  private categoryService = inject(CategoryService);
  speakersData = this.categoryService.productData.speakers
}
