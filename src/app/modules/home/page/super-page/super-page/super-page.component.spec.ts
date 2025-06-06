import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPageComponent } from './super-page.component';

describe('SuperPageComponent', () => {
  let component: SuperPageComponent;
  let fixture: ComponentFixture<SuperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
