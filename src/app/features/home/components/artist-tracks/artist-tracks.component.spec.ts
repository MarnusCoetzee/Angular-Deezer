import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTracksComponent } from './artist-tracks.component';

describe('ArtistTracksComponent', () => {
  let component: ArtistTracksComponent;
  let fixture: ComponentFixture<ArtistTracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistTracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
