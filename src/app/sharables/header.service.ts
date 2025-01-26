import { Injectable } from '@angular/core';



export const bPoint760px = "(max-width: 760px)";
@Injectable({
   providedIn: 'root'
})
export class HeaderService {

   navigation = [
      {
         titre: 'Acceuil',
         link: "home"
      },

      {
         titre: 'A Propos',
         link: 'about'
      },

      {
         titre: 'Contact',
         link: 'contact'
      }
   ]


   constructor() { }
}
