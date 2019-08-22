import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google: any;
@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {

  logs: string[] = [];
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder) {

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
      console.log(data);
      this.loadMap(data.coords.latitude, data.coords.longitude);
    });

  }
  loadMap(lat, lng){

    let latLng = new google.maps.LatLng(lat, lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    
  }

  ngOnInit() {
  }

  ionViewDidLoad(){
    let escuchador = this.geolocation.watchPosition();
    escuchador.subscribe(resultado => {
      this.logs.push(" latitud :" + resultado.coords.latitude + " longitud :" + resultado.coords.longitude)
      console.log(this.logs);
    });
  }

}
