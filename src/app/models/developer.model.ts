import { Skill } from "./skill.model"; 

export class Developer {
    constructor(
        public lastname: string,
        public firstname: string,
        public age: number,
        public gender: string,
        public bio: string,
        public skills: Array<Skill>
    ) {}
}