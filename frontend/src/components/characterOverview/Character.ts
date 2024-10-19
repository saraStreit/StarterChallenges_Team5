export interface Character {
    id?: number;
    name: string;
    race?: string;
    gender?: string;
    characterClass?: string;
    level?: number;
    armor?: number,
    speed?: number;
    attributes?: attributesDto;
}

export interface attributesDto {
    id?: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    initiative: number;
}

export enum CharacterClass {
    Barbarian = "Barbarian",
    Bard = "Bard",
    Cleric = "Cleric",
    Druid = "Druid",
    Fighter = "Fighter",
    Monk = "Monk",
    Paladin = "Paladin",
    Ranger = "Ranger",
    Rogue = "Rogue",
    Sorcerer = "Sorcerer",
    Warlock = "Warlock",
    Wizard = "Wizard"
}
export enum CharacterRace {
    Human = "Human",
    Elf = "Elf",
    Dwarf = "Dwarf",
    Orc = "Orc",
    Goblin = "Goblin",
    Troll = "Troll",
    Halfling = "Halfling",
    Gnome = "Gnome",
    HalfElf = "Half-Elf",
    HalfOrc = "Half-Orc",
    Dragonborn = "Dragonborn",
}

export interface CharacterBaseStats {
    wisdom: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    charisma: number;
}