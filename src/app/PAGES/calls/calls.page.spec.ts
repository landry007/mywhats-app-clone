import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CALLSPage } from './calls.page';

describe('CALLSPage', () => {
  let component: CALLSPage;
  let fixture: ComponentFixture<CALLSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CALLSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CALLSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
