import moment from 'moment';

export const GOAL_ETH = 2690;

export const START_DATE = moment.utc('2020-10-05 07');

export const PHASE_1_END_DURATION = moment.duration('24:00');
export const PHASE_1_END_DATE = START_DATE.clone().add(PHASE_1_END_DURATION);
