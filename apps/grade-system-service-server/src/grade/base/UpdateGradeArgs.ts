/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GradeWhereUniqueInput } from "./GradeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GradeUpdateInput } from "./GradeUpdateInput";

@ArgsType()
class UpdateGradeArgs {
  @ApiProperty({
    required: true,
    type: () => GradeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GradeWhereUniqueInput)
  @Field(() => GradeWhereUniqueInput, { nullable: false })
  where!: GradeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GradeUpdateInput,
  })
  @ValidateNested()
  @Type(() => GradeUpdateInput)
  @Field(() => GradeUpdateInput, { nullable: false })
  data!: GradeUpdateInput;
}

export { UpdateGradeArgs as UpdateGradeArgs };