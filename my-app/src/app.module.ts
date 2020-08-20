import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';


@Module({
  // imports: [UsersModule],
  // controllers: [AppController],
  // providers: [AppService],
  imports: [
    TypeOrmModule.forRoot(),  
    UsersModule,
  ],
})
export class AppModule {}
