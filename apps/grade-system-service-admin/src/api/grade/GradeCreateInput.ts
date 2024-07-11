import { UserSkillCreateNestedManyWithoutGradesInput } from "./UserSkillCreateNestedManyWithoutGradesInput";

export type GradeCreateInput = {
  name?: "Option1" | null;
  requiredSkill?: string | null;
  userSkills?: UserSkillCreateNestedManyWithoutGradesInput;
};
