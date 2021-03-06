import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { User }           from '../model/user';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserService {

    private userURL = 'http://localhost:4000/users';  // URL to web API
    constructor (private http: Http) {}
    getUsers (): Observable<User[]> {
        return this.http.get(this.userURL)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}