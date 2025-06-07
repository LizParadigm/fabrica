import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionesPageComponent } from './ubicaciones-page.component';

describe('UbicacionesPageComponent', () => {
  let component: UbicacionesPageComponent;
  let fixture: ComponentFixture<UbicacionesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicacionesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
