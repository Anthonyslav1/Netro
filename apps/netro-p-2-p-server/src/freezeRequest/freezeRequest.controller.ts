import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FreezeRequestService } from "./freezeRequest.service";
import { FreezeRequestControllerBase } from "./base/freezeRequest.controller.base";

@swagger.ApiTags("freezeRequests")
@common.Controller("freezeRequests")
export class FreezeRequestController extends FreezeRequestControllerBase {
  constructor(protected readonly service: FreezeRequestService) {
    super(service);
  }
}
