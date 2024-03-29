import { Body, Controller, Param, Get, Put, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { user } from './schema/user.schema';
import { userDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<user[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<user> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() userDto: userDto): Promise<user> {
    return this.userService.create(userDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: userDto): Promise<user> {
    return this.userService.update(id, userDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
