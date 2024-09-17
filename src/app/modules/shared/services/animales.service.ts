import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})

export class AnimalesService {

  constructor(private http: HttpClient) { }

  loadAllAnimales(){

    const endpoint = `${base_url}/animales`;
    return this.http.get(endpoint);
  }

  saveAnimales(body: any){

    const endpoint = `${base_url}/animales`;
    return this.http.post(endpoint, body);
  }

  updateAnimales(body: any, id: any){

    const endpoint = `${base_url}/animales/${id}`;
    return this.http.put(endpoint, body);
  }

  loadIdAnimales(id: any){

    const endpoint = `${base_url}/animales/${id}`;
    return this.http.get(endpoint);
  }

  deleteIdAnimales(id: any){

    const endpoint = `${base_url}/animales/${id}`;
    return this.http.delete(endpoint);
  }

  loadAnimalAnimales(animal: any){

    const endpoint = `${base_url}/animales/${animal}`;
    return this.http.get(endpoint);
  }

  loadCicloAnimales(inicio_ciclo: any){

    const endpoint = `${base_url}/animales/ciclo/${inicio_ciclo}`;
    return this.http.get(endpoint);
  }

  saveUsuarioIDAnimales(body: any, usuarioID: any){

    const endpoint = `${base_url}/animales/${usuarioID}`;
    return this.http.post(endpoint, body);
  }

}
