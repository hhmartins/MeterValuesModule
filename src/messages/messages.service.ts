import { Injectable } from '@nestjs/common';
import { Console } from 'console';
import { BootNotification } from './dto/BootNotification.dto';
import { HeartBeat } from './dto/HeartBeat.dto';
import { MeterValue } from './dto/MeterValue.dto';
import { StartTransaction } from './dto/StartTransaction.dto';
import { StatusNotification } from './dto/StatusNotification.dto';
import { StopTransaction } from './dto/StopTransaction.dto';
import { measurand, unit } from './enumSampledValue';

@Injectable()
export class MessagesService {
  stopTransaction(stoptransactiondto: StopTransaction) {
    throw new Error('Method not implemented.');
  }


  statusNotification(statusnotificationdto: StatusNotification) {
    throw new Error('Method not implemented.');
  }


  startTransaction(starttransactiondto: StartTransaction) {
    throw new Error('Method not implemented.');
  }


  meterValue(metervaluedto: MeterValue) {
    var jsonDataObj = {
      charger_id: metervaluedto.charger_id,
      connector_id: metervaluedto.connector_id,
      transaction_id: metervaluedto.transaction_id,
      meter_value: {
      }
    }
    metervaluedto.meter_value.forEach((item) => {
      jsonDataObj["timestamp"] = item.timestamp;
      item["sampledValue"].forEach((item2) => {
        //corrente
        if ((item2.unit === unit.A) || (item2.measurand === measurand.CurrentImport)) {
          if (item2.phase) {
            jsonDataObj.meter_value["CorrenteA" + item2.phase] = item2.value;
          } else {
            jsonDataObj.meter_value["CorrenteA"] = item2.value;
          }
        }
        //energia
        if ((item2.unit === (unit.Wh || unit.kWh || unit.varh || unit.kvarh)) || (item2.measurand === measurand.EnergyActiveImportRegister)) {
          jsonDataObj.meter_value["EnergiaUnidade"] = item2.unit;
          jsonDataObj.meter_value["RegistradorEnergia"] = item2.value;

        }
        //potencia
        if ((item2.unit === (unit.W || unit.kW || unit.VA || unit.kVA || unit.var || unit.kvar)) || (item2.measurand === measurand.PowerActiveImport)) {
          jsonDataObj.meter_value["PotenciaUnidade"] = item2.unit;
          jsonDataObj.meter_value["Potencia"] = item2.value;
        }

        //Soc
        if ((item2.unit === (unit.Percent)) || (item2.measurand === measurand.SoC)) {
          jsonDataObj.meter_value["SocAtual"] = item2.value;
        }

        //Tensao
        if ((item2.unit === (unit.V)) || (item2.measurand === measurand.Voltage)) {
          jsonDataObj.meter_value["TensaoV"] = item2.value;
        }

        //Frequencia
        if ((item2.unit === (unit.Hertz)) || (item2.measurand === measurand.Frequency)) {
          jsonDataObj.meter_value["FrequenciaHZ"] = item2.value;
        }

        //TEmperatura
        if ((item2.unit === (unit.Celcius || unit.Celsius || unit.Fahrenheit || unit.K)) || (item2.measurand === measurand.Temperature)) {
          jsonDataObj.meter_value["TemperaturaUnidade"] = item2.unit;
          jsonDataObj.meter_value["Temperatura"] = item2.value;
        }
      })
      console.log(jsonDataObj);  //AQUI SALVA NO BANCO
    })
    
  }


  heartBeat(heartbeatdto: HeartBeat) {
    throw new Error('Method not implemented.');
  }


  bootNotification(bootNotificationDto: BootNotification) {
    console.log(bootNotificationDto);
    return 'ok';
  }
}
