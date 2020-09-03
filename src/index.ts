import dotenv from "dotenv";
import express from "express";
import path from "path";

import * as Controllers from './controllers'

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

Controllers.register(app);

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
});



import { EventBus, createEventDefinition } from "ts-bus";
import { CreateUserCommand } from './application/commands/users'
import { CreateUserCommandHandler } from './application/commandHandlers/users'

const handler = new CreateUserCommandHandler();

const e = Reflect.getMetadata('event', CreateUserCommandHandler);
// tslint:disable-next-line:no-console
console.log(e);
const en = Reflect.getMetadata('name', e);
// tslint:disable-next-line:no-console
console.log(en);

// Define Event
export const someEvent = createEventDefinition<{ data : typeof e }>()(en);

// Create bus
const bus = new EventBus();

// Subscribe
bus.subscribe(someEvent, ev => handler.handle(ev.payload.data));

// Publish
const data = new CreateUserCommand('1234', 'Jason', 'Buss', 'jasonmbuss@gmail.com');
// tslint:disable-next-line:no-console
console.log('d: ', data.constructor.name);
bus.publish(someEvent({ data }));