import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmpiresModule } from './models/empires/empires.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import config from '../ormconfig'

@Module({
    imports: [TypeOrmModule.forRoot(config), EmpiresModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {

}
