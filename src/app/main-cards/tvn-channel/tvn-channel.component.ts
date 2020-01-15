import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../../youtube-api.service';

@Component({
  selector: 'app-tvn-channel',
  templateUrl: './tvn-channel.component.html',
  styleUrls: ['../main-cards.component.scss']
})
export class TvnChannelComponent implements OnInit {
  avatar;
  description;
  name;

  error;
  


  constructor(private _youtube_api:YoutubeApiService) { }

  ngOnInit() {

    let id = "UCfsSoUSQzUimrjKhAKmshDQ"
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
