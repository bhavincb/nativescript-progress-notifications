import { Observable } from 'tns-core-modules/data/observable';
import * as ProgressNotification from 'nativescript-progress-notifications';

export class HelloWorldModel extends Observable {
  public notifications= [];
  public id=0;

  constructor() {
    super();

  }
  local =function(){
    this.id=this.id+1;
    let notification=ProgressNotification.show({
      id:this.id,
      title:"Notification"+this.id.toString(),
      message:"Working local Notification",
      ongoing:false,
      indeterminate:false,
    });
    this.notifications.push(notification);
  }
  progress =function(){
    this.id=this.id+1;
    let notification=ProgressNotification.show({
      id:this.id,
      title:"Notification"+this.id.toString(),
      message:"Working progress Notification",
      ongoing:true,
      indeterminate:true,
      progressValue:20
    });
    this.notifications.push(notification);
  }
  update=function(){
    this.notifications.forEach(element => {
      ProgressNotification.update(element,{progressValue:50,ongoing:true});
    });
  }
  finish=function(){
    this.notifications.forEach(element => {
      ProgressNotification.update(element,{message:"finished notification",ongoing:false});
    });
  }
  dissmiss=function(){
    this.notifications.forEach(element => {
      ProgressNotification.dismiss(element.id);
    });
  }
}
