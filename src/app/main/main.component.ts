import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import {TranslateService} from '@ngx-translate/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  error:any; 
  channelInfo: any;
  value: any;

  avatar: any;
  name: any;
  subcount: any;
  channelID: any;
  channelName: any;
  date: Date;
  countryCode: any;

  inserted: boolean;

  constructor(private translate: TranslateService, private _youtube_api:YoutubeApiService) {
    translate.setDefaultLang('pl');
   }

  saveID(channelID: string){
    try{
      this._youtube_api.getChannelInfoByID(channelID).subscribe((response)=>{ //Przekazanie ChannelID
        if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
        else{ let snippet = response["items"]["0"]["snippet"]; //Pobranie JSON
              let statistics = response["items"]["0"]["statistics"]
              console.log(response);
        this.avatar = snippet["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
        this.name = snippet["title"];
        this.subcount = statistics["subscriberCount"];
        this.inserted=true;
        let date= snippet["publishedAt"];
        this.date = new Date(date);
        this.countryCode = snippet["country"];
        localStorage.setItem("youtuberID", JSON.stringify(channelID));
      }
      });
    } catch(error){
      this.error="Error, There is no channel, or ID is invalid!";
    }
   }

saveName(channelName: string){
  this._youtube_api.getChannelID(channelName).subscribe((response: Response)=>{ //Przekazanie ChannelID
    if(response==null) this.error="Error, no informations!";  //Error
    else { 
  
      this.channelID = response["items"]["0"]["id"];
      this.saveID(this.channelID);
    }
});
}

 ngOnInit() {
     let value=localStorage.getItem('youtuberID');
     let channelID=JSON.parse(value);

    if(this.channelInfo != null || this.channelInfo != ""){
      try{
        this._youtube_api.getChannelInfoByID(channelID).subscribe((response)=>{ //Przekazanie ChannelID
          if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
          else{ response=response["items"]["0"]; //Pobranie JSON
          
          this.avatar = response["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
          this.name = response["snippet"]["title"];
          this.subcount = response["statistics"]["subscriberCount"];
          this.inserted=true;
          let date= response["snippet"]["publishedAt"];
          this.date = new Date(date);
          console.log(response["snippet"]["country"]);
          this.countryCode =  response["snippet"]["country"];
        }
        });
      } catch(error){
        this.error="Error, There is no channel, or ID is invalid!";
      }
    }
}

}
