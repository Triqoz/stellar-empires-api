import { Test, TestingModule } from '@nestjs/testing'
import { EmpiresController } from './empires.controller'
import { EmpiresService } from './empires.service'

describe('EmpiresController', () => {
    let controller: EmpiresController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [EmpiresController],
            providers: [EmpiresService],
        }).compile()

        controller = module.get<EmpiresController>(EmpiresController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
