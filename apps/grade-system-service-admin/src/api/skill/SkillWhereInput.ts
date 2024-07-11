import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserSkillListRelationFilter } from "../userSkill/UserSkillListRelationFilter";

export type SkillWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  userSkills?: UserSkillListRelationFilter;
};
