import { IsNotEmpty } from 'class-validator'

export class CreateEmpireDto {

    @IsNotEmpty()
    source: string
}

