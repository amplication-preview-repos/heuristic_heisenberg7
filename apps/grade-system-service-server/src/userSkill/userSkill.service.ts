import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSkillServiceBase } from "./base/userSkill.service.base";

@Injectable()
export class UserSkillService extends UserSkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
