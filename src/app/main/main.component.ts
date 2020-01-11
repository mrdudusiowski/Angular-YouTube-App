import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';
import {TranslateService} from '@ngx-translate/core';

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

  inserted: boolean;

  constructor(private translate: TranslateService, private _youtube_api:YoutubeApiService) {
    translate.setDefaultLang('pl');
   }

   async saveID(channelID: string){
      this.channelID = channelID;
    try{
      await this._youtube_api.getChannelInfoByID(this.channelID).subscribe((response)=>{ //Przekazanie ChannelID
        if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
        else{ this.channelInfo=response["items"]["0"]; //Pobranie JSON
        
        this.avatar = this.channelInfo["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
        this.name = this.channelInfo["snippet"]["title"];
        console.log(this.channelInfo["statistics"]["subscriberCount"]);
        this.subcount = this.channelInfo["statistics"]["subscriberCount"];
        this.inserted=true;
        localStorage.setItem("youtuberID", JSON.stringify(this.channelID));
      }
      });
    } catch(error){
      this.error="Error, There is no channel, or ID is invalid!";
    }
    
   }
  async ngOnInit() {
     this.value=localStorage.getItem('youtuberID');
     console.log(this.value);
     this.channelID=JSON.parse(this.value);
     console.log(this.channelID);
    /*
      Get your channels info and get JSON from API   
      
    */
    if(this.channelInfo != null || this.channelInfo != ""){
      try{
        await this._youtube_api.getChannelInfoByID(this.channelID).subscribe((response)=>{ //Przekazanie ChannelID
          if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
          else{ this.channelInfo=response["items"]["0"]; //Pobranie JSON
          
          this.avatar = this.channelInfo["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
          this.name = this.channelInfo["snippet"]["title"];
          console.log(this.channelInfo["statistics"]["subscriberCount"]);
          this.subcount = this.channelInfo["statistics"]["subscriberCount"];
          this.inserted=true;
        }
        });
      } catch(error){
        this.error="Error, There is no channel, or ID is invalid!";
      }
    }

   //PewDiePie info from API
    this.getPewDiePie();

    //Kuba Klawier info from API 
    this.getKubaKlawier();

    //TVNTurbo info from API 
    this.getTVNTurbo();
}

//PewDiePie
avatarPewDiePie: any;
descriptionPewDiePie: any;
namePewDiePie: any;
idPewDiePie: any;

async getPewDiePie(){
   //PewDiePie info from API
   this.idPewDiePie = "UC-lHJZR3Gqxm24_Vd_AJ5Yw"
    try{
      await this._youtube_api.getChannelInfoByID(this.idPewDiePie).subscribe((response)=>{ //Przekazanie ChannelID
        if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
        else this.channelInfo=response["items"]["0"]; //Pobranie JSON
        this.avatarPewDiePie = this.channelInfo["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
        this.namePewDiePie = this.channelInfo["snippet"]["title"];
        this.descriptionPewDiePie = this.channelInfo["snippet"]["description"];

      });
    } catch(error){
      this.error="Error, There is no channel, or ID is invalid!";
    }
}

//Kuba Klawier
avatarKuba: any;
descriptionKuba: any;
nameKuba: any;
idKuba: any;

async getKubaKlawier(){
  try{
    this.idKuba="UCLr4hMhk_2KE0GUBSBrspGA";
    await this._youtube_api.getChannelInfoByID(this.idKuba).subscribe((response)=>{ //Przekazanie ChannelID
      if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
      else this.channelInfo=response["items"]["0"]; //Pobranie JSON
      this.avatarKuba = this.channelInfo["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
      this.nameKuba = this.channelInfo["snippet"]["title"];
      this.descriptionKuba = this.channelInfo["snippet"]["description"];

    });
  } catch(error){
    this.error="Error, There is no channel, or ID is invalid!";
  }
}

//TVN Turbo
avatarTVN: any;
descriptionTVN: any;
nameTVN: any;
idTVN: any;

async getTVNTurbo(){
  try{
    this.idTVN="UCfsSoUSQzUimrjKhAKmshDQ";
    await this._youtube_api.getChannelInfoByID(this.idTVN).subscribe((response)=>{ //Przekazanie ChannelID
      if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
      else this.channelInfo=response["items"]["0"]; //Pobranie JSON
      this.avatarTVN = this.channelInfo["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
      this.nameTVN = this.channelInfo["snippet"]["title"];
      this.descriptionTVN = this.channelInfo["snippet"]["description"];

    });
  } catch(error){
    //await this.handleError(error);
    this.error="Error, There is no channel, or ID is invalid!";
  }
}
}
