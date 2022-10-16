import { context, format, measurand, phase, svlocation, unit } from "../enumSampledValue";

export class sampleValue{
    unit?: unit;
    context!:context;
    format?:format;
    location?:svlocation;
    phase?:phase;
    value!:string;
    measurand?:measurand;
}