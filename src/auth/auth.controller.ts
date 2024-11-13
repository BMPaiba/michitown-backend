import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { RawHEaders } from './decorators/raw-headers.edcorator';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces/valid-roles.interface';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  
  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginUser(loginUserDto);
  }

  // protegida con autenticacion pero sin roles
  @Get('private')
  @UseGuards(AuthGuard())
  testingprivateRoute(
    @GetUser() user: User,
    @GetUser('email') email: string,
    @RawHEaders() rawHeaders: string,
    @Headers() headers: string,
  ) {
    return {
      ok: true,
      message: 'Hello World',
      user,
      email,
      rawHeaders,
      headers,
    };
  }

  // protegida con autenticacion y con roles de la forma que viene nestjs
  @Get('private2')
  @RoleProtected(ValidRoles.superUser)
  @UseGuards(AuthGuard(), UserRoleGuard)
  privateRoute2(@GetUser() user: User) {
    return {
      ok: true,
      message: 'Hello World',
      user,
    };
  }

  // protegida con autenticacion y con roles con un guard personalizado
  @Get('private3')
  @Auth(ValidRoles.admin)
  privateRoute3(@GetUser() user: User) {
    return {
      ok: true,
      message: 'Hello World',
      user,
    };
  }


}
