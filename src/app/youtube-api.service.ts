import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  channelInfoByID = "https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=";
  channelChannelIDInfo = "https://www.googleapis.com/youtube/v3/channels?part=id&forUsername="
  channelId;
  channelName;
  API_KEY = "AIzaSyD69125P66Ki46g0fLue8b3YQrBvur_wAI";
  error:any; 

  constructor(private http:HttpClient) { }

  // YoutubeApiService(channelId){
  //   this.channelId=channelId;
  // }

  getChannelInfoByID(channelId){
    this.channelId = channelId;
    return this.http.get(this.channelInfoByID+this.channelId+"&key="+this.API_KEY);
  }

  async getChannelID(channelName){
      try{
          await this.http.get(this.channelChannelIDInfo+channelName+"&key="+this.API_KEY).subscribe((response)=>{ //Przekazanie ChannelID
          if(response==null) this.error="Error, no informations!";  //Error
          else this.channelId=response["items"]["0"]["id"]; //Pobranie JSON
          console.log(this.channelId); //Wyświetlenie JSON
          return  this.http.get(this.channelInfoByID+this.channelId+"&key="+this.API_KEY);
      });
    } catch(error){
          //await this.handleError(error);
          this.error="Error, There is no channel on this username";
          console.log(this.error);
    }
  }

  

}
