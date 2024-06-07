import * as graphql from "@nestjs/graphql";
import { FreezeRequestResolverBase } from "./base/freezeRequest.resolver.base";
import { FreezeRequest } from "./base/FreezeRequest";
import { FreezeRequestService } from "./freezeRequest.service";

@graphql.Resolver(() => FreezeRequest)
export class FreezeRequestResolver extends FreezeRequestResolverBase {
  constructor(protected readonly service: FreezeRequestService) {
    super(service);
  }
}
