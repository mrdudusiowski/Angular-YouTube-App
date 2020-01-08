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
  avatar: any;

  constructor(private translate: TranslateService, private _youtube_api:YoutubeApiService) {
    translate.setDefaultLang('pl');
   }


  async ngOnInit() {
    // this.value=localStorage.getItem('location');
    // console.log(this.value);
    // this.location=JSON.parse(this.value);

    /*
      Get your current weather JSON from API from getWeather() function in weather.service.
    */
    try{
      await this._youtube_api.getChannelInfo("UCZ1MLwA-6jk9zQtBXT5N1Lw").subscribe((response)=>{ //Przekazanie ChannelID
        if(response==null) this.error="Error, There is no such city or country. Go to settings!";  //Error
        else this.channelInfo=response["items"]["0"]; //Pobranie JSON
        console.log(this.channelInfo); //Wyświetlenie JSON
        this.avatar = this.channelInfo["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
      });
    } catch(error){
      //await this.handleError(error);
      this.error="Error, There is no such city or country";
    }
}
}
