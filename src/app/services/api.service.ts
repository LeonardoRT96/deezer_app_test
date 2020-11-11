import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.api_url;
  constructor(private http: HttpClient) { }

  search(q: string, page: number, limit?: number){ 
    const header = new HttpHeaders({
      'x-rapidapi-key': environment.api_key,
      'x-rapidapi-host': environment.api_host,
      'useQueryString': 'true'
    });
    return this.http.get(this.url+"search?q="+q+"&limit="+(limit == null ? 12 : limit)+"&page="+page, { headers: header }); 
  }


  getTrack(track: string, page: number, limit?: number){
    const header = new  HttpHeaders({
      'x-rapidapi-key': environment.api_key,
      'x-rapidapi-host': environment.api_host,
      'useQueryString': 'true'
    })
    return this.http.get(this.url+"search/track?q="+track+"&limit="+(limit == null ? 12 : limit)+"&page="+page, {headers: header})
  }

  getArtist(artist: any){
    const header = new  HttpHeaders({
      'x-rapidapi-key': environment.api_key,
      'x-rapidapi-host': environment.api_host,
      'useQueryString': 'true'
    })
    return this.http.get(this.url+"search/artist?q="+artist, {headers: header})
  }

  getArtistTop(id: any){
    const header = new  HttpHeaders({
      'x-rapidapi-key': environment.api_key,
      'x-rapidapi-host': environment.api_host,
      'useQueryString': 'true'
    })
    return this.http.get(this.url+"artist/"+id+"/top", {headers: header})
  }

  getAlbum(album: string, page: number, limit?: number){
    const header = new  HttpHeaders({
      'x-rapidapi-key': environment.api_key,
      'x-rapidapi-host': environment.api_host,
      'useQueryString': 'true'
    })
    return this.http.get(this.url+"search/album?q="+album+"&limit="+(limit == null ? 12 : limit)+"&page="+page, {headers: header})
  }

  getPlaylist(playlist: string, page: number, limit?: number){
    const header = new  HttpHeaders({
      'x-rapidapi-key': environment.api_key,
      'x-rapidapi-host': environment.api_host,
      'useQueryString': 'true'
    })
    return this.http.get(this.url+"search/playlist?q="+playlist+"&limit="+(limit == null ? 12 : limit)+"&page="+page, {headers: header})
  }


}
