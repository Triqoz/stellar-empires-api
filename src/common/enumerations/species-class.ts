/**
 * Multi purpose enumeration used for species class, but also graphical display and shipset
 */
export enum SpeciesClass {
    Humanoid,
    Mammalian,
    Reptilian,
    Avian,
    Arthropoid,
    Molluscoid,
    Fungoid,
    Plantoid,
    Lithoid,
    Necroid,
    Aquatic,
    Machine
}

const speciesClassFromClassString = new Map<string, SpeciesClass>([
    ['HUM', SpeciesClass.Humanoid],
    ['MAM', SpeciesClass.Mammalian],
    ['REP', SpeciesClass.Reptilian],
    ['AVI', SpeciesClass.Avian],
    ['ART', SpeciesClass.Arthropoid],
    ['MOL', SpeciesClass.Molluscoid],
    ['FUN', SpeciesClass.Fungoid],
    ['PLANT', SpeciesClass.Plantoid],
    ['LITHOID', SpeciesClass.Lithoid],
    ['NECROID', SpeciesClass.Necroid],
    ['AQUATIC', SpeciesClass.Aquatic],
    ['MACHINE', SpeciesClass.Machine],
])

const speciesClassFromGraphicalCultureString = new Map<string, SpeciesClass>([
    ['humanoid_01', SpeciesClass.Humanoid],
    ['mammalian_01', SpeciesClass.Mammalian],
    ['reptilian_01', SpeciesClass.Reptilian],
    ['avian_01', SpeciesClass.Avian],
    ['arthropoid_01', SpeciesClass.Arthropoid],
    ['molluscoid_01', SpeciesClass.Molluscoid],
    ['fungoid_01', SpeciesClass.Fungoid],
    ['plantoid_01', SpeciesClass.Plantoid],
    ['lithoid_01', SpeciesClass.Lithoid],
    ['necroid_01', SpeciesClass.Necroid],
    ['aquatic_01', SpeciesClass.Aquatic],
])
