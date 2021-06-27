import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSrcComponent } from './article-src.component';

describe('ArticleSrcComponent', () => {
  let component: ArticleSrcComponent;
  let fixture: ComponentFixture<ArticleSrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
