import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
    constructor(@Inject('TASKS_SERVICE') private rabbitClient: ClientProxy) {}

    createTask(task: TaskDto) {
        this.rabbitClient.emit('task-created', task);
        return { message: 'Task Created' };
    }
    
    updateTask(id: string, task: TaskDto) {
        this.rabbitClient.emit('task-updated', { id, task });
        return { message: 'Task Updated' };
    }

    deleteTask(id: string) {
        this.rabbitClient.emit('task-deleted', id);
        return { message: 'Task Deleted' };
    }
}
