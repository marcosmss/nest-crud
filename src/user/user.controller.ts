import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findMany();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.findFirst(+id);
    if (!user?.data) {
      throw new NotFoundException(`User with id ${id} does not exist.`);
    }
    return user;
  }

  @Post()
  async createUser(@Body() data: UserDTO) {
    return await this.userService.create({ data });
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: UserDTO) {
    return await this.userService.update(+id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.delete(+id);
  }
}
