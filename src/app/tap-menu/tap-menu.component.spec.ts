import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapMenuComponent } from './tap-menu.component';

describe('TapMenuComponent', () => {
  let component: TapMenuComponent;
  let fixture: ComponentFixture<TapMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
