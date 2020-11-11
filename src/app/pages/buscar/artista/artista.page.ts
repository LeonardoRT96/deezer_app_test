import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {
  search: boolean = false;
  result: any = null;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  buscar(val){
    if(val.detail.value != ''){
      this.search = true;
      console.log(val.detail.value)
      this.api.getArtist(val.detail.value)
      .subscribe((result) =>{
        this.search = false;
        this.result = result['data'][0];
        console.log(this.result)
      })
    }else{
      this.result = null;
    }
    
  }

}
