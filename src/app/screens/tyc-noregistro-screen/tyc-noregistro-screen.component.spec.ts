import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TycNoregistroScreenComponent } from './tyc-noregistro-screen.component';

describe('TycNoregistroScreenComponent', () => {
  let component: TycNoregistroScreenComponent;
  let fixture: ComponentFixture<TycNoregistroScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TycNoregistroScreenComponent]
    });
    fixture = TestBed.createComponent(TycNoregistroScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
