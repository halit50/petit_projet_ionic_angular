import { Recettes } from './recettes.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

private recettes: Recettes[] = [
  {
    id:'recette_1',
    title: 'Pancakes',
    imageUrl: 'assets/icon/img1.jpeg',
    ingredients: ['2 oeufs', 'Lait','Farine']
  },
  {
    id:'recette_2',
    title: 'Pâtes aux crevettes',
    imageUrl: 'assets/icon/img2.jpeg',
    ingredients: ['Crevettes', 'champignons','Pâtes']
  },
  {
    id:'recette_3',
    title: 'Tiep Bou Dieun',
    imageUrl: 'assets/icon/img3.jpeg',
    ingredients: ['Riz', 'Carotte','Poisson','Choux','Huile','Persil']
  }];

getAllRecettes() {
  return [...this.recettes];
}

getRecette(recetteId: string) {
  return {
    ...this.recettes.find(recette => {
      return recette.id === recetteId;
    })
  };
}

supprimerRecette(recetteId: string) {
  this.recettes = this.recettes.filter(recette => {
    return recette.id !== recetteId;
  });
}

}
