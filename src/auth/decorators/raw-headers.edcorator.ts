import {
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const RawHEaders = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.rawHeaders;
  },
);
