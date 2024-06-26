import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmlistComponent } from './filmlist.component';

describe('FilmlistComponent', () => {
  let component: FilmlistComponent;
  let fixture: ComponentFixture<FilmlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
