import { Module } from '@nestjs/common'
import { EmpiresService } from './empires.service'
import { EmpiresController } from './empires.controller'

@Module({
    controllers: [EmpiresController],
    providers: [EmpiresService],
    exports: [EmpiresService],
})
export class EmpiresModule {
}
