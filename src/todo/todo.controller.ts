import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from '../auth/auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { UserEmail } from 'src/common/decorators/user-email.decorator';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:`To add a new task wrt user email`,summary : `Add a new task`})
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto , @UserEmail()
  userEmail:string) {
    console.log("output")
    return await this.todoService.create(createTodoDto , userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:`To get all the user tasks`,summary : `To get all the user tasks`})
  @Get()
  async findAll(@UserEmail()
  userEmail : string) {
    console.log(userEmail)
    return await this.todoService.findAll(userEmail);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:`To get a specific user task`,summary : `To get a specific user task`})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:`To update the specific user task`,summary : `To update the specific user task`})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({description:`To delete the specific user task`,summary : `To delete the specific user task`})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
