import { TagModule } from './../tag/tag.module';
import { LoggerModule } from './../logger/logger.module';
import { BookmarksModule } from './../bookmarks/bookmarks.module';
import { BookmarksService } from './../bookmarks/bookmarks.service';
import { MarkGateway } from './mark.gateway';
import { UsersModule } from './../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkSchema } from './mark.schema';
import { MarksController } from './marks.controller';
import { PassportModule } from '@nestjs/passport';
import { Module, forwardRef } from '@nestjs/common';
import { MarksService } from './marks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Mark', schema: MarkSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    UsersModule,
    LoggerModule,
    forwardRef(() => TagModule),
    forwardRef(() => BookmarksModule)
  ],
  exports: [MarksService],
  providers: [MarksService, MarkGateway],
  controllers: [MarksController]
})
export class MarksModule {}
