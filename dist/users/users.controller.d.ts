import { UsersService } from './users.service';
import { SpacesService } from 'src/spaces/spaces.service';
export declare class UsersController {
    private readonly usersService;
    private readonly spacesService;
    constructor(usersService: UsersService, spacesService: SpacesService);
    updateImageProfile(_id: string, file: Express.Multer.File): Promise<{
        email: string;
        img_url: string;
    }>;
}
