import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  chats: any []=[];
  messages: any[] = [];

  constructor(private navCtl: NavController, private api: ApiService) { }

  ngOnInit() {
    this.getAllChats()
  }
  selectChat(c){
    let navigationExtra: NavigationExtras ={
      state:{
        chat: c
      }
    }
  
    this.navCtl.navigateForward('messages', navigationExtra)
  }

  getAllChats(){
    this.api.getChats()
    .subscribe(resp=> {
      this.chats = resp})

  }
  getLastMessage(index){

    this.messages = this.chats[index].messages;
    if(this.messages.length == 0) return ''
     return this.messages[this.messages.length-1].message 
   

  }

}
