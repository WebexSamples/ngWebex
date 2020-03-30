import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebexComponent } from './webex.component';

describe('WebexComponent', () => {
  let component: WebexComponent;
  let fixture: ComponentFixture<WebexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
