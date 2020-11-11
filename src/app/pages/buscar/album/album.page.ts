import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  search: boolean = false;
  result: any = null;
  public skeleton = new Array(10);
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  buscar(val){
    if(val.detail.value != ''){
      this.search = true;
      console.log(val.detail.value)
      this.api.getAlbum(val.detail.value, 1, 20)
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
