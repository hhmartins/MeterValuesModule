import { sampleValue } from "./SampledValue.dto";

export class MeterValue{
    charger_id!: string;
    connector_id!: number;
    transaction_id!: number;
    meter_value: {
        [key: string]: sampleValue[];
        timestamp: any[];
    }[];
}

