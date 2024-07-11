import { UserSkillUpdateManyWithoutGradesInput } from "./UserSkillUpdateManyWithoutGradesInput";

export type GradeUpdateInput = {
  name?: "Option1" | null;
  requiredSkill?: string | null;
  userSkills?: UserSkillUpdateManyWithoutGradesInput;
};
