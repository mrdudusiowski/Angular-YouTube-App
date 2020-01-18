import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private translate: TranslateService, private formBuilder: FormBuilder) { 
    translate.setDefaultLang('pl');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        subject: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      // password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.showModal();
    }

    showModal():void {
      $('#myModal').modal('toggle');
    }

}
