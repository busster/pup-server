import { EventHandler } from '../../../utils/bus/handlerDecorator'
import { CommandHandler } from '../../../utils/cqrs'
import { CreateUserCommand } from '../../commands/users'

@EventHandler(CreateUserCommand)
export class CreateUserCommandHandler extends CommandHandler<CreateUserCommand> {
  handle(command: CreateUserCommand): Promise<void> {
    // tslint:disable-next-line:no-console
    console.log(command);
    return;
  }
}
