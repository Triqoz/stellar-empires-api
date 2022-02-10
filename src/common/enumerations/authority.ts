export enum Authority {
    Democratic= "Democratic",
    Oligarchic = "Oligarchic",
    Dictatorial = "Dictatorial",
    Imperial = "Imperial",
    Corporate = "Corporate",
    HiveMind = "Hive Mind",
    MachineIntelligence = "Machine Intelligence"
}

export const authorityToAuthority = new Map<string, Authority>([
    ['auth_democratic', Authority.Democratic],
    ['auth_oligarchic', Authority.Oligarchic],
    ['auth_dictatorial', Authority.Dictatorial],
    ['auth_imperial', Authority.Imperial],
    ['auth_corporate', Authority.Corporate],
    ['auth_hive_mind', Authority.HiveMind],
    ['auth_machine_intelligence', Authority.MachineIntelligence],
])
