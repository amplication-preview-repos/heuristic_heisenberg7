import { UserSkillUpdateManyWithoutSkillsInput } from "./UserSkillUpdateManyWithoutSkillsInput";

export type SkillUpdateInput = {
  name?: string | null;
  description?: string | null;
  userSkills?: UserSkillUpdateManyWithoutSkillsInput;
};
