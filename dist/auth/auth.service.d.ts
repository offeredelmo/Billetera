import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'src/users/enums/rol.enum';
import { ConfigService } from '@nestjs/config';
import { NodemailerService } from 'src/nodemailer/nodemailer.service';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    private readonly nodemailerService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, nodemailerService: NodemailerService, configService: ConfigService);
    login(loginDto: LoginDto): Promise<{
        name: string;
        email: string;
        access_token: string;
        refresh_token: string;
    }>;
    register(registerDto: RegisterDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../users/entities/user.entity").User> & import("../users/entities/user.entity").User & Required<{
        _id: string;
    }>>;
    sendEmailByRecoverypassword(email: string): Promise<string>;
    getTokens(userId: string, email: string, roles: UserRole[]): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokens(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
