import { Injectable } from '@nestjs/common'
import { CreateEmpireDto } from './dtos/create-empire.dto'
import { Empire } from './empire.entity'
import { parseFile } from '../../common/file-parser/file-parser'

@Injectable()
export class EmpiresService {
    findAll() {
        return Empire.find()
    }

    /**
     *
     * @param createEmpireDto Source of the empire
     */
    create(createEmpireDto: CreateEmpireDto) {
        return parseFile(createEmpireDto.source)
    }
}

