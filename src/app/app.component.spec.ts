import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {environment} from "../environments/environment";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [MatToolbarModule, MatCardModule]
  }));

  for (let i = 1; i <= 200; i++) {
    it(`should create the app ${i}`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });
  }

  it(`should have as title'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual(`Welcome to the ${environment.title} bucket`);
  });
});
