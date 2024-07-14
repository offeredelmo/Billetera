import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NodemailerModule } from './nodemailer/nodemailer.module';
import configuration from './config/configuration';
import { MailerModule } from '@nestjs-modules/mailer';
import { GastosModule } from './gastos/gastos.module';
import { BilleteraModule } from './billetera/billetera.module';
import { HistorialIngresosModule } from './historial_ingresos/historial_ingresos.module';
import { SpacesModule } from './spaces/spaces.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.env'
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => (
        {
        transport : {
          host: configService.get<string>('email_host'),
          port: configService.get<number>('email_port'),
          secure: true,
          auth: {
            user: configService.get<string>('auth_user'),
            pass: configService.get<string>('auth_pass'),
          },
        }
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongo_url_db'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    NodemailerModule,
    GastosModule,
    BilleteraModule,
    HistorialIngresosModule,
    SpacesModule
  ],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
