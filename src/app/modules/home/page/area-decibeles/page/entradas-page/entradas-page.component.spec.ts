import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasPageComponent } from './entradas-page.component';

describe('EntradasPageComponent', () => {
  let component: EntradasPageComponent;
  let fixture: ComponentFixture<EntradasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
