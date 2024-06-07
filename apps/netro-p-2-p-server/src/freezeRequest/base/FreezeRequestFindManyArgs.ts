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
import { FreezeRequestWhereInput } from "./FreezeRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FreezeRequestOrderByInput } from "./FreezeRequestOrderByInput";

@ArgsType()
class FreezeRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FreezeRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FreezeRequestWhereInput, { nullable: true })
  @Type(() => FreezeRequestWhereInput)
  where?: FreezeRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [FreezeRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FreezeRequestOrderByInput], { nullable: true })
  @Type(() => FreezeRequestOrderByInput)
  orderBy?: Array<FreezeRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FreezeRequestFindManyArgs as FreezeRequestFindManyArgs };
