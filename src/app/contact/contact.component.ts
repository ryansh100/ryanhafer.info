import { Component, OnInit, ViewChild } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailSvc: EmailService) { }

  model = new Email('', '', '');
  @ViewChild('contact') form: any;

  successMessage = '';

  loading = false;

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;

    this.emailSvc.sendEmail(this.model)
      .subscribe(() => {
          this.form.reset();
          this.loading = false;
          this.successMessage = 'Your contact has been sent!';
      });
  }
}
