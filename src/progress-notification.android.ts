import { ProgressOptions, CommonNotification, UpdateOptions } from './interfaces';
import * as app from "tns-core-modules/application";
import * as utils from 'tns-core-modules/utils/utils';
// export class ProgressNotification {
    export function show(_options:ProgressOptions):CommonNotification{
        let options:ProgressOptions ={
            id:_options.id,
            title:_options.title?_options.title:" ",
            message:_options.message?_options.message:" ",
            indeterminate:_options.indeterminate!=undefined&&_options.indeterminate!=null?_options.indeterminate:false,
            progressValue:_options.progressValue!=undefined&&_options.progressValue!=null?_options.progressValue:0,
            ongoing:_options.ongoing!=undefined&&_options.ongoing!=null?_options.ongoing:true
        }
        let builder=this.getBuilder();
        let context = utils.ad.getApplicationContext();
        builder.setContentTitle(options.title)
            .setContentText(options.message)
            .setSmallIcon(context.getApplicationInfo().icon);
        if(options.ongoing){
            if(options.progressValue>=100){
                options.progressValue=100;
            }
            builder.setOngoing(options.ongoing)
                .setProgress(100,options.progressValue,options.indeterminate);
        }
        this.showNotification(options.id,builder);
        let notification:CommonNotification= {
            id:options.id,
            builder:builder
        }
        return notification;
    }
    export function  update(notification:CommonNotification,options:UpdateOptions):CommonNotification{
        let builder=notification.builder;
        if(options.title!=null&&options.title!=undefined){
            builder.setContentTitle(options.title);
        }
        if(options.message!=null&&options.message!=undefined){
            builder.setContentText(options.message);
        }
        if(options.progressValue!=null&&options.progressValue!=undefined){
            if(options.progressValue>=100){
                options.progressValue=100;
            }
            if(options.indeterminate!=null&&options.indeterminate!=undefined){
                builder.setProgress(100,options.progressValue,options.indeterminate);
            }else{
                builder.setProgress(100,options.progressValue,false);
            }
        }
        if(options.ongoing!=null&&options.ongoing!=undefined){
            builder.setOngoing(options.ongoing);
        }
        if(options.hideProgressBar){
            builder.setProgress(0,0,false);
        }
        this.showNotification(notification.id,builder);
        notification.builder=builder;
        return notification;
    }
    export function dismiss(id:number){
        this.getNotificationManager().cancel(id);
    }
    export function showNotification(id:number,builder:android.support.v4.app.NotificationCompat.Builder){
        this.getNotificationManager().notify(id,builder.build());
    }
    export function getBuilder():android.support.v4.app.NotificationCompat.Builder{
        return new android.support.v4.app.NotificationCompat.Builder(this.getActivity());
    }
    export function getActivity(){
        return app.android.startActivity || app.android.foregroundActivity;
    }
    export function getNotificationManager():android.app.NotificationManager {
        let context = utils.ad.getApplicationContext();
        return context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
    }
// }
