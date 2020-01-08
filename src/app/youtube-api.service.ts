import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  channelInfo = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";
  channelId;
  API_KEY = "AIzaSyD69125P66Ki46g0fLue8b3YQrBvur_wAI";

  constructor(private http:HttpClient) { }

  // YoutubeApiService(channelId){
  //   this.channelId=channelId;
  // }

  getChannelInfo(channelId){
    return this.http.get(this.channelInfo+channelId+"&key="+this.API_KEY);
  }

}
