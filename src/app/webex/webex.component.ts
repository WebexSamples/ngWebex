import { Component, OnInit } from '@angular/core';
import Webex from 'webex';

@Component({
  selector: 'app-webex',
  templateUrl: './webex.component.html',
  styleUrls: ['./webex.component.css']
})
export class WebexComponent implements OnInit {
  token: string;
  registered: boolean;
  webex: any;
  syncStatus: string;
  currentMeeting: any;
  destination: string;

  constructor() {
    this.syncStatus = 'NONE';
    this.token = '';
    this.registered = false;
    this.destination = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.webex = Webex.init({
      config: {
        meetings: {
          deviceType: 'WEB'
        }
      },
      credentials: {
        access_token: this.token
      }
    });
  }

  async onGetMe() {
    const response = await this.webex.people.get('me');
    debugger;
  }

  async onRegister() {
    try {
      await this.webex.meetings.register();
      this.registered = true;
    } catch (error) {
      window.alert(error);
    }
  }

  async onUnregister() {
    try {
      await this.webex.meetings.unregister();
      this.registered = false;
    } catch (error) {
      console.error(error);
    }
  }

  async onSyncMeetings() {
    try {
      this.syncStatus = 'SYNCING';
      await this.webex.meetings.syncMeetings();
      this.syncStatus = 'SYNCED';
    } catch (error) {
      this.syncStatus = 'ERROR';
      console.error(error);
    }
  }

  async onCreateMeeting(destination) {
    try {
      this.currentMeeting = await this.webex.meetings.create(destination);
    } catch (error) {
      console.error(error);
    }
  }

  printMeeting() {
    if(this.currentMeeting) {
      return this.currentMeeting.id;
    }
    return 'No Meeting';
  }
}
