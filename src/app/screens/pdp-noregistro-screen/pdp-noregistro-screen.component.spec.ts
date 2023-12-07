import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpNoregistroScreenComponent } from './pdp-noregistro-screen.component';

describe('PdpNoregistroScreenComponent', () => {
  let component: PdpNoregistroScreenComponent;
  let fixture: ComponentFixture<PdpNoregistroScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdpNoregistroScreenComponent]
    });
    fixture = TestBed.createComponent(PdpNoregistroScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
