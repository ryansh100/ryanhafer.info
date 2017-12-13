import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Email } from './email';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail (email: Email): Observable<object> {
    const body = {
      from: email.from,
      subject: email.subject,
      message: email.body
    };

    return this.http.post<object>(
      'https://tfro2lgw2m.execute-api.us-west-2.amazonaws.com/production/send-email',
      JSON.stringify(body)
    );
  }
}
