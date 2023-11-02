import {DateTime,Zone} from 'luxon'



const formatToLocalTime = (
  secs: number,
  zone: Zone | string,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a" 
) => DateTime.fromSeconds(secs).setZone(zone/60).toFormat(format);


const formatCurentTime =(zone: string | Zone, format: string)=> {

  return DateTime.now().setZone(zone/60).toFormat(format)
}


export  {formatToLocalTime, formatCurentTime}