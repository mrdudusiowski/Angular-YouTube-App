import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'angular-gmap';
    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
    map: google.maps.Map;
    lat = 50.298033;
    lng = 19.024196;

    coordinates = new google.maps.LatLng(this.lat, this.lng);

    mapOptions: google.maps.MapOptions = {
     center: this.coordinates,
     zoom: 18
    };

    marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

    ngAfterViewInit() {
      this.mapInitializer();
    }

    mapInitializer() {
      this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      this.marker.setMap(this.map);
    }

}
