import {UserService} from "../services/user.service";


export class User {
    constructor(public id: string,
                public email: string,
                public name: string,
                public image: string,
                public short_description: string) {
    };

    /* constructor(@Inject(UserService) userService:UserService) {

     userService.getUsers().subscribe(res => this.users = res);
     }*/

}
