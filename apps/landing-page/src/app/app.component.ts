import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { SvgService } from '@demo/core-data';
import { take } from 'rxjs/operators';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  title = 'Landing Page';

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  constructor(
    private formBuilder: FormBuilder,
    private implementSvgService: SvgService,
    private _ngZone: NgZone,
    ) {
    this.implementSvgService.all_Icons();
  }

  ngOnInit() {
    this.contactForm();
  }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
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
