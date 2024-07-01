import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [NavigationComponent, RouterLink, RouterLinkActive]
})
export class HeaderComponent {

}
