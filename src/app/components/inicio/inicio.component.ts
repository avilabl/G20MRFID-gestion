import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { dieta,dia,caravana } from 'src/app/models';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

   
  caravanass:caravana[]=[{animales:1,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:1,checked: false},
  {animales:2,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:2,checked: false},
  {animales:3,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:3,checked: false},
  {animales:4,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:3,checked: false},
  {animales:5,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:2,checked: false},
  {animales:6,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:1,checked: false},
  {animales:7,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:1,checked: false},
  {animales:8,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:2,checked: false},
  {animales:9,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:3,checked: false},
  {animales:10,dias:[{dietaDiaria:[{peso:2,horario:8}],inicioDia:1}],estacion:2,checked: false},]

  constructor(){

    localStorage.setItem('caravana', JSON.stringify(this.caravanass));
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


        




  

 


}


/*///////////////////////ir a buscar datos a la base y dejarlos en el local storage*/