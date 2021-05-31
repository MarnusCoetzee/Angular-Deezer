import { Track } from './../../../../core/models/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-tracks',
  templateUrl: './artist-tracks.component.html',
  styleUrls: ['./artist-tracks.component.scss'],
})
export class ArtistTracksComponent implements OnInit {
  @Input() tracks: Track[];

  constructor() {}

  ngOnInit(): void {}

  handleOpenTrack(url: string) {
    window.open(url);
  }
}
