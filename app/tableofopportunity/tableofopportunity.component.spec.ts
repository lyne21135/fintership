import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableofopportunityComponent } from './tableofopportunity.component';

describe('TableofopportunityComponent', () => {
  let component: TableofopportunityComponent;
  let fixture: ComponentFixture<TableofopportunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableofopportunityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableofopportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
