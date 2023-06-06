const args = process.argv.slice(2);

const alarmTimer = (arrayOfTimes) => {
  arrayOfTimes = arrayOfTimes.filter(input =>  !(isNaN(input)));
  for (const alarmTime of arrayOfTimes) {
    if (alarmTime > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarmTime * 1000);
    }
  }
};

alarmTimer(args);