import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public routes: any[] = [
    { path: '/', title: "Home" },
    { path: "/characters", title: "Characters" },
    { path: "/planets", title: "Planets" },
    { path: "/species", title: "Species" },
    { path: "/spaceships", title: "Spaceships" },
    { path: "/vehicles", title: "Vehicles" },
    { path: "/about", title: "About" }
  ];

  constructor() { }
}
