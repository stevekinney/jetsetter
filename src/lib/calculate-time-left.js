const defaultTripTime = Date.now() + 1000 * 60 * 10;

export default () => {
  const distance = defaultTripTime - Date.now();
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return `in ${minutes} minute(s) and ${seconds} second(s)`;
};
