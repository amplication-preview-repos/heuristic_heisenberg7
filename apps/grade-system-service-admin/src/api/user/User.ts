import { JsonValue } from "type-fest";
import { UserSkill } from "../userSkill/UserSkill";
import { Role } from "../role/Role";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userSkills?: Array<UserSkill>;
  role?: Role | null;
};
