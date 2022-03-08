import { Component } from '@angular/core';
import { DataService } from './providers/appDataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placementTask';
  data: any;
  p: number = 1;

  constructor(private dataService: DataService){
    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe(res=>{
      console.log(res);
      this.data =res;
    })
  }
}
