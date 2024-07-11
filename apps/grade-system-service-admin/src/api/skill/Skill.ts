import { UserSkill } from "../userSkill/UserSkill";

export type Skill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  userSkills?: Array<UserSkill>;
};
