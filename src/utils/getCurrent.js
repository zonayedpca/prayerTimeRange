import { getMilliseconds } from './getMilliseconds';
import { amPm } from './amPm';

export const getCurrent = (today, tomorrow) => {
  let currentPrayer;
  let todayMS = {},
  tomorrowMS = {};
  const timeNow = Date.now();
  Object.keys(today).forEach(prayer => {
    todayMS[prayer] = {
      prayer,
      timeActual: today[prayer],
      time: getMilliseconds(today[prayer])
    };
    tomorrowMS[prayer] = {
      prayer,
      timeActual: tomorrow[prayer],
      time: getMilliseconds(today[prayer])
    };
  })
  let startActual, endActual, start, end, hourDiff, minutesDiff;
  const timeDiff = new Date();
  // Object.keys(todayMS).map(prayer => {
  for(let prayer in todayMS) {
    if(prayer === 'Fajr' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Sunrise'].time) {
      start = amPm(`${(new Date(todayMS[prayer].time).getHours())}:${(new Date(todayMS[prayer].time).getMinutes())}`);
      end = new Date(todayMS['Sunrise'].time);
      end = amPm(`${end.getHours()}:${end.getMinutes()}`);
      currentPrayer =  {
        prayer,
        start,
        end
      }
      break;
    } else if(prayer === 'Dhuhr' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Asr'].time) {
      start = amPm(`${(new Date(todayMS[prayer].time).getHours())}:${(new Date(todayMS[prayer].time).getMinutes())}`);
      end = new Date(todayMS['Asr'].time);
      end = amPm(`${end.getHours()}:${end.getMinutes()}`);
      currentPrayer =  {
        prayer,
        start,
        end
      }
      break;
    } else if(prayer === 'Asr' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Sunset'].time) {
      start = amPm(`${(new Date(todayMS[prayer].time).getHours())}:${(new Date(todayMS[prayer].time).getMinutes())}`);
      end = new Date(todayMS['Sunset'].time);
      end = amPm(`${end.getHours()}:${end.getMinutes()}`);
      currentPrayer =  {
        prayer,
        start,
        end
      }
      break;
    } else if(prayer === 'Maghrib' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Isha'].time) {
      start = amPm(`${(new Date(todayMS[prayer].time).getHours())}:${(new Date(todayMS[prayer].time).getMinutes())}`);
      end = new Date(todayMS['Isha'].time);
      end = amPm(`${end.getHours()}:${end.getMinutes()}`);
      currentPrayer =  {
        prayer,
        start,
        end
      }
      break;
    } else if(prayer === 'Isha'&& timeNow >= todayMS[prayer].time && timeNow < tomorrowMS['Midnight'].time + (24 * 60 * 60 * 1000)) {
      startActual = todayMS[prayer].time;
      endActual = tomorrowMS['Midnight'].time + (24 * 60 * 60 * 1000);
      start = new Date(startActual);
      hourDiff = 24 - new Date(timeNow).getHours();
      start = amPm(`${(start.getHours())}:${(start.getMinutes())}`);
      end = new Date(endActual);
      hourDiff += end.getHours();
      minutesDiff = end.getMinutes() - new Date(timeNow).getMinutes();
      end = amPm(`${end.getHours()}:${end.getMinutes()}`);
      timeDiff.setHours(hourDiff);
      timeDiff.setMinutes(minutesDiff);
      currentPrayer =  {
        prayer,
        timeDiff,
        start,
        end
      }
      break;
    } else {
      currentPrayer =  {
        prayer: '00:00',
        start: '00:00',
        end: '00:00'
      }
    }
  }
  return currentPrayer;
}
