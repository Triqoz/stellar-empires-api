import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IsNotEmpty } from 'class-validator'
import { PlanetClass } from '../../common/enumerations/planet-class'
import { Dlc } from '../../common/enumerations/dlc'
import { Origin } from '../../common/enumerations/origin'
import { Civic } from '../../common/enumerations/civic'
import { Ethic } from '../../common/enumerations/ethic'

@Entity()
export class Empire extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column()
    source: string

    name: string
    planetName: string
    class: PlanetClass
    origin: Origin
    dlc: Dlc[]
    civics: Civic[]
    ethics: Ethic[]
    species: string //TODO
    government: string //TODO
}

