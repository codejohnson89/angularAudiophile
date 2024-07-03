import { Component } from '@angular/core';
import { CategoryHomeComponent } from "../../components/category/category-home/category-home.component";
import { AudioGearComponent } from "../../components/audio-gear/audio-gear.component";

@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
    imports: [CategoryHomeComponent, AudioGearComponent]
})
export class CategoriesComponent {
  private 
}
