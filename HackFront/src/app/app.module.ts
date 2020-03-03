import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { LineaInfoComponent } from './linea-info/linea-info.component';
import { TwitterComponent } from './twitter/twitter.component';
import { FormsModule } from "@angular/forms";
import { LineaService } from './services/linea.service';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { CrowdPipe } from './crowd.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
const config: SocketIoConfig = {url: `http://${location.hostname}:3000`, options: {}};
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LineaInfoComponent,
    TwitterComponent,
    CrowdPipe,
    TimeAgoPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [LineaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
