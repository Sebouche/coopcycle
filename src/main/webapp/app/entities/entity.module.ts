import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'commande',
        loadChildren: () => import('./commande/commande.module').then(m => m.MyblogCommandeModule)
      },
      {
        path: 'cooperative',
        loadChildren: () => import('./cooperative/cooperative.module').then(m => m.MyblogCooperativeModule)
      },
      {
        path: 'panier',
        loadChildren: () => import('./panier/panier.module').then(m => m.MyblogPanierModule)
      },
      {
        path: 'paiement',
        loadChildren: () => import('./paiement/paiement.module').then(m => m.MyblogPaiementModule)
      },
      {
        path: 'produit',
        loadChildren: () => import('./produit/produit.module').then(m => m.MyblogProduitModule)
      },
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant/restaurant.module').then(m => m.MyblogRestaurantModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./role/role.module').then(m => m.MyblogRoleModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MyblogEntityModule {}
