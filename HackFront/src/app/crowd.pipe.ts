import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crowd'
})
export class CrowdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res = "sin informacion"
    let crowd = value * 100;
    //console.log(value)
    if (crowd >= 75) {
      res = "Saturado"
    }else if(crowd < 75 && crowd >= 25){
      res = "Concurrido"
    }else if(crowd < 25 && crowd > 0){
      res = "Poca afluencia"
    }else{
      res = "Sin informacion"
    }
    return res;
  }

}
