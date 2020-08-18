import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqQrComponent } from './faq-qr.component';

describe('FaqQrComponent', () => {
  let component: FaqQrComponent;
  let fixture: ComponentFixture<FaqQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
