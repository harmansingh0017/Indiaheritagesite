import{Injectable} from '@angular/core';
import{CanActivate , Router} from '@angular/router';
 

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private _router: Router){

        }
    canActivate(){
      
        this._router.navigate(['home'])

        return false;
    }
}