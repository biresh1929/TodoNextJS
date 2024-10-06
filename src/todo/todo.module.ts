import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';
import { JwtAuthGuard } from 'src/auth/auth.guard';


@Module({
  imports:[DatabaseModule],
  controllers: [TodoController],
  providers: [TodoService  ],
  exports:[TodoService]
})
export class TodoModule {}
