import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        name: string;
        email: string;
        access_token: string;
        refresh_token: string;
    }>;
    register(registerDto: RegisterDto, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../users/entities/user.entity").User> & import("../users/entities/user.entity").User & Required<{
        _id: string;
    }>>;
    recoveryPasswordByEmail(email: string): Promise<string>;
    refreshTokens(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    test(): Promise<string>;
}
