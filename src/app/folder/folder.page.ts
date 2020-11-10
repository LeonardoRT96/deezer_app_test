import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public result = null;
  public search = false;
  public skeleton = new Array(10);
  constructor(private activatedRoute: ActivatedRoute,
    private api: ApiService, ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  cancelar(){
    
  }

  buscar(val){
    if(val.detail.value != ''){
      this.search = true;
      console.log(val.detail.value)
      this.api.search(val.detail.value, 1, 20)
      .subscribe((result) =>{
        this.search = false;
        this.result = result;
        console.log(this.result)
      })
    }else{
      console.log("Se canceló")
      this.result = null;
    }
    
  }

}
