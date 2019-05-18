import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaListComponent } from './atleta-list.component';

describe('AtletaListComponent', () => {
  let component: AtletaListComponent;
  let fixture: ComponentFixture<AtletaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtletaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtletaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
