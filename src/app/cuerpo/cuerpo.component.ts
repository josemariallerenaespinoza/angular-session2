import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  subTitulo = "Hola soy el subtitulo";
  urlImage = "https://4kwallpapers.com/images/walls/thumbs_3t/5947.png";
  dato!:string;
}
