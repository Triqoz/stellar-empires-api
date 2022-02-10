import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmpiresController } from './models/empires/empires.controller'

describe('AppController', () => {
    let appController: AppController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController, EmpiresController],
            providers: [AppService],
        }).compile()

        appController = app.get<AppController>(AppController)
    })
})
