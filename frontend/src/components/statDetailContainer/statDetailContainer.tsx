
import {Character} from "../characterOverview/Character.ts";
import Skill from "../skill/skill.tsx";

interface statDetailContainerProps {
    character: Character;
}

enum Skills {
    Acrobatics = "Acrobatics",
    AnimalHandling = "Animal Handling",
    Arcana = "Arcana",
    Athletics = "Athletics",
    Deception = "Deception",
    History = "History",
    Insight = "Insight",
    Intimidation = "Intimidation",
    Investigation = "Investigation",
    Medicine = "Medicine",
    Nature = "Nature",
    Perception = "Perception",
    Performance = "Performance",
    Persuasion = "Persuasion",
    Religion = "Religion",
    SleightOfHand = "Sleight of Hand",
    Stealth = "Stealth",
    Survival = "Survival"
}

const StatDetailContainer = ({ character }: statDetailContainerProps) => {
    return (
        <div>
            <h3>Skills</h3>
            <div className={"skillDetailContainer"}>
                <Skill name={Skills.Acrobatics} modifier={character.characterBaseStats?.dexterity ?? 0} />
                <Skill name={Skills.AnimalHandling} modifier={character.characterBaseStats?.wisdom ?? 0} />
                <Skill name={Skills.Arcana} modifier={character.characterBaseStats?.intelligence ?? 0} />
                <Skill name={Skills.Athletics} modifier={character.characterBaseStats?.strength ?? 0} />
                <Skill name={Skills.Deception} modifier={character.characterBaseStats?.charisma ?? 0} />
                <Skill name={Skills.History} modifier={character.characterBaseStats?.intelligence ?? 0} />
                <Skill name={Skills.Insight} modifier={character.characterBaseStats?.wisdom ?? 0} />
                <Skill name={Skills.Intimidation} modifier={character.characterBaseStats?.charisma ?? 0} />
                <Skill name={Skills.Investigation} modifier={character.characterBaseStats?.intelligence ?? 0} />
                <Skill name={Skills.Medicine} modifier={character.characterBaseStats?.wisdom ?? 0} />
                <Skill name={Skills.Nature} modifier={character.characterBaseStats?.intelligence ?? 0} />
                <Skill name={Skills.Perception} modifier={character.characterBaseStats?.wisdom ?? 0} />
                <Skill name={Skills.Performance} modifier={character.characterBaseStats?.charisma ?? 0} />
                <Skill name={Skills.Persuasion} modifier={character.characterBaseStats?.charisma ?? 0} />
                <Skill name={Skills.Religion} modifier={character.characterBaseStats?.intelligence ?? 0} />
                <Skill name={Skills.SleightOfHand} modifier={character.characterBaseStats?.dexterity ?? 0} />
                <Skill name={Skills.Stealth} modifier={character.characterBaseStats?.dexterity ?? 0} />
                <Skill name={Skills.Survival} modifier={character.characterBaseStats?.wisdom ?? 0} />
            </div>
        </div>
    );
};

export default StatDetailContainer;