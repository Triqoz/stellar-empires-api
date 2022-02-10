import { Civic, civicIdToCivic } from '../enumerations/civic'
import { Authority } from '../enumerations/authority'

export const getCivicFromId: Function = (id: string): Civic => {
    return civicIdToCivic.get(id)
}

export const getAuthorityFromCivic: Function = (civic: Civic): Authority => {
    let civicString: string = civic.toString().toLowerCase()
    if (civicString.includes('hive')) return Authority.HiveMind
    if (civicString.includes('machine')) return Authority.MachineIntelligence
    if (civicString.includes('corporate') && !civicString.includes('dominion')) return Authority.Corporate
    return civicToAuthorityMap.get(civic)
}

const civicToAuthorityMap = new Map<Civic, Authority>([
    [Civic.BeaconOfLiberty, Authority.Democratic],
    [Civic.CorporateDominion, Authority.Oligarchic],
    [Civic.FeudalRealm, Authority.Imperial],
    [Civic.ImperialCult, Authority.Imperial],
    [Civic.ParliamentarySystem, Authority.Democratic]
])