import { UPDATE_COUNTDOWN } from '../constants';

export const updateCountdown = message => {
  return {
    type: UPDATE_COUNTDOWN,
    message,
  }
};

export const startListeningToCountdown = () => {
  const defaultTripTime = Date.now() + 1000 * 60 * 10;
  return dispatch => {
    const calculateTimeLeft = () => {
      const distance = defaultTripTime - Date.now();
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return `in ${minutes} minute(s) and ${seconds} second(s)`;
    };

    const updateTime = () => {
      dispatch(updateCountdown(calculateTimeLeft()));
    }

    setInterval(updateTime, 100);
  }
}
