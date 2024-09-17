import { Component, OnInit } from '@angular/core';
import { dieta,dia,caravana } from 'src/app/models';

@Component({
  selector: 'app-nuevo-animal',
  templateUrl: './nuevo-animal.component.html',
  styleUrls: ['./nuevo-animal.component.css']
})
export class NuevoAnimalComponent implements OnInit {

  caravanas: caravana[] = [];
  mostrarCaravana:caravana[]=[{animales:0,dias:[{dietaDiaria:[{peso:0,horario:0}],inicioDia:1}],estacion:5,checked:false}]
  caravana=0
  validarNewCaravana=false;
  nAnimal=0;
  estAnimal=0;
  checkAnimal=false
  animalEliminar=0
  valEstacion=false
  valCaravana=false
  valCaravanaNRO=0
  valCaravana0=false


  constructor(){
    this.caravanas = JSON.parse(localStorage.getItem("caravana")!);
    this.mostrarCaravana.splice(0,1);      
  }

  ngOnInit(): void {
    
  }
  
  agregarAnimal(){
    this.validarNewCaravana=false
    if(this.nAnimal!=0){
      this.valCaravana0=false
      if(this.caravanas.length<60){
        for(let i=0;i<this.caravanas.length;i++){
          if((this.caravanas[i].animales==this.nAnimal) && ((this.estAnimal>0)&&(this.estAnimal<4))){
            this.validarNewCaravana=true;
            this.valCaravana=true;
            this.valCaravanaNRO=this.caravanas[i].estacion
          }
        }
      }
      if(!this.validarNewCaravana && ((this.estAnimal>0)&&(this.estAnimal<4))){
        this.caravanas.push({animales:this.nAnimal,dias:[{dietaDiaria:[{peso:0,horario:0}],inicioDia:1}],estacion:this.estAnimal,checked:false});
        localStorage.removeItem('caravana');
        localStorage.setItem('caravana', JSON.stringify(this.caravanas));
        this.valCaravana=false
      }
      this.arrayMostrarCaravana();
  
      if(this.estAnimal<1 || this.estAnimal>3){
        this.valEstacion = true
      }
    }else{
      this.valCaravana0=true
    }
  }

  arrayMostrarCaravana(){
    this.valEstacion = false
    this.mostrarCaravana.splice(0,this.mostrarCaravana.length);
    if(this.estAnimal>0 && this.estAnimal<4){  
      for(let j=0;j<this.caravanas.length;j++){
        if(this.caravanas[j].estacion==this.estAnimal){ 
          this.mostrarCaravana.push(this.caravanas[j]);
        }
      }
    }
    if(this.estAnimal==4){
      for(let j=0;j<this.caravanas.length;j++){ 
        this.mostrarCaravana.push(this.caravanas[j]);  
      }
    }
  }

  eliminarAnimales(){
    for(let x=0;x<this.mostrarCaravana.length;x++){
      if(this.mostrarCaravana[x].checked){
        for(let ii=0;ii<this.caravanas.length;ii++){
          if(this.mostrarCaravana[x].animales==this.caravanas[ii].animales){
            this.caravanas.splice(ii,1);
            this.mostrarCaravana.splice(x,1);
            if(this.mostrarCaravana[x].checked){
              x=x-1
            }            
            break;
          }
        }
      }
    }
    this.arrayMostrarCaravana();

    localStorage.removeItem('caravana');
    localStorage.setItem('caravana', JSON.stringify(this.caravanas));
  }

  reinicioValidacion(){
    this.valCaravana=false;
  }

}
