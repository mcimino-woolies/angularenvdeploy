// app.component.ts
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `Welcome to the ${environment.title} bucket`;
  iframeUrl: SafeResourceUrl;
  isUrlProvided: boolean;

  constructor(private sanitizer: DomSanitizer) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.iframeUrl);
    this.isUrlProvided = environment.iframeUrl.trim() !== '';
  }
}
