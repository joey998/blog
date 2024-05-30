const { exec } = require('child_process');

exec('cd ../ && ls', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});