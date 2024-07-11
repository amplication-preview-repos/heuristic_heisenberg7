import { Grade } from "../grade/Grade";
import { User } from "../user/User";
import { Skill } from "../skill/Skill";

export type UserSkill = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  grade?: Grade | null;
  user?: User | null;
  skill?: Skill | null;
};
