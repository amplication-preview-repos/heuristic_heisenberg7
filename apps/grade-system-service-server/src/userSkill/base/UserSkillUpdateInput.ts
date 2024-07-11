/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GradeWhereUniqueInput } from "../../grade/base/GradeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { SkillWhereUniqueInput } from "../../skill/base/SkillWhereUniqueInput";

@InputType()
class UserSkillUpdateInput {
  @ApiProperty({
    required: false,
    type: () => GradeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GradeWhereUniqueInput)
  @IsOptional()
  @Field(() => GradeWhereUniqueInput, {
    nullable: true,
  })
  grade?: GradeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SkillWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SkillWhereUniqueInput)
  @IsOptional()
  @Field(() => SkillWhereUniqueInput, {
    nullable: true,
  })
  skill?: SkillWhereUniqueInput | null;
}

export { UserSkillUpdateInput as UserSkillUpdateInput };
