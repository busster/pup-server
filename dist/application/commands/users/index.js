"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCommand = void 0;
const eventDecorator_1 = require("../../../utils/bus/eventDecorator");
const cqrs_1 = require("../../../utils/cqrs");
let CreateUserCommand = class CreateUserCommand extends cqrs_1.Command {
    constructor(userId, firstName, lastName, email) {
        super('asdf');
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
};
CreateUserCommand = __decorate([
    eventDecorator_1.Event('CreateUserCommand')
], CreateUserCommand);
exports.CreateUserCommand = CreateUserCommand;
//# sourceMappingURL=index.js.map