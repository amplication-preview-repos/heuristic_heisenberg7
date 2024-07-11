import * as graphql from "@nestjs/graphql";
import { UserSkillResolverBase } from "./base/userSkill.resolver.base";
import { UserSkill } from "./base/UserSkill";
import { UserSkillService } from "./userSkill.service";

@graphql.Resolver(() => UserSkill)
export class UserSkillResolver extends UserSkillResolverBase {
  constructor(protected readonly service: UserSkillService) {
    super(service);
  }
}
