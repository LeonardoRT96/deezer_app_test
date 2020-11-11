import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  search: boolean = null;
  result: any = null;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  buscar(val){
    if(val.detail.value != ''){
      this.search = true;
      console.log(val.detail.value)
      this.api.getPlaylist(val.detail.value, 1, 20)
      .subscribe((result) =>{
        this.search = false;
        this.result = result;
        console.log(this.result)
      })
    }else{
      this.result = null;
    }
    
  }

}
