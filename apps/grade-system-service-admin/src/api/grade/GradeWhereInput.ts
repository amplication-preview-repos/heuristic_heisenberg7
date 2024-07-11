import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserSkillListRelationFilter } from "../userSkill/UserSkillListRelationFilter";

export type GradeWhereInput = {
  id?: StringFilter;
  name?: "Option1";
  requiredSkill?: StringNullableFilter;
  userSkills?: UserSkillListRelationFilter;
};
