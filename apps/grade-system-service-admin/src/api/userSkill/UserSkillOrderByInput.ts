import { SortOrder } from "../../util/SortOrder";

export type UserSkillOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  gradeId?: SortOrder;
  userId?: SortOrder;
  skillId?: SortOrder;
};
