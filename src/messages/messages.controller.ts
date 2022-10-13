import { Body, Controller, Post } from '@nestjs/common';
import { BootNotification } from './dto/BootNotification.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService){}

    @Post()
    bootNotification(@Body() bootNotificationDto: BootNotification){
        return this.messagesService.bootNotification(bootNotificationDto);
      }
    
    @Post('teste')
    teste(@Body() bootNotificationDto: BootNotification){
      // console.log(bootNotificationDto)
      // console.log(typeof(bootNotificationDto))
      // console.log(bootNotificationDto.id)
      // console.log(typeof(bootNotificationDto.id))
      console.log((bootNotificationDto.text))
      console.log(typeof(bootNotificationDto.text))
    }
}
