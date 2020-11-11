import { Component, OnInit } from '@angular/core';
import { GuardarService } from 'src/app/services/guardar.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.page.html',
  styleUrls: ['./cancion.page.scss'],
})
export class CancionPage implements OnInit {
  result: any = null;
  constructor(private dataSave: GuardarService) { }

  ngOnInit() {
    this.refresh()
  }

  refresh(){
    this.dataSave.loadCanciones().then((ok)=>{
      this.result = this.dataSave.fav_canciones;
    });
  }

  delete(item){
    this.dataSave.deleteCancion(item);
  }

}
