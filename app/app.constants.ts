/**
 * Created by front on 08/12/16.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:4000/";
    public ServerWithApiUrl = this.Server;
}