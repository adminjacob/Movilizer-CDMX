import { Component, OnInit } from '@angular/core';
import { LineaPortrait } from 'src/models/LineaPortrait';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  lineas: LineaPortrait[] = [];
  //search_linea: string = '';
  constructor() {
    this.lineas.push({id: 1, nombre: 'Linea 1', image: '/assets/images/linea1-500x500.png'});
    this.lineas.push({id: 2, nombre: 'Linea 2', image: '/assets/images/linea2-500x500.png'});
    this.lineas.push({id: 3, nombre: 'Linea 3', image: '/assets/images/linea3-500x500.png'});
    this.lineas.push({id: 4, nombre: 'Linea 4', image: '/assets/images/linea4-500x500.png'});
    this.lineas.push({id: 5, nombre: 'Linea 5', image: '/assets/images/linea5-500x500.png'});
    this.lineas.push({id: 6, nombre: 'Linea 6', image: '/assets/images/linea6-500x500.png'});
    this.lineas.push({id: 7, nombre: 'Linea 7', image: '/assets/images/linea7-500x500.png'});
    this.lineas.push({id: 8, nombre: 'Linea 8', image: '/assets/images/linea8-500x500.png'});
    this.lineas.push({id: 9, nombre: 'Linea 9', image: '/assets/images/linea9-500x500.png'});
    this.lineas.push({id: 10, nombre: 'Linea A', image: '/assets/images/lineaa-500x500-500x500.png'});
    this.lineas.push({id: 11, nombre: 'Linea B', image: 'assets/images/lineab-500x500-500x500.png'});
    this.lineas.push({id: 12, nombre: 'Linea 12', image: '/assets/images/linea12-500x500.png'});

  }

  ngOnInit() {
  }

}
