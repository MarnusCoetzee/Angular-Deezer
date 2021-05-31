import { NumberFormatPipe } from './../../core/pipes/number-format.pipe';
import { MinuteSecondsPipe } from './../../core/pipes/minute-seconds.pipe';
import { MaterialModule } from './../../core/modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArtistViewComponent } from './pages/artist-view/artist-view.component';
import { ArtistListComponent } from './pages/artist-list/artist-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtistProfileCardComponent } from './components/artist-profile-card/artist-profile-card.component';
import { ArtistTracksComponent } from './components/artist-tracks/artist-tracks.component';
import { ArtistAlbumsComponent } from './components/artist-albums/artist-albums.component';
import { AlbumComponent } from './components/album/album.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArtistListComponent,
    ArtistViewComponent,
    ArtistProfileCardComponent,
    ArtistTracksComponent,
    ArtistAlbumsComponent,
    MinuteSecondsPipe,
    NumberFormatPipe,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
