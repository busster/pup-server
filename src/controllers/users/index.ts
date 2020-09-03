import {
  Controller, Post, Get,
  Request, Response
} from '../../utils/controller';

@Controller('/users')
export default class UsersController {

  @Post('/')
  public async create(req : Request, res : Response) : Promise<void> {
    // tslint:disable-next-line:no-console
    console.log(await Promise.resolve('CREATING THE USER'));
    res.status(201).send({ user: 'some user' });
  }

  @Get('/:id')
  public async getById(req : Request, res : Response) : Promise<void> {
    // tslint:disable-next-line:no-console
    console.log(await Promise.resolve(`GETTING USER ${req.params.id} ${req.userId}`));
    res.status(200).send({ user: req.params.id });
  }
}
