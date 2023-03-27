import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    const users = await this.prisma.client.user.findMany();
    return { data: users };
  }

  async findFirst(id: number) {
    const user = await this.prisma.client.user.findFirst({ where: { id } });
    return { data: user };
  }

  async create(data: Prisma.UserCreateArgs) {
    return await this.prisma.client.user.create(data);
  }

  async update(id: number, data: any) {
    return await this.prisma.client.user.update({ data, where: { id } });
  }

  async delete(id: number) {
    return await this.prisma.client.user.delete({ where: { id } });
  }
}
