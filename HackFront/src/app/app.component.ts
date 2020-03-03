import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HackFront';
  route:any;

  constructor(){

  }

  ngOnInit() {
    this.route=window.location.pathname;
    console.log(this.route);
  }

  ruta(index:any){
    alert(index);
  }
  
  
}

