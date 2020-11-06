import { Injectable } from '@angular/core';
import Pusher from 'pusher-js'

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher: any;

  constructor() {
    this.pusher = new Pusher('edba0a25346cefb9d16c',{
      cluster: 'ap2',
      forceTLS: true
    })
   }
   subscribeToChannel(channelName: String, events: String[], cb: Function) {
     console.log('pusher service')
    var channel = this.pusher.subscribe(channelName);

    events.forEach( event => {
      console.log("whats the event ", event)
      channel.bind(event, function(data) {
        cb(data)
      });
    })
  }

  unsubscribe(channelName){
    this.pusher.unsubscribe(channelName)
  }



}
