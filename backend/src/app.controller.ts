import { ConflictException, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) { 
      throw new ConflictException('Please upload a file!')
    }
    const multerText = Buffer.from(file.buffer).toString("utf-8"); 
    return this.appService.processFile(multerText)

  }
}
