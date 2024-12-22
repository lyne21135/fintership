import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipDashboardComponent } from './intership-dashboard.component';

describe('IntershipDashboardComponent', () => {
  let component: IntershipDashboardComponent;
  let fixture: ComponentFixture<IntershipDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntershipDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntershipDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
