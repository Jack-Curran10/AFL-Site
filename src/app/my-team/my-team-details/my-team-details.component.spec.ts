import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamDetailsComponent } from './my-team-details.component';

describe('MyTeamDetailsComponent', () => {
  let component: MyTeamDetailsComponent;
  let fixture: ComponentFixture<MyTeamDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTeamDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
