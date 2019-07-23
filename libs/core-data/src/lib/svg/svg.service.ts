import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  social_Icons() {
    this.facebook_Icon();
    this.twitter_Icon();
    this.googlePlus_Icon();
    this.linkedIn_Icon();
    this.github_Icon();
  }


  facebook_Icon() {
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/facebook-brands.svg")
    );
  }

  twitter_Icon() {
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/twitter-brands.svg")
    );
  }

  googlePlus_Icon() {
    this.matIconRegistry.addSvgIcon(
      'googlePlus',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/google-plus-brands.svg")
    );
  }

  linkedIn_Icon() {
    this.matIconRegistry.addSvgIcon(
      'linkedIn',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedin-in-brands.svg")
    );
  }

  github_Icon() {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/github-alt-brands.svg")
    );
  }


}
