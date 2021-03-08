import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemSchema } from './schemas/item.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerService } from '../logger/logger.service';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
    LoggerModule,
  ],
  controllers: [ItemsController],
  providers: [ItemsService, LoggerService],
})
export class ItemsModule {}
