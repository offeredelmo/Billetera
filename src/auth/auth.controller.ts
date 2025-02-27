import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { UserRole } from 'src/users/enums/rol.enum';
import { AccessTokenGuard } from './guard/accessToken.guard';
import { IsEmail } from 'class-validator';
import { EmailValidationPipe } from './pipes/email_validation.pipe';
import { RefreshTokenGuard } from './guard/refreshToken.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post("login")
  async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto)
  }

  @Post("register")
  @UseInterceptors(FileInterceptor('file'))
  async register(@Body() registerDto: RegisterDto, @UploadedFile() file:Express.Multer.File) {
    return await this.authService.register(registerDto, file)
  }

  @Post("recovery_password")
  async recoveryPasswordByEmail(@Body('email', EmailValidationPipe) email: string) {
    return this.authService.sendEmailByRecoverypassword(email)
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    console.log(req)
    const userId = req['user'].dataToken.user;
    const refreshToken = req['user'].refreshtoken;
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Get()
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(UserRole.USER)
  async test() {
    return "test"
  }

}
