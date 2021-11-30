import { formatDistance, parseISO, intervalToDuration , compareAsc, isAfter} from 'date-fns';

export function timeInSeconds(date){
    let res = 0;
    const timeObject = intervalToDuration({
    start: parseISO(date),
    end: Date.now()
    });
    res = res + timeObject.years * 31556926;

    res = res + timeObject.months * 2629744;

    res = res + timeObject.days * 86400;

    res = res + timeObject.hours * 3600;

    res = res + timeObject.minutes * 60;

    res = res + timeObject.seconds;

    // if(compareAsc(parseISO(date), Date.now())){
    //     return res * -1;
    // }
    return res;
}

export function isFirstAfterSecondDate(first_date, second_date){
    return isAfter(parseISO(first_date), parseISO(second_date))
}