/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, FreezeRequest as PrismaFreezeRequest } from "@prisma/client";

export class FreezeRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FreezeRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.freezeRequest.count(args);
  }

  async freezeRequests<T extends Prisma.FreezeRequestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreezeRequestFindManyArgs>
  ): Promise<PrismaFreezeRequest[]> {
    return this.prisma.freezeRequest.findMany<Prisma.FreezeRequestFindManyArgs>(
      args
    );
  }
  async freezeRequest<T extends Prisma.FreezeRequestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreezeRequestFindUniqueArgs>
  ): Promise<PrismaFreezeRequest | null> {
    return this.prisma.freezeRequest.findUnique(args);
  }
  async createFreezeRequest<T extends Prisma.FreezeRequestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreezeRequestCreateArgs>
  ): Promise<PrismaFreezeRequest> {
    return this.prisma.freezeRequest.create<T>(args);
  }
  async updateFreezeRequest<T extends Prisma.FreezeRequestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreezeRequestUpdateArgs>
  ): Promise<PrismaFreezeRequest> {
    return this.prisma.freezeRequest.update<T>(args);
  }
  async deleteFreezeRequest<T extends Prisma.FreezeRequestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FreezeRequestDeleteArgs>
  ): Promise<PrismaFreezeRequest> {
    return this.prisma.freezeRequest.delete(args);
  }
}
