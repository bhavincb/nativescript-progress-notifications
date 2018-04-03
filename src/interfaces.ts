export interface ProgressOptions{
  id: number,
  title?: string,
  message?: string,
  indeterminate?:boolean,
  progressValue?: number,
  ongoing?:boolean,
}
export interface CommonNotification{
  id: number,
  builder: android.support.v4.app.NotificationCompat.Builder
}
export interface UpdateOptions{
  title?: string,
  message?: string,
  indeterminate?:boolean,
  progressValue?: number,
  ongoing?:boolean,
  hideProgressBar?:boolean,
}