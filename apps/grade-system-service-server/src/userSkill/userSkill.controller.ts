import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSkillService } from "./userSkill.service";
import { UserSkillControllerBase } from "./base/userSkill.controller.base";

@swagger.ApiTags("userSkills")
@common.Controller("userSkills")
export class UserSkillController extends UserSkillControllerBase {
  constructor(protected readonly service: UserSkillService) {
    super(service);
  }
}
