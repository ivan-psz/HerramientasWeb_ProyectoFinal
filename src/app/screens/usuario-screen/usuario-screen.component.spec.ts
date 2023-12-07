import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioScreenComponent } from './usuario-screen.component';

describe('UsuarioScreenComponent', () => {
  let component: UsuarioScreenComponent;
  let fixture: ComponentFixture<UsuarioScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioScreenComponent]
    });
    fixture = TestBed.createComponent(UsuarioScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
