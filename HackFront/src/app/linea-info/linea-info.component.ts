import { Component, OnInit, OnDestroy } from '@angular/core';
import { LineaService } from '../services/linea.service';
import { Observable, Subscription } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { Router, ActivatedRoute } from '@angular/router';
import { injectAttributeImpl } from '@angular/core/src/render3/di';

declare var $: any;
@Component({
  selector: 'app-linea-info',
  templateUrl: './linea-info.component.html',
  styleUrls: ['./linea-info.component.css']
})
export class LineaInfoComponent implements OnInit, OnDestroy {
  linea: any[];
  constructor(public lineaService: LineaService, private router:Router,private activatedRouted:ActivatedRoute) { }


  id:string;
  current_estacion;
  ngOnInit() {
    this.id= this.activatedRouted.snapshot.paramMap.get('id');
    //se llama a esta funcion para que el usuario pueda ver los datos cuando
    //entra por primera vez
    this.getLinea();

    //El usuario se une al cuarto relacionado con la linea.
    this.lineaService.joinRoom(this.id);

    /*En esta parte de el codigo nos suscribimos a un evento que envia una esta-
    cion en especifico. Al recibir el mensaje, se busca la estación que co-
    incida con la estacion actualizada y se reemplaza por la misma*/
    this.lineaService.view.subscribe((data: any) => {
      let mapeo = this.linea.map(item => item.name);
      console.log(data);
      let index = mapeo.indexOf(data.name);
      this.linea[index] = data;
    })



  }
  ngOnDestroy(){
    this.lineaService.leaveRoom(this.id);
  }
  getLinea(){
    this.lineaService.getLinea(this.id).subscribe(res => {
      console.log(res)
      this.linea = res;
    });
  }
  //hago las funciones y nadie las usa -_-
  parsePercent(value){
    return (value.crowdPercent *100)+'%';
  }
  getColor(value){
    let val = value.crowdPercent * 100;
    if (val >= 75) {
      return '#c90000';
    }else if (val < 75 && val >= 25){
      return '#ffd000';
    }else{
      return '#29af00';
    }
  }
}
