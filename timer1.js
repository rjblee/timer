const alarm = process.argv.slice(2);

for (let time of alarm) {
  if (time > 0) {
    setTimeout(function() 
    {process.stdout.write('\x07')}, time * 1000)
  }
};