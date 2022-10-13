import { Injectable } from '@nestjs/common';
import { BootNotification } from './dto/BootNotification.dto';

@Injectable()
export class MessagesService {
    bootNotification(bootNotificationDto: BootNotification) {
        console.log(bootNotificationDto);
        return 'ok';
    }
}
