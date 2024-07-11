import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SkillWhereUniqueInput } from "../skill/SkillWhereUniqueInput";

export type UserSkillUpdateInput = {
  grade?: GradeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  skill?: SkillWhereUniqueInput | null;
};