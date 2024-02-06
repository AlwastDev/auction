import { Controller, Get, Post, UseGuards, Req, Res, UnauthorizedException, Body } from '@nestjs/common';
import type { Request, Response } from 'express';

import { AuthService, LocalLoginGuard, Payload, LocalAuthGuard, JwtSign, JwtVerifyGuard } from '../../auth';

@Controller()
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('login')
  @UseGuards(LocalLoginGuard)
  public login(user: Payload): Payload {
    return user;
  }

  @Get('logout')
  public logout(@Req() req: Request, @Res() res: Response): void {
    req.logout(() => {
      res.redirect('/');
    });
  }

  @UseGuards(LocalAuthGuard)
  @Post('jwt/login')
  public jwtLogin(user: Payload): JwtSign {
    return this.auth.jwtSign(user);
  }

  @UseGuards(JwtVerifyGuard)
  @Post('jwt/refresh')
  public jwtRefresh(user: Payload, @Body('refresh_token') token?: string): JwtSign {
    if (!token || !this.auth.validateRefreshToken(user, token)) {
      throw new UnauthorizedException('InvalidRefreshToken');
    }

    return this.auth.jwtSign(user);
  }
}
