import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosPageComponent } from './dispositivos-page.component';

describe('DispositivosPageComponent', () => {
  let component: DispositivosPageComponent;
  let fixture: ComponentFixture<DispositivosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispositivosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
