import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationalPanel } from './conversational-panel';

describe('ConversationalPanel', () => {
  let component: ConversationalPanel;
  let fixture: ComponentFixture<ConversationalPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationalPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationalPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
