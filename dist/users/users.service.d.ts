import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { SpacesService } from 'src/spaces/spaces.service';
export declare class UsersService {
    private userModel;
    private readonly spacesService;
    constructor(userModel: Model<User>, spacesService: SpacesService);
    create(createUserDto: CreateUserDto, file?: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: string;
    }>>;
    findByEmail(email: any): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: string;
    }>>;
    findById(_id: any): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: string;
    }>>;
    remove(_id: string): Promise<string>;
    addVerificationCode(code: string, email: string): Promise<void>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
}
