import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomutGetirComponent } from './komut-getir.component';

describe('KomutGetirComponent', () => {
  let component: KomutGetirComponent;
  let fixture: ComponentFixture<KomutGetirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomutGetirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomutGetirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
