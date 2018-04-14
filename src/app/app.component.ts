import { Component, OnInit} from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

import 'style-loader!leaflet/dist/leaflet.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{

  public greenIcon;

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 5,
    center: L.latLng({ lat: 14.991709, lng: 120.886109 }),
  };
  ngOnInit(){


      
  
  }
  
  public initialize(){

        //initialize icons retrieve from DB
        this.greenIcon = L.icon({
          iconUrl: '../assets/landslide.png',
      
          iconSize:     [50, 50], // size of the icon
          popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
    

  }
  onMapReady(map) {

    this.initialize();
  
    var circle = L.circle([14.508, 120.11], {
    color: 'green',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50000
    }).addTo(map);
    
    L.marker([14.508, 120.11],{icon: this.greenIcon}).addTo(map);
    L.marker([15.508, 120.11],{icon: this.greenIcon}).addTo(map);
    L.marker([13.508, 120.11],{icon: this.greenIcon}).addTo(map);
    L.marker([12.508, 120.11],{icon: this.greenIcon}).addTo(map);
  
  }

  title = 'app';



  


}
