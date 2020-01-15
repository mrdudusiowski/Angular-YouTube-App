import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PewdieChannelComponent } from './pewdie-channel.component';

describe('PewdieChannelComponent', () => {
  let component: PewdieChannelComponent;
  let fixture: ComponentFixture<PewdieChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PewdieChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PewdieChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
