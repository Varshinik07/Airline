import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.css']
})
export class PassangerComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.passangerdata().subscribe(
      (data)=>{
        this.passangerData=data
      }
    )
  }
 
passangerData:any=[]


  ngOnInit(): void {
  }

}
