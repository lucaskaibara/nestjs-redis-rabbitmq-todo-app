import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('')
  createTask(@Body() task: TaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param() id: string, @Body() task: TaskDto) {
    return this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param() id: string) {
    return this.tasksService.deleteTask(id);
  }
}
