import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoockComponent } from './boock.component';

describe('BoockComponent', () => {
  let component: BoockComponent;
  let fixture: ComponentFixture<BoockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
