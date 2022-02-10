import { Authority } from './authority'
import { SpeciesClass } from './species-class'
import { Origin } from './origin'
import { Civic } from './civic'
import { Trait } from './trait'

export enum Dlc {
    AncientRelics,
    AnniversaryPortraits,
    Apocalypse,
    Aquatics,
    DistantRelics,
    Federations,
    HorizonSignal,
    Humanoids,
    Leviathans,
    Lithoids,
    Megacorp,
    Necroids,
    Nemesis,
    Plantoids,
    SyntheticDawn,
    Utopia,
}

export const dlcFromAuthority = new Map<Authority, Dlc>([
    [Authority.Corporate, Dlc.Megacorp],
    [Authority.MachineIntelligence, Dlc.SyntheticDawn],
    [Authority.HiveMind, Dlc.Utopia],
])

export const dlcFromSpeciesClass = new Map<SpeciesClass, Dlc>([
    [SpeciesClass.Plantoid, Dlc.Plantoids],
    [SpeciesClass.Lithoid, Dlc.Lithoids],
    [SpeciesClass.Necroid, Dlc.Necroids],
    [SpeciesClass.Aquatic, Dlc.Aquatics],
])

export const dlcFromOrigin = new Map<Origin, Dlc>([
    [Origin.Mechanist, Dlc.Utopia],
    [Origin.SyncreticEvolution, Dlc.Utopia],
    [Origin.TreeOfLife, Dlc.Utopia],
    [Origin.ResourceConsolidation, Dlc.SyntheticDawn],
    [Origin.CloneArmy, Dlc.Humanoids],
    [Origin.LifeSeeded, Dlc.Apocalypse],
    [Origin.PostApocalyptic, Dlc.Apocalypse],
    [Origin.Remnants, Dlc.AncientRelics],
    [Origin.CalamitousBirth, Dlc.Lithoids],
    [Origin.CommonGround, Dlc.Federations],
    [Origin.Hegemon, Dlc.Federations],
    [Origin.Doomsday, Dlc.Federations],
    [Origin.OnTheShouldersOfGiants, Dlc.Federations],
    [Origin.Scion, Dlc.Federations],
    [Origin.ShatteredRing, Dlc.Federations],
    [Origin.VoidDwellers, Dlc.Federations],
    [Origin.Necrophage, Dlc.Necroids],
    [Origin.HereBeDragons, Dlc.Aquatics],
    [Origin.OceanParadise, Dlc.Aquatics],
])

export const dlcFromCivic = new Map<Civic, Dlc>([
    // Regular Civics
    [Civic.FanaticPurifiers, Dlc.Utopia],
    [Civic.HiveMemorialist, Dlc.Necroids],
    [Civic.ReanimatedArmies, Dlc.Necroids],
    [Civic.DeathCult, Dlc.Necroids],
    [Civic.ByzantineBureaucracy, Dlc.Megacorp],
    [Civic.MerchantGuilds, Dlc.Megacorp],
    [Civic.SharedBurden, Dlc.Megacorp],
    [Civic.DiplomaticCorps, Dlc.Federations],
    [Civic.CatalyticProcessing, Dlc.Plantoids],
    [Civic.IdyllicBloom, Dlc.Plantoids],
    [Civic.MasterfulCrafters, Dlc.Humanoids],
    [Civic.PompousPurists, Dlc.Humanoids],
    [Civic.Anglers, Dlc.Aquatics],
    [Civic.BarbaricDespoilers, Dlc.Apocalypse],

    // Megacorp
    [Civic.CorporateDeathCult, Dlc.Necroids],
    [Civic.CorporatePublicRelationsSpecialists, Dlc.Federations],
    [Civic.CorporateCatalyticProcessing, Dlc.Plantoids],
    [Civic.CorporateCrafters, Dlc.Humanoids],
    [Civic.CorporateHedonism, Dlc.Humanoids],
    [Civic.CorporateAnglers, Dlc.Aquatics],

    // Hive Mind
    [Civic.HiveMemorialist, Dlc.Necroids],
    [Civic.HiveTerravore, Dlc.Lithoids],
    [Civic.HiveEmpath, Dlc.Federations],
    [Civic.HiveCatalyticProcessing, Dlc.Plantoids],
    [Civic.HiveIdyllicBloom, Dlc.Plantoids],

    // Machine Intelligence
    [Civic.MachineMemorialist, Dlc.Necroids],
    [Civic.MachineCatalyticProcessing, Dlc.Plantoids],
])

export const dlcFromTrait = new Map<Trait, Dlc>([
    [Trait.Phototrophic, Dlc.Plantoids],
    [Trait.Radiotrophic, Dlc.Plantoids],
    [Trait.Budding, Dlc.Plantoids],
    [Trait.Lithoid, Dlc.Lithoids],
    [Trait.GaseousByproducts, Dlc.Lithoids],
    [Trait.ScintillatingSkin, Dlc.Lithoids],
    [Trait.VolatileExcretions, Dlc.Lithoids],
    [Trait.Serviles, Dlc.Utopia],
    [Trait.CloneSoldier, Dlc.Humanoids],
    [Trait.Survivor, Dlc.Apocalypse],
    [Trait.VoidDweller, Dlc.Federations],
    [Trait.Necrophage, Dlc.Necroids],
    [Trait.HiveMinded, Dlc.Utopia],
    [Trait.Aquatic, Dlc.Aquatics],
])