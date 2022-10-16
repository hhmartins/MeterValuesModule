import { Body, Controller, Post } from '@nestjs/common';
import { BootNotification } from './dto/BootNotification.dto';
import { HeartBeat } from './dto/HeartBeat.dto';
import { MeterValue } from './dto/MeterValue.dto';
import { StartTransaction } from './dto/StartTransaction.dto';
import { StatusNotification } from './dto/StatusNotification.dto';
import { StopTransaction } from './dto/StopTransaction.dto';
import { context } from './enumSampledValue';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(private messagesService: MessagesService){}

    @Post()
    bootNotification(@Body() bootNotificationDto: BootNotification){
        return this.messagesService.bootNotification(bootNotificationDto);
    }
    
    @Post()
    heartBeat(@Body() heartbeatdto: HeartBeat){
        return this.messagesService.heartBeat(heartbeatdto);
    }

    @Post()
    meterValue(@Body() metervaluedto: MeterValue){
        return this.messagesService.meterValue(metervaluedto);
    }

    @Post()
    startTransaction(@Body() starttransactiondto: StartTransaction){
        return this.messagesService.startTransaction(starttransactiondto);
    }

    @Post()
    statusNotification(@Body() statusnotificationdto: StatusNotification){
        return this.messagesService.statusNotification(statusnotificationdto);
    }
    @Post()
    stopTransaction(@Body() stoptransactiondto: StopTransaction){
        return this.messagesService.stopTransaction(stoptransactiondto);
    }
    
    @Post('teste')
    teste(@Body() MV: MeterValue){
      return this.messagesService.meterValue(MV);      
    }
}
