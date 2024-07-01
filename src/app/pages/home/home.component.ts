import { Component } from '@angular/core';
import { JumbotronComponent } from "../../components/jumbotron/jumbotron.component";
import { CategoryHomeComponent } from "../../components/category/category-home/category-home.component";
import { ProductsComponent } from "../../components/products/products.component";
import { AudioGearComponent } from "../../components/audio-gear/audio-gear.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [JumbotronComponent, CategoryHomeComponent, ProductsComponent, AudioGearComponent]
})
export class HomeComponent {

}
