import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgbarComponent } from './progbar.component';

describe('ProgbarComponent', () => {
  let component: ProgbarComponent;
  let fixture: ComponentFixture<ProgbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
