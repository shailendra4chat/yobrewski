// Imports
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BeersService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private gitUsersUrl = 'https://api.punkapi.com/v2/'; 

     // Fetch all existing comments
     getBeers() : Observable<Comment[]> {

         // ...using get request
         return this.http.get(this.gitUsersUrl + "/beers")
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     getBeer(beerId) : Observable<Comment[]> {

         // ...using get request
         return this.http.get(this.gitUsersUrl + "/beers/"+beerId)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}

