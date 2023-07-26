import {Component, HostBinding} from '@angular/core';
import { environment } from '../environments/environment';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AppComponent {
  title = environment.name;
  apiUrl = ''
  googleAnalyticsId = ''
  @HostBinding('@fadeInOut') animate = true;
}
