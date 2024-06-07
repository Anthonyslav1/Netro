/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Complaint as PrismaComplaint } from "@prisma/client";

export class ComplaintServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ComplaintCountArgs, "select">
  ): Promise<number> {
    return this.prisma.complaint.count(args);
  }

  async complaints<T extends Prisma.ComplaintFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintFindManyArgs>
  ): Promise<PrismaComplaint[]> {
    return this.prisma.complaint.findMany<Prisma.ComplaintFindManyArgs>(args);
  }
  async complaint<T extends Prisma.ComplaintFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintFindUniqueArgs>
  ): Promise<PrismaComplaint | null> {
    return this.prisma.complaint.findUnique(args);
  }
  async createComplaint<T extends Prisma.ComplaintCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintCreateArgs>
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.create<T>(args);
  }
  async updateComplaint<T extends Prisma.ComplaintUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintUpdateArgs>
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.update<T>(args);
  }
  async deleteComplaint<T extends Prisma.ComplaintDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComplaintDeleteArgs>
  ): Promise<PrismaComplaint> {
    return this.prisma.complaint.delete(args);
  }
}