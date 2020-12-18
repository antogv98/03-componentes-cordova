import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = Array (20);

  @ViewChild (IonInfiniteScroll) infineteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(){

    
    setTimeout(() => {

      if(this.data.length > 50){
        this.infineteScroll.complete();
        this.infineteScroll.disabled =true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);

      this.infineteScroll.complete(); 
    }, 1500);
  }

}
