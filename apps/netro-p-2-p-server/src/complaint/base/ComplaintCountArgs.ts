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
import { ComplaintWhereInput } from "./ComplaintWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ComplaintCountArgs {
  @ApiProperty({
    required: false,
    type: () => ComplaintWhereInput,
  })
  @Field(() => ComplaintWhereInput, { nullable: true })
  @Type(() => ComplaintWhereInput)
  where?: ComplaintWhereInput;
}

export { ComplaintCountArgs as ComplaintCountArgs };
