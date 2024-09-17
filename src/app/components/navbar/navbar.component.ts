import { Component, OnInit, inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { UtilService } from 'src/app/modules/shared/services/util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

 /* private KeycloakService = inject(KeycloakService);
  username:any;
  isAdmin:any;*/

  constructor(/*private util:UtilService*/){}

 /* cerrarSesion(){
    this.KeycloakService.logout();
  }*/
  ngOnInit(): void {

    /*this.username = this.KeycloakService.getUsername();
    console.log(this.util.getRoles());
    this.isAdmin = this.util.isAdmin();*/    
  }

}
