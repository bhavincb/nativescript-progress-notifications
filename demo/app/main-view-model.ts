import { Observable } from 'tns-core-modules/data/observable';
import { ProgressNotification } from 'nativescript-progress-notification';

export class HelloWorldModel extends Observable {
  public message: string;
  private progressNotification: ProgressNotification;

  constructor() {
    super();

    this.progressNotification = new ProgressNotification();
    this.message = this.progressNotification.message;
  }
}
