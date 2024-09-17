import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor( private http: HttpClient) { }

  loadAllUsuarios(){

    const endpoint = `${base_url}/usuarios`;
    return this.http.get(endpoint);
  }

  saveUsuarios(body: any){

    const endpoint = `${base_url}/usuarios`;
    return this.http.post(endpoint, body);
  }


  updateUsuarios(body: any, id: any){

    const endpoint = `${base_url}/usuarios/${id}`;
    return this.http.put(endpoint, body);
  }

  loadIdUsuarios(id: any){

    const endpoint = `${base_url}/usuarios/${id}`;
    return this.http.get(endpoint);
  }

  deleteIdUsuarios(id: any){

    const endpoint = `${base_url}/usuarios/${id}`;
    return this.http.delete(endpoint);
  }
  
}
