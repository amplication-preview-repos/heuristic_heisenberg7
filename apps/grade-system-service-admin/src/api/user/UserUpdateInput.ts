import { InputJsonValue } from "../../types";
import { UserSkillUpdateManyWithoutUsersInput } from "./UserSkillUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userSkills?: UserSkillUpdateManyWithoutUsersInput;
  role?: RoleWhereUniqueInput | null;
};
