import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recettes } from '../recettes.model';
import { RecettesService } from '../recettes.service';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {

  chargementRecette: Recettes; // la rectte fourni par le service

  constructor(
    private activatedRoute: ActivatedRoute, // Récupération du chemin actuelle
    private recetteService: RecettesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recetteId')) {// verification si chemin contient un idRecette
        // redirection
        return;
      }

      const recetteId = paramMap.get('recetteId'); //si oui, récupérer l'idRecette
      this.chargementRecette = this.recetteService.getRecette(recetteId); // charger la recette
    });
  }

  suppressionRecette() {
    this.alertCtrl
      .create({
        header: 'Etes-vous sure?',
        message: 'Voulez- vous supprimer cette recette',
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel'
          },
          {
          text: 'Supprimer',
          handler: () => {
            this.recetteService.supprimerRecette(this.chargementRecette.id);
            this.router.navigate(['/recettes']);
          }
        }
        ]
      })
      .then(alertEl => {alertEl.present();
      });
  }

}
