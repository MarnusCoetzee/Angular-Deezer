import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/core/models/models';

@Component({
  selector: 'app-artist-profile-card',
  templateUrl: './artist-profile-card.component.html',
  styleUrls: ['./artist-profile-card.component.scss'],
})
export class ArtistProfileCardComponent implements OnInit {
  @Input() artist: Artist;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleRouteToArtistProfile(artistId: number) {
    this.router.navigate(['artist', artistId]);
  }
}
