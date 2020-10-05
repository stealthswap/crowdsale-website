import moment from 'moment';

export const GOAL_WEI = 2690000000000000000000; // IN WEI

export const START_DATE = moment.utc('2020-10-05 23:30');

export const PHASE_1_END_DURATION = moment.duration('72:00');
export const PHASE_1_END_DATE = START_DATE.clone().add(PHASE_1_END_DURATION);
