import { StringFilter } from "../../util/StringFilter";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type UserSkillWhereInput = {
  id?: StringFilter;
  grade?: GradeWhereUniqueInput;
  user?: UserWhereUniqueInput;
  skill?: SkillWhereUniqueInput;
};
