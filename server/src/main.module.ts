import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { configuration } from './config';
import { BaseModule } from './base';

@Module({
  imports: [
    // Configuration
    // https://docs.nestjs.com/techniques/configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // Database
    // https://docs.nestjs.com/techniques/database
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        ...config.get<TypeOrmModuleOptions>('db'),
      }),
      inject: [ConfigService],
    }),

    // Service Modules
    BaseModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        // disableErrorMessages: true,
        transform: true, // transform object to DTO class
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
