import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashTextComponent } from './flash-text.component';

describe('FlashTextComponent', () => {
  let component: FlashTextComponent;
  let fixture: ComponentFixture<FlashTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
