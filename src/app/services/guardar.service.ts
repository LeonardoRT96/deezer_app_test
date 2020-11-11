import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class GuardarService {
  key_db = "D3ZzeR_";
  fav_artistas = [];
  fav_albumes = [];
  fav_canciones = [];
  fav_playlists = [];

  constructor(private storage: Storage,
    private toastCtrl: ToastController) {
      this.loadArtistas();
      this.loadAlbumes();
      this.loadCanciones();
      this.loadPlaylists();
  }
  
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }

  saveArtista(artista: any){
    if(!this.existArtista(artista)){
      this.fav_artistas.push(artista);
      this.storage.set(this.key_db+'artistas', this.fav_artistas);
      this.presentToast("Se ha guardado el artista.");
    }else{
      this.presentToast("Ya se ha guardado el artista.")
    }
  }

  async loadArtistas(){
    const artistas = await this.storage.get(this.key_db+'artistas');
    if(artistas){
      this.fav_artistas = artistas;
    }
  }

  deleteArtista(artista: any) {
    this.fav_artistas = this.fav_artistas.filter( n => n.id !== artista.id);
    this.storage.set(this.key_db+'artistas', this.fav_artistas);
    this.presentToast('Artista eliminado.');
  }

  existArtista(artista: any){
    let existe = false;
    this.fav_artistas.forEach((data)=> {
      if(data.id == artista.id){
        existe = true;
      }
    });
    return existe;
  }

  saveAlbum(album: any){
    if(!this.existAlbum(album)){
      this.fav_albumes.push(album);
      this.storage.set(this.key_db+'album', this.fav_albumes);
      this.presentToast("Se ha guardado el album.");
    }else{
      this.presentToast("Ya se ha guardado el album.")
    }
  }

  async loadAlbumes(){
    const albumes = await this.storage.get(this.key_db+'album');
    if(albumes){
      this.fav_albumes = albumes;
    }
  }

  deleteAlbum(album: any) {
    this.fav_albumes = this.fav_albumes.filter( n => n.id !== album.id);
    this.storage.set(this.key_db+'album', this.fav_albumes);
    this.presentToast('Album eliminado.');
  }

  existAlbum(album: any){
    let existe = false;
    this.fav_albumes.forEach((data)=> {
      if(data.id == album.id){
        existe = true;
      }
    });
    return existe;
  }

  saveCancion(cancion: any){
    if(!this.existCancion(cancion)){
      this.fav_canciones.push(cancion);
      this.storage.set(this.key_db+'cancion', this.fav_canciones);
      this.presentToast("Se ha guardado la canción.");
    }else{
      this.presentToast("Ya se ha guardado la canción.")
    }
  }

  async loadCanciones(){
    const canciones = await this.storage.get(this.key_db+'cancion');
    if(canciones){
      this.fav_canciones = canciones;
      console.log(this.fav_canciones)
    }
  }

  deleteCancion(cancion: any) {
    this.fav_canciones = this.fav_canciones.filter( n => n.id !== cancion.id);
    this.storage.set(this.key_db+'cancion', this.fav_canciones);
    this.presentToast('Canción eliminada.');
  }

  existCancion(cancion: any){
    let existe = false;
    this.fav_canciones.forEach((data)=> {
      if(data.id == cancion.id){
        existe = true;
      }
    });
    return existe;
  }

  savePlaylist(playlist: any){
    if(!this.existPlaylist(playlist)){
      this.fav_playlists.push(playlist);
      this.storage.set(this.key_db+'playlists', this.fav_playlists);
      this.presentToast("Se ha guardado el playlist.");
    }else{
      this.presentToast("Ya se ha guardado el playlist.")
    }
    
  }

  async loadPlaylists(){
    const playlists = await this.storage.get(this.key_db+'playlists');
    if(playlists){
      this.fav_playlists = playlists;
    }
  }

  deletePlaylist(playlist: any) {
    this.fav_playlists = this.fav_playlists.filter( n => n.id !== playlist.id);
    this.storage.set(this.key_db+'playlists', this.fav_playlists);
    this.presentToast('Playlist eliminado.');
  }

  existPlaylist(playlist: any){
    let existe = false;
    this.fav_playlists.forEach((data)=> {
      if(data.id == playlist.id){
        existe = true;
      }
    });
    return existe;
  }
}
