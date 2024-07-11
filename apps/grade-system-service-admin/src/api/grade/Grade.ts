import { UserSkill } from "../userSkill/UserSkill";

export type Grade = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name?: "Option1" | null;
  requiredSkill: string | null;
  userSkills?: Array<UserSkill>;
};
