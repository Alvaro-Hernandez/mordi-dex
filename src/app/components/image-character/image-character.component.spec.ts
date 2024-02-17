import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCharacterComponent } from './image-character.component';

describe('ImageCharacterComponent', () => {
  let component: ImageCharacterComponent;
  let fixture: ComponentFixture<ImageCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCharacterComponent]
    });
    fixture = TestBed.createComponent(ImageCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
