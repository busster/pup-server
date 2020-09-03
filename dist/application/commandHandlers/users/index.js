"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCommandHandler = void 0;
const handlerDecorator_1 = require("../../../utils/bus/handlerDecorator");
const cqrs_1 = require("../../../utils/cqrs");
const users_1 = require("../../commands/users");
let CreateUserCommandHandler = class CreateUserCommandHandler extends cqrs_1.CommandHandler {
    handle(command) {
        // tslint:disable-next-line:no-console
        console.log(command);
        return;
    }
};
CreateUserCommandHandler = __decorate([
    handlerDecorator_1.EventHandler(users_1.CreateUserCommand)
], CreateUserCommandHandler);
exports.CreateUserCommandHandler = CreateUserCommandHandler;
//# sourceMappingURL=index.js.map