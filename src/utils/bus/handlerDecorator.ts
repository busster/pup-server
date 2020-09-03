import 'reflect-metadata';

export const EventHandler = (event : any) : ClassDecorator => {
  return (target : any) => {
    // tslint:disable-next-line:no-console
    console.log(event);
    Reflect.defineMetadata('event', event, target);
  }
}