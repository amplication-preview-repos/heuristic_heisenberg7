import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserSkillListRelationFilter } from "../userSkill/UserSkillListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userSkills?: UserSkillListRelationFilter;
  role?: RoleWhereUniqueInput;
};
