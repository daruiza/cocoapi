import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  // Control ante un mensaje
  messageControl: Message;
  observableMessage: BehaviorSubject<Message>;

  constructor() {
    this.observableMessage = new BehaviorSubject(this.messageControl);
  }

  // Observers
  messagePush() {
    this.observableMessage.next(this.messageControl);
  }

  changeMessageControl(evt: any, message: Message) {
    this.messageControl = message;
    this.messagePush();
  }

}
