"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_entity_1 = require("./entities/user.entity");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const rol_enum_1 = require("./enums/rol.enum");
const spaces_service_1 = require("../spaces/spaces.service");
let UsersService = class UsersService {
    constructor(userModel, spacesService) {
        this.userModel = userModel;
        this.spacesService = spacesService;
    }
    async create(createUserDto, file) {
        try {
            const newUser = new this.userModel(createUserDto);
            newUser.password = await bcrypt.hash(createUserDto.password, 10);
            newUser.roles.push(rol_enum_1.UserRole.USER);
            if (file) {
                const img_url = await this.spacesService.uploadFile(file);
                newUser.img_url = img_url;
            }
            await newUser.save();
            return newUser;
        }
        catch (error) {
            console.log(error);
            if (error.code == 11000) {
                throw new common_1.BadRequestException(`El correo ${createUserDto.email} ya esta registrado`);
            }
            throw new common_1.InternalServerErrorException("a ocurrido un error inesperado, intente mas tarde");
        }
    }
    async findByEmail(email) {
        const userSerch = await this.userModel.findOne({ email: email });
        if (!userSerch) {
            throw new common_1.UnauthorizedException(`el usuario con el email ${email} no fue encontrado`);
        }
        return userSerch;
    }
    async findById(_id) {
        const userSerch = await this.userModel.findById(_id);
        if (!userSerch) {
            throw new common_1.UnauthorizedException(`el usuario con el id ${_id} no fue encontrado`);
        }
        return userSerch;
    }
    async remove(_id) {
        const removeUser = await this.userModel.findOneAndUpdate({ _id }, { $set: { delete: true } }, { new: true });
        if (!removeUser) {
            throw new common_1.NotFoundException(`el usuario con el id ${_id} no fue encontrado`);
        }
        return `el usuario con el id ${_id} no fue encontrado`;
    }
    async addVerificationCode(code, email) {
        const expires = new Date(Date.now() + 5 * 60 * 1000);
        await this.userModel.updateOne({ email }, {
            verificationCode: code,
            verificationCodeExpires: expires,
        });
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        await this.userModel.findByIdAndUpdate({ _id: userId }, { refreshToken: hashedRefreshToken }, { new: true });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        spaces_service_1.SpacesService])
], UsersService);
//# sourceMappingURL=users.service.js.map