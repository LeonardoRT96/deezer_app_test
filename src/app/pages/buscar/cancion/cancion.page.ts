import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GuardarService } from 'src/app/services/guardar.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.page.html',
  styleUrls: ['./cancion.page.scss'],
})
export class CancionPage implements OnInit {
  search: boolean = false;
  result: any = null;
  public skeleton = new Array(10);
  constructor(private api: ApiService,
    private dataSave: GuardarService) { }

  ngOnInit() {
  }

  buscar(val){
    if(val.detail.value != ''){
      this.search = true;
      console.log(val.detail.value)
      this.api.getTrack(val.detail.value, 1, 20)
      .subscribe((result) =>{
        this.search = false;
        this.result = result;
        console.log(this.result)
      })
    }else{
      this.result = null;
    }
  }

  guardarFav(item){
    this.dataSave.loadCanciones().then((ok)=>{
      console.log(this.dataSave.existCancion(item))
      if(this.dataSave.existCancion(item)){
        this.dataSave.presentToast("Ya se ha guardado la canción.")
      }else{
        this.dataSave.saveCancion(item);
      }
    })
    
  }

}
