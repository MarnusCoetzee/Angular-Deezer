import { ArtistViewComponent } from './pages/artist-view/artist-view.component';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'artists',
        pathMatch: 'full',
      },
      {
        path: 'artists',
        component: ArtistListComponent,
      },
      {
        path: 'artist/:id',
        component: ArtistViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
