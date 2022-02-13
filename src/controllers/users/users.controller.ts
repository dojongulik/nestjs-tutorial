import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @Get('profile')
  getProfile (@Request() req) {
    return { message: 'profile' };
  }

  @Get('info')
  @UseGuards(JwtAuthGuard)
  getInfo (@Request() req) {
    return req.user;
  }
}
