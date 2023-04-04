import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movistar-app';
  showFiller = false;
  showMenu = false;
  showSection = true;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      // Cambia el valor de la propiedad showMenu basado en la ruta actual
      this.showSection = !this.router.url.includes('/login');
    });
}
  // ngAfterViewInit(): void {
  //   const currentRoute = this.router.routerState;
  //   console.log(currentRoute);
  // }
  // ngOnInit(): void {
  //   const currentRoute = this.router.routerState.snapshot.url;
  //   console.log(currentRoute);
  // }
}
