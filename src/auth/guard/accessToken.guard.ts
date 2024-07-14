import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constant/jwt.constant';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AccessTokenGuard implements CanActivate {

  constructor(
    private jwtService: JwtService, 
    private readonly configService: ConfigService
  ) {}



  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      console.log("sin token")
      throw new UnauthorizedException();
      
    }
    try {

      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('access_token'),
      });
      request['user'] = payload;
    } catch {
      console.log("ta mal el token")
      throw new UnauthorizedException();
    }
    return true;
  }
  
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
  
}
