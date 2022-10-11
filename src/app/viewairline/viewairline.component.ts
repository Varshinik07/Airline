import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewairline',
  templateUrl: './viewairline.component.html',
  styleUrls: ['./viewairline.component.css']
})
export class ViewairlineComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewairline().subscribe(
      (data)=>{
        this.viewairline=data
      }
    )
  }

  viewairline:any=[]
  

  ngOnInit(): void {
  }

}
