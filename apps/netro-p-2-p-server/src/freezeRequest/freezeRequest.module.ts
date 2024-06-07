import { Module } from "@nestjs/common";
import { FreezeRequestModuleBase } from "./base/freezeRequest.module.base";
import { FreezeRequestService } from "./freezeRequest.service";
import { FreezeRequestController } from "./freezeRequest.controller";
import { FreezeRequestResolver } from "./freezeRequest.resolver";

@Module({
  imports: [FreezeRequestModuleBase],
  controllers: [FreezeRequestController],
  providers: [FreezeRequestService, FreezeRequestResolver],
  exports: [FreezeRequestService],
})
export class FreezeRequestModule {}
