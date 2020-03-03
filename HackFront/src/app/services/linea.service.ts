import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Estacion } from 'src/models/Estacion';
import { Linea } from 'src/models/Linea';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class LineaService {
  //Esto recibe la informacion de la linea.
  view = this.socket.fromEvent('update-view');
  linea: Observable<any[]> = new Observable();

  constructor(private http: HttpClient, private socket: Socket) { }
  joinRoom(id: string){
    this.socket.emit('join-room',id);
  }
  leaveRoom(id: string){
    this.socket.emit('leave-room',id);
  }


  getLinea(idlinea: string){
    return this.http.get<any[]>(`http://${location.hostname}:3000/lines/line/${idlinea}`);
  }

  //Por lo mietras pondre la ruta del twitter aqui
  getTweet(){
    return this.http.get(`http://${location.hostname}:3000/twitter/tweets`);
  }


}
