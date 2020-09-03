import { Request, Response, NextFunction } from '../../../utils/controller';

export const authorize = (req : Request, res : Response, next : NextFunction) => {
  // tslint:disable-next-line:no-console
  console.log('DOING SOME AUTH WORK');
  // tslint:disable-next-line:no-console
  console.log('Bearer ' + req.headers.authorization);

  const bearerHeader = req.headers.authorization
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    const userId : string = bearerToken;

    req.userId = userId;

    next();
  } else {
    // Forbidden
    res.sendStatus(401);
  }
  next();
}
