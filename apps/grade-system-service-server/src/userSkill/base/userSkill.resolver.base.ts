/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserSkill } from "./UserSkill";
import { UserSkillCountArgs } from "./UserSkillCountArgs";
import { UserSkillFindManyArgs } from "./UserSkillFindManyArgs";
import { UserSkillFindUniqueArgs } from "./UserSkillFindUniqueArgs";
import { CreateUserSkillArgs } from "./CreateUserSkillArgs";
import { UpdateUserSkillArgs } from "./UpdateUserSkillArgs";
import { DeleteUserSkillArgs } from "./DeleteUserSkillArgs";
import { Grade } from "../../grade/base/Grade";
import { User } from "../../user/base/User";
import { Skill } from "../../skill/base/Skill";
import { UserSkillService } from "../userSkill.service";
@graphql.Resolver(() => UserSkill)
export class UserSkillResolverBase {
  constructor(protected readonly service: UserSkillService) {}

  async _userSkillsMeta(
    @graphql.Args() args: UserSkillCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserSkill])
  async userSkills(
    @graphql.Args() args: UserSkillFindManyArgs
  ): Promise<UserSkill[]> {
    return this.service.userSkills(args);
  }

  @graphql.Query(() => UserSkill, { nullable: true })
  async userSkill(
    @graphql.Args() args: UserSkillFindUniqueArgs
  ): Promise<UserSkill | null> {
    const result = await this.service.userSkill(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserSkill)
  async createUserSkill(
    @graphql.Args() args: CreateUserSkillArgs
  ): Promise<UserSkill> {
    return await this.service.createUserSkill({
      ...args,
      data: {
        ...args.data,

        grade: args.data.grade
          ? {
              connect: args.data.grade,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        skill: args.data.skill
          ? {
              connect: args.data.skill,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserSkill)
  async updateUserSkill(
    @graphql.Args() args: UpdateUserSkillArgs
  ): Promise<UserSkill | null> {
    try {
      return await this.service.updateUserSkill({
        ...args,
        data: {
          ...args.data,

          grade: args.data.grade
            ? {
                connect: args.data.grade,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          skill: args.data.skill
            ? {
                connect: args.data.skill,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserSkill)
  async deleteUserSkill(
    @graphql.Args() args: DeleteUserSkillArgs
  ): Promise<UserSkill | null> {
    try {
      return await this.service.deleteUserSkill(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Grade, {
    nullable: true,
    name: "grade",
  })
  async getGrade(@graphql.Parent() parent: UserSkill): Promise<Grade | null> {
    const result = await this.service.getGrade(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: UserSkill): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Skill, {
    nullable: true,
    name: "skill",
  })
  async getSkill(@graphql.Parent() parent: UserSkill): Promise<Skill | null> {
    const result = await this.service.getSkill(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}