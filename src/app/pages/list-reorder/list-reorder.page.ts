import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {


  personajes: string[] = ['Aquaman', 'Superman','Batman', 'Mujer Maravilla','Flash'];

  reorderDisable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event:any){

    console.log(event);


    //Saca el elemento que queremos mover y lo guarda en una constante
    const itemMover = this.personajes.splice(event.detail.from, 1 )[0];
    //coloca la constante con el elemento que queremos mover en la nueva posicion
    this.personajes.splice(event.detail.to,0, itemMover);

    event.detail.complete();

    console.log(this.personajes);
    
    
  }

}
