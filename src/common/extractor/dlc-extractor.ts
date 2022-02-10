import {
    Dlc,
    dlcFromAuthority,
    dlcFromCivic,
    dlcFromOrigin,
    dlcFromSpeciesClass,
} from '../enumerations/dlc'
import { Authority } from '../enumerations/authority'
import { Civic } from '../enumerations/civic'
import { Origin } from '../enumerations/origin'
import { SpeciesClass } from '../enumerations/species-class'
import { Empire } from '../../models/empires/empire.entity'

export const extractDlcFromEmpire = (empire: Empire): Dlc[] => {
    let dlcs: Dlc[] = []


    return dlcs
}


const extractDlcFromAuthority = (authority: Authority): Dlc => {
    return dlcFromAuthority.get(authority)
}

const extractDlcFromCivic = (civic: Civic): Dlc => {
    return dlcFromCivic.get(civic)
}

const extractDlcFromOrigin = (origin: Origin): Dlc => {
    return dlcFromOrigin.get(origin)
}

const extractDlcFromSpeciesClass = (speciesClass: SpeciesClass): Dlc => {
    return dlcFromSpeciesClass.get(speciesClass)
}