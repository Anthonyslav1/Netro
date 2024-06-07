import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreezeRequestServiceBase } from "./base/freezeRequest.service.base";

@Injectable()
export class FreezeRequestService extends FreezeRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
