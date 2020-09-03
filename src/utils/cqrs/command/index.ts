// export interface ICommand {}

export class Command {
  private commandId : string;
  constructor (commandId : string) {
    this.commandId = commandId;
  }
} // implements ICommand {}