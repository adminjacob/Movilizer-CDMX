import { Component, OnInit } from '@angular/core';
import { LineaService } from '../services/linea.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor(public lineaService: LineaService) { }

  tweets:any;

  ngOnInit() {
    this.lineaService.getTweet().subscribe(res=>{
      console.log(res);
      this.tweets=res;
    });
    
    

  }

}
