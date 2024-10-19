
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
    console.log("recievedCharacter" + JSON.stringify(character) );
    return (
        <div>
            <h3>Skills</h3>
            <div className={"skillDetailContainer"}>
                <Skill name={Skills.Acrobatics} modifier={(character.attributes?.dexterity ?? +0) - 1} />
                <Skill name={Skills.AnimalHandling} modifier={character.attributes?.wisdom ?? +2} />
                <Skill name={Skills.Arcana} modifier={character.attributes?.intelligence ?? +1} />
                <Skill name={Skills.Athletics} modifier={character.attributes?.strength ?? -1} />
                <Skill name={Skills.Deception} modifier={character.attributes?.charisma ?? 0} />
                <Skill name={Skills.History} modifier={character.attributes?.intelligence ?? +2} />
                <Skill name={Skills.Insight} modifier={character.attributes?.wisdom ?? 0} />
                <Skill name={Skills.Intimidation} modifier={character.attributes?.charisma ?? +0} />
                <Skill name={Skills.Investigation} modifier={character.attributes?.intelligence ?? +1} />
                <Skill name={Skills.Medicine} modifier={character.attributes?.wisdom ?? +0} />
                <Skill name={Skills.Nature} modifier={character.attributes?.intelligence ?? 0} />
                <Skill name={Skills.Perception} modifier={character.attributes?.wisdom ?? +1} />
                <Skill name={Skills.Performance} modifier={character.attributes?.charisma ?? +2} />
                <Skill name={Skills.Persuasion} modifier={character.attributes?.charisma ?? 0} />
                <Skill name={Skills.Religion} modifier={character.attributes?.intelligence ?? 0} />
                <Skill name={Skills.SleightOfHand} modifier={character.attributes?.dexterity ?? 0} />
                <Skill name={Skills.Stealth} modifier={character.attributes?.dexterity ?? 0} />
                <Skill name={Skills.Survival} modifier={character.attributes?.wisdom ?? 0} />
            </div>
        </div>
    );
};

export default StatDetailContainer;