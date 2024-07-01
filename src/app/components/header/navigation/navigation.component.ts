import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgbNavModule, RouterLink, RouterLinkActive, NgbCollapseModule, CartComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  active = 1;
  isMenuCollapsed = true;
}
