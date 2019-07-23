import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SvgService } from '@demo/core-data';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  title = 'Landing Page';

  constructor(
    private formBuilder: FormBuilder,
    private implementSvgService: SvgService,
    ) {
    this.implementSvgService.social_Icons();
  }

  ngOnInit() {
    this.contactForm();
  }


  submit() {
    console.log(this.form.value);
  }

  private contactForm() {
  this.form = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    messageSubject: ['', Validators.required],
    message: ['', Validators.required],
  });
 }
}
