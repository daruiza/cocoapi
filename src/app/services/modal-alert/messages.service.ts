import { Injectable } from '@angular/core';
import { Message } from '../../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private message: Message;
  constructor() { }

  setMessage(message: Message = null): void {
    this.message = message ? message : null;
  }

  getMessage(): Message {
    return this.message;
  }
}
