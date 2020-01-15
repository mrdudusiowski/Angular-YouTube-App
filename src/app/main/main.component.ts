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
  x;


  avatar: any;
  name: any;
  subcount: any;
  channelID: any;
  channelName: any;

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

        this.avatar = snippet["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
        this.name = snippet["title"];
        this.subcount = statistics["subscriberCount"];
        this.inserted=true;
        
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
      console.log(response["items"]["0"]["id"]);
      this.channelID = response["items"]["0"]["id"];
      this.saveID(this.channelID);
    }
});
}

 ngOnInit() {
     let value=localStorage.getItem('youtuberID');
     let channelID=JSON.parse(value);
    /*
      Get your channels info and get JSON from API   
      
    */

    
   //PewDiePie info from API
   this.getPewDiePie();

   //Kuba Klawier info from API 
   this.getKubaKlawier();

   //TVNTurbo info from API 
   this.getTVNTurbo();



    if(this.channelInfo != null || this.channelInfo != ""){
      try{
        this._youtube_api.getChannelInfoByID(channelID).subscribe((response)=>{ //Przekazanie ChannelID
          if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
          else{ response=response["items"]["0"]; //Pobranie JSON
          
          this.avatar = response["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
          this.name = response["snippet"]["title"];
          this.subcount = response["statistics"]["subscriberCount"];
          this.inserted=true;
        }
        });
      } catch(error){
        this.error="Error, There is no channel, or ID is invalid!";
      }
    }
}

//PewDiePie
avatarPewDiePie: any;
descriptionPewDiePie: any;
namePewDiePie: any;
idPewDiePie: any;

getPewDiePie(){
   //PewDiePie info from API
   this.idPewDiePie = "UC-lHJZR3Gqxm24_Vd_AJ5Yw"
    try{
      this._youtube_api.getChannelInfoByID(this.idPewDiePie).subscribe((response)=>{ //Przekazanie ChannelID
        if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
        else{ //Pobranie JSON
        this.avatarPewDiePie = response["items"]["0"]["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
        this.namePewDiePie = response["items"]["0"]["snippet"]["title"];
        this.descriptionPewDiePie = response["items"]["0"]["snippet"]["description"];
        }
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

getKubaKlawier(){
  try{
    this.idKuba="UCLr4hMhk_2KE0GUBSBrspGA";
    this._youtube_api.getChannelInfoByID(this.idKuba).subscribe((response)=>{ //Przekazanie ChannelID
      if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
      else{//Pobranie JSON
      this.avatarKuba = response["items"]["0"]["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
      this.nameKuba = response["items"]["0"]["snippet"]["title"];
      this.descriptionKuba = response["items"]["0"]["snippet"]["description"];
      }
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

getTVNTurbo(){
  try{
    this.idTVN="UCfsSoUSQzUimrjKhAKmshDQ";
    this._youtube_api.getChannelInfoByID(this.idTVN).subscribe((response)=>{ //Przekazanie ChannelID
      if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
      else{ //Pobranie JSON
      this.avatarTVN = response["items"]["0"]["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
      this.nameTVN = response["items"]["0"]["snippet"]["title"];
      this.descriptionTVN = response["items"]["0"]["snippet"]["description"];
    }
    });
  } catch(error){
    //await this.handleError(error);
    this.error="Error, There is no channel, or ID is invalid!";
  }
}
}
