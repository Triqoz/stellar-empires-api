import { Body, Controller, Get, Post } from '@nestjs/common'
import { EmpiresService } from './empires.service'
import { CreateEmpireDto } from './dtos/create-empire.dto'

@Controller('empires')
export class EmpiresController {
    constructor(private readonly empiresService: EmpiresService) {
    }

    @Get()
    findAll() {
        return this.empiresService.findAll()
    }

    @Post()
    async create(@Body() createEmpireDto: CreateEmpireDto) {
        return this.empiresService.create(createEmpireDto)
    }
}
