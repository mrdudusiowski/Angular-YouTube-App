import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvnChannelComponent } from './tvn-channel.component';

describe('TvnChannelComponent', () => {
  let component: TvnChannelComponent;
  let fixture: ComponentFixture<TvnChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvnChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvnChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
