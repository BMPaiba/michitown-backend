import { createParamDecorator, ExecutionContext, InternalServerErrorException } from "@nestjs/common";

export const GetUser  = createParamDecorator(
    (data, ctx: ExecutionContext) =>{
        console.log()
        if(data) return data
        const req = ctx.switchToHttp().getRequest();
        const user = req.user
        if(!user) throw new InternalServerErrorException('User not found')
        return (!data) ? user : user[data]
    }
)