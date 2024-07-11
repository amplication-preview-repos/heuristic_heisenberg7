import { Module } from "@nestjs/common";
import { UserSkillModuleBase } from "./base/userSkill.module.base";
import { UserSkillService } from "./userSkill.service";
import { UserSkillController } from "./userSkill.controller";
import { UserSkillResolver } from "./userSkill.resolver";

@Module({
  imports: [UserSkillModuleBase],
  controllers: [UserSkillController],
  providers: [UserSkillService, UserSkillResolver],
  exports: [UserSkillService],
})
export class UserSkillModule {}
