import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuostionnaireComponent } from './quostionnaire.component';

describe('QuostionnaireComponent', () => {
  let component: QuostionnaireComponent;
  let fixture: ComponentFixture<QuostionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuostionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuostionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
