import { User } from "../user/User";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  users?: Array<User>;
};
