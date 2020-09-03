import { Event } from '../../../utils/bus/eventDecorator'
import { Command } from '../../../utils/cqrs'

@Event('CreateUserCommand')
export class CreateUserCommand extends Command {
  userId : string;
  firstName : string;
  lastName : string;
  email : string;

  constructor (userId : string, firstName : string, lastName : string, email : string) {
    super('asdf');
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
