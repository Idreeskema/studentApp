import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataService:DataService, private route:Router){}
  canActivate()
    {
   if(this.dataService.isLoggedin()){
    
          return true;
   }else{
     this.route.navigate(["login"])
     
     return false
   }
  
  }
}
