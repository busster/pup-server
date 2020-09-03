import 'reflect-metadata';

export const Event = (name : string = '') : ClassDecorator => {
  return (target : any) => {
    // tslint:disable-next-line:no-console
    console.log(name);
    Reflect.defineMetadata('name', name, target);
  }
}