import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KubaChannelComponent } from './kuba-channel.component';

describe('KubaChannelComponent', () => {
  let component: KubaChannelComponent;
  let fixture: ComponentFixture<KubaChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KubaChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KubaChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
