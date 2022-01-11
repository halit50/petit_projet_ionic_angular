import { Recettes } from './recettes.model';
import { Component, OnInit } from '@angular/core';
import { RecettesService } from './recettes.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

constructor(private recetteService:  RecettesService) {};

recettes: Recettes[];

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log('ngOnInit');
}

ionViewWillEnter() {
  this.recettes = this.recetteService.getAllRecettes();
  console.log('ionViewWillEnter');
}

ionViewDidEnter() {
  console.log('ionViewDidEnter');
}

ionViewWillLeave() {
  console.log('ionViewWillLeave');
}

ionViewDidLeave() {
  console.log('ionViewDidLeave');
}

ngOnDestroy() {
  console.log('ngOnDestroy');
}
}
