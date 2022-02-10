import { Test, TestingModule } from '@nestjs/testing'
import { EmpiresService } from './empires.service'

describe('EmpiresService', () => {
    let service: EmpiresService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EmpiresService],
        }).compile()

        service = module.get<EmpiresService>(EmpiresService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
