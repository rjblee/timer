const alarm = process.argv.slice(2);

for (let time in alarm) {
  setTimeout(function() 
  {process.stdout.write('\x07')}, time * 1000)
};