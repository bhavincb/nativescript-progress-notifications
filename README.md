# Nativescript Progress Notifications(Android)

The Progress Notifications plugin allows your app to show normal and progress notifications during Android app execution. For example notification of file downloading or uploading.

## Requirements

working only for android

## Installation

Describe your plugin installation steps. Ideally it would be something like:

```javascript
tns plugin add nativescript-progress-notifications
```

#### TypeScript support
And do yourself a favor by adding TypeScript support to your nativeScript app:

```bash
tns install typescript
```

Now you can import the plugin as an object into your `.ts` file as follows:

```typescript
import * as ProgressNotification from 'nativescript-progress-notification';

// then use it as:
ProgressNotification.dismiss(id);
```

## Usage 

	
	```javascript
        let localNotification=ProgressNotification.show({
            id:5, //required
            title:"Progress Notification",
            message:"Working normal local Notification",
            ongoing:false,
        });

        let progressNotification=ProgressNotification.show({
            id:6, //required
            title:"progress Notification",
            message:"Working Progress Notification",
            ongoing:true,
            indeterminate:false,
            progressValue:20
        });

        let updateProgressNotification=ProgressNotification.update(progressNotification,{
            progressValue:50
        });

        let finishProgressNotification=ProgressNotification.update(progressNotification,{
            progressValue:100,
            message:"Process Completed",
            hideProgressBar:true, //set true to hide progressbar otherwise it will be visible
        });

        //dismiss notification
        ProgressNotification.dismiss(localNotification.id);

    ```

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.
    
| Property | Default | Description |
| --- | --- | --- |
|`id`     |required |A number so you can easily distinguish your notifications. |
|`title` | empty(" ") |The title which is shown in the statusbar.|
|`message`| empty(" ")  |The text below the title. |
|`ongoing`| true  | Set whether this is an `ongoing` notification. Ongoing notifications cannot be dismissed by the user, so your application must take care of canceling them. |
|`indeterminate`| false  | ongoing notification type `indeterminate` or not. setting `true` will show continous running progressbar irrelative to Proress value.  |
|`progressValue`| 0 | set the notification progress when `ongoing` is true and `indeterminate` is false. |


## License

Apache License Version 2.0, January 2004
