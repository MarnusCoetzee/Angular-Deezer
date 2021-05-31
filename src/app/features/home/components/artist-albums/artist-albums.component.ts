import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/core/models/models';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss'],
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() albums: Album[];

  constructor() {}

  ngOnInit(): void {}
}
