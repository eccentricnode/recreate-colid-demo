import { Component, OnInit } from '@angular/core';
import { SvgService } from '@demo/core-data';

@Component({
  selector: 'demo-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private implementSvgService: SvgService,
  ) { 
    this.implementSvgService.social_Icons();
  }

  ngOnInit() {
  }

}
