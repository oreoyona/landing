import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-home',
  imports: [UpperCasePipe, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  citation = `Être parlementaire, pour moi, c'est être capable de défendre valablement nos électeurs et d'être présent dans leur cœur à travers des visites régulières sur le terrain.`
  circonscription = `LUBUDI`
  banner = "inamizi.webp";
  ngOnInit(){
    
  }
}
