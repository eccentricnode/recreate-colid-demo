import { Component } from '@angular/core';
import { SvgService } from '@demo/core-data';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing-page';

  constructor(private implementSvgService: SvgService) {
    this.implementSvgService.all_Icons();
  }
}
