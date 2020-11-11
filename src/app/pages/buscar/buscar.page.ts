import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  select = "Cancion";
  search = false;
  result = null;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  

}
