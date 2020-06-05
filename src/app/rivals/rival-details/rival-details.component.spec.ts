import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RivalDetailsComponent } from './rival-details.component';

describe('RivalDetailsComponent', () => {
  let component: RivalDetailsComponent;
  let fixture: ComponentFixture<RivalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RivalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RivalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
