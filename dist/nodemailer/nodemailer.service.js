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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let NodemailerService = class NodemailerService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    async sendEmailByRecoverypassword(code) {
        const message = `
    Hola si tu no solicitaste la recuperacion de contraseña ignora esto.
    este es el codigo de verificacion ( ${code} )
    `;
        try {
            await this.mailService.sendMail({
                from: 'Recuperar contraseña <m3ndezdi4z17@gmail.com>',
                to: '211099@ids.upchiapas.edu.mx',
                subject: `Recuperar contraseña`,
                text: message,
            });
            console.log('Email sent successfully');
            return "Message sent";
        }
        catch (error) {
            console.log('Error sending email', error);
            throw new Error(`Failed to send email ${error}`);
        }
    }
};
exports.NodemailerService = NodemailerService;
exports.NodemailerService = NodemailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], NodemailerService);
//# sourceMappingURL=nodemailer.service.js.map