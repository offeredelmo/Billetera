import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { SpacesService } from 'src/spaces/spaces.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly spacesService:SpacesService
  ) { }
  @Post("/update-image-profile")
  @UseInterceptors(FileInterceptor('file'))
  async updateImageProfile(@Body() _id:string, @UploadedFile() file: Express.Multer.File){
    const user = await this.usersService.findById(_id)
    const url_image = await this.spacesService.updateImage(user.img_url, file)
    user.img_url = url_image
    return {
      email: user.email,
      img_url: user.img_url
    }
  }


}
