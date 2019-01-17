import { preZero } from './preZero';

export const amPm = (time) => {
    const splittedTime = time.split(':');
    const hour = splittedTime[0];
    const get12Format = splittedTime[0] % 12;
    // if(get12Format === 0)
    //   return hour < 12 ? `12:${splittedTime[1]} AM` : `12:${splittedTime[1]} PM`;
    //
    // return hour < 12 ? `${get12Format}:${splittedTime[1]} AM` : `${get12Format}:${splittedTime[1]} PM`;
    return (get12Format === 0 ? (hour < 12 ? `12:${preZero(splittedTime[1])} AM` : `12:${preZero(splittedTime[1])} PM`) : (hour < 12 ? `${preZero(get12Format)}:${preZero(splittedTime[1])} AM` : `${preZero(get12Format)}:${preZero(splittedTime[1])} PM`))
}
