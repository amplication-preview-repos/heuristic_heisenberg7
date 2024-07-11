import { UserSkillCreateNestedManyWithoutSkillsInput } from "./UserSkillCreateNestedManyWithoutSkillsInput";

export type SkillCreateInput = {
  name?: string | null;
  description?: string | null;
  userSkills?: UserSkillCreateNestedManyWithoutSkillsInput;
};
