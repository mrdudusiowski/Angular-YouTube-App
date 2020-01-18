import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../../youtube-api.service';

@Component({
  selector: 'app-pewdie-channel',
  templateUrl: './pewdie-channel.component.html',
  styleUrls: ['../main-cards.component.scss']
})
export class PewdieChannelComponent implements OnInit {
  avatar;
  description;
  name;

  error;
  


  constructor(private _youtube_api:YoutubeApiService) { }

  ngOnInit() {

    let id = "UC-lHJZR3Gqxm24_Vd_AJ5Yw"
    try{
      this._youtube_api.getChannelInfoByID(id).subscribe((response)=>{ //Przekazanie ChannelID
        if(response==null) this.error="Error, There is no channel, or ID is invalid!";  //Error
        else{ //Pobranie JSON
        this.avatar = response["items"]["0"]["snippet"]["thumbnails"]["high"]["url"]; //Pobranie avatara JSON
        this.name = response["items"]["0"]["snippet"]["title"];
        this.description = response["items"]["0"]["snippet"]["description"];
        }
      });
    } catch(error){
      this.error="Error, There is no channel, or ID is invalid!";
    }

  }

}
