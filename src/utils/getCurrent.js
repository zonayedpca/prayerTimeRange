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
  for(let prayer in todayMS) {
    if(prayer === 'Fajr' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Sunrise'].time) {
      startActual = todayMS[prayer].time;
      endActual = todayMS['Sunrise'].time;
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
    } else if(prayer === 'Dhuhr' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Asr'].time) {
      startActual = todayMS[prayer].time;
      endActual = todayMS['Asr'].time;
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
    } else if(prayer === 'Asr' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Sunset'].time) {
      startActual = todayMS[prayer].time;
      endActual = todayMS['Sunset'].time;
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
    } else if(prayer === 'Maghrib' && timeNow >= todayMS[prayer].time && timeNow < todayMS['Isha'].time) {
      startActual = todayMS[prayer].time;
      endActual = todayMS['Isha'].time;
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
        prayer: null,
        timeDiff: null,
        start: null,
        end: null
      }
    }
  }
  return currentPrayer;
}
