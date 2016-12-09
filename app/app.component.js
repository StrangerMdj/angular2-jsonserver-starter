"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports
var core_1 = require('@angular/core');
var user_service_1 = require('./services/user.service');
require('./rxjs/rxjs');
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.mode = 'Observable';
    }
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<li *ngFor=\"let item of users\">{{item.name}}</li>",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map