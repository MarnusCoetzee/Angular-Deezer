import { MaterialModule } from './../../core/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArtistViewComponent } from './pages/artist-view/artist-view.component';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistProfileCardComponent } from './components/artist-profile-card/artist-profile-card.component';

@NgModule({
  declarations: [HomeComponent, ArtistListComponent, ArtistViewComponent, ArtistProfileCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
