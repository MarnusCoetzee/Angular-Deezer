import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileCardComponent } from './artist-profile-card.component';

describe('ArtistProfileCardComponent', () => {
  let component: ArtistProfileCardComponent;
  let fixture: ComponentFixture<ArtistProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
