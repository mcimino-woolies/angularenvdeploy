import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [MatToolbarModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
