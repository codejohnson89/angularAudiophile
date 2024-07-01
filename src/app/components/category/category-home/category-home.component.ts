import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-home.component.html',
  styleUrl: './category-home.component.scss'
})
export class CategoryHomeComponent {

  tileData = [
    {
      img: 'assets/shared/desktop/image-category-thumbnail-headphones.png',
      text: 'headphones',
      link: '/category/headphones',
      id: 1,
    },
    {
      img: 'assets/shared/desktop/image-category-thumbnail-earphones.png',
      text: 'earphones',
      link: '/category/earphones',
      id: 2
    },
    {
      img: 'assets/shared/desktop/image-category-thumbnail-speakers.png',
      text: 'speakers',
      link: '/category/speakers',
      id: 3
    }
  ];

  
}
