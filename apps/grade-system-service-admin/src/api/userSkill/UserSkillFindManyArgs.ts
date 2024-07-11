import { UserSkillWhereInput } from "./UserSkillWhereInput";
import { UserSkillOrderByInput } from "./UserSkillOrderByInput";

export type UserSkillFindManyArgs = {
  where?: UserSkillWhereInput;
  orderBy?: Array<UserSkillOrderByInput>;
  skip?: number;
  take?: number;
};
