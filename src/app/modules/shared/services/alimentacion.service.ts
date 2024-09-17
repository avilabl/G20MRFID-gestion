import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})

export class AlimentacionService {

  constructor(private http: HttpClient) { }

  loadAllAlimentacion(){

    const endpoint = `${base_url}/alimentacion`;
    return this.http.get(endpoint);
  }

  loadIdAlimentacion(id: any){

    const endpoint = `${base_url}/alimentacion/${id}`;
    return this.http.get(endpoint);
  }

  deleteIdAlimentacion(id: any){

    const endpoint = `${base_url}/alimentacion/${id}`;
    return this.http.delete(endpoint);
  }

  loadInicioDietaAlimentacion(inicio_dieta: any){

    const endpoint = `${base_url}/alimentacion/iniciodieta/${inicio_dieta}`;
    return this.http.get(endpoint);
  }

  saveAnimalesIDAlimentacion(body: any, animalesID: any){

    const endpoint = `${base_url}/animales/${animalesID}`;
    return this.http.post(endpoint, body);
  }
}
