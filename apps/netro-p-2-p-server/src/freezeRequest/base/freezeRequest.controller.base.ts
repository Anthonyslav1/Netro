/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FreezeRequestService } from "../freezeRequest.service";
import { FreezeRequestCreateInput } from "./FreezeRequestCreateInput";
import { FreezeRequest } from "./FreezeRequest";
import { FreezeRequestFindManyArgs } from "./FreezeRequestFindManyArgs";
import { FreezeRequestWhereUniqueInput } from "./FreezeRequestWhereUniqueInput";
import { FreezeRequestUpdateInput } from "./FreezeRequestUpdateInput";

export class FreezeRequestControllerBase {
  constructor(protected readonly service: FreezeRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FreezeRequest })
  async createFreezeRequest(
    @common.Body() data: FreezeRequestCreateInput
  ): Promise<FreezeRequest> {
    return await this.service.createFreezeRequest({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FreezeRequest] })
  @ApiNestedQuery(FreezeRequestFindManyArgs)
  async freezeRequests(
    @common.Req() request: Request
  ): Promise<FreezeRequest[]> {
    const args = plainToClass(FreezeRequestFindManyArgs, request.query);
    return this.service.freezeRequests({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FreezeRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async freezeRequest(
    @common.Param() params: FreezeRequestWhereUniqueInput
  ): Promise<FreezeRequest | null> {
    const result = await this.service.freezeRequest({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FreezeRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFreezeRequest(
    @common.Param() params: FreezeRequestWhereUniqueInput,
    @common.Body() data: FreezeRequestUpdateInput
  ): Promise<FreezeRequest | null> {
    try {
      return await this.service.updateFreezeRequest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FreezeRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFreezeRequest(
    @common.Param() params: FreezeRequestWhereUniqueInput
  ): Promise<FreezeRequest | null> {
    try {
      return await this.service.deleteFreezeRequest({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}