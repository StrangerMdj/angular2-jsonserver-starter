// Imports
import {Injectable, Component, OnInit, Input, Output, Pipe} from '@angular/core';
import {User} from './model/user';
import {UserService} from './services/user.service';
import './rxjs/rxjs';

@Component({
    selector: 'my-app',
    template: `<li *ngFor="let item of users">{{item.name}}</li>`,
    providers: [UserService]
})

export class AppComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    users: User[];
    selectedUser: User;

    constructor(private userService: UserService) {
    }


    getUsers() {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error => this.errorMessage = <any>error);
    }

    ngOnInit() {

        this.getUsers();
    }



}
