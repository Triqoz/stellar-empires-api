export enum PlanetClass {
    Alpine= 'Alpine',
    Arctic = 'Arctic',
    Arid = 'Arid',
    Continental = 'Continental',
    Desert = 'Desert',
    Ocean = 'Ocean',
    Savannah = 'Savannah',
    Tropical = 'Tropical',
    Tundra = 'Tundra',
    Tomb = 'Tomb',
    Gaia = 'Gaia',
    Relic = 'Relic',
    Machine = 'Machine',
    OrbitalHabitat = 'Habitat',
    ShatteredRingworld = 'Shattered Ring'
}

export const planetClassFromPlanetClassString = new Map<string, PlanetClass>([
    ['pc_alpine', PlanetClass.Alpine],
    ['pc_arctic', PlanetClass.Arctic],
    ['pc_arid', PlanetClass.Arid],
    ['pc_continental', PlanetClass.Continental],
    ['pc_desert', PlanetClass.Desert],
    ['pc_ocean', PlanetClass.Ocean],
    ['pc_savannah', PlanetClass.Savannah],
    ['pc_tropical', PlanetClass.Tropical],
    ['pc_tundra', PlanetClass.Tundra],
    ['pc_nuked', PlanetClass.Tomb],
    ['pc_gaia', PlanetClass.Gaia],
    ['pc_relic', PlanetClass.Relic],
    ['pc_machine', PlanetClass.Machine],
    ['pc_habitat', PlanetClass.OrbitalHabitat],
    ['pc_shattered_ring_habitable', PlanetClass.ShatteredRingworld],
])

