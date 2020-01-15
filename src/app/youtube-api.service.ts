import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class YoutubeApiService {
  channelInfoByID = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=";
  channelChannelIDInfo = "https://www.googleapis.com/youtube/v3/channels?part=id&forUsername="
  API_KEY = "AIzaSyD69125P66Ki46g0fLue8b3YQrBvur_wAI";

  constructor(private http:HttpClient) { }


  getChannelInfoByID(channelId){
    return this.http.get(this.channelInfoByID+channelId+"&key="+this.API_KEY);
  }

  getChannelID(channelName){
    return this.http.get(this.channelChannelIDInfo+channelName+"&key="+this.API_KEY);
  }
} 
