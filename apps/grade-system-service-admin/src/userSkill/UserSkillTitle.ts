import { UserSkill as TUserSkill } from "../api/userSkill/UserSkill";

export const USERSKILL_TITLE_FIELD = "id";

export const UserSkillTitle = (record: TUserSkill): string => {
  return record.id?.toString() || String(record.id);
};
