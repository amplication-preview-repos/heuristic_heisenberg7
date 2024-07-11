import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  requiredSkill?: SortOrder;
};
