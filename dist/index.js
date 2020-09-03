"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.someEvent = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const Controllers = __importStar(require("./controllers"));
// initialize configuration
dotenv_1.default.config();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express_1.default();
Controllers.register(app);
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
const ts_bus_1 = require("ts-bus");
const users_1 = require("./application/commands/users");
const users_2 = require("./application/commandHandlers/users");
const handler = new users_2.CreateUserCommandHandler();
const e = Reflect.getMetadata('event', users_2.CreateUserCommandHandler);
// tslint:disable-next-line:no-console
console.log(e);
const en = Reflect.getMetadata('name', e);
// tslint:disable-next-line:no-console
console.log(en);
// Define Event
exports.someEvent = ts_bus_1.createEventDefinition()(en);
// Create bus
const bus = new ts_bus_1.EventBus();
// Subscribe
bus.subscribe(exports.someEvent, ev => handler.handle(ev.payload.data));
// Publish
const data = new users_1.CreateUserCommand('1234', 'Jason', 'Buss', 'jasonmbuss@gmail.com');
// tslint:disable-next-line:no-console
console.log('d: ', data.constructor.name);
bus.publish(exports.someEvent({ data }));
//# sourceMappingURL=index.js.map