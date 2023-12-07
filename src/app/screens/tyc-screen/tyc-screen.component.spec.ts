import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TycScreenComponent } from './tyc-screen.component';

describe('TycScreenComponent', () => {
  let component: TycScreenComponent;
  let fixture: ComponentFixture<TycScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TycScreenComponent]
    });
    fixture = TestBed.createComponent(TycScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
