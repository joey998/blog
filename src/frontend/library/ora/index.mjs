import ora from 'ora';

const spinner = ora('Loading unicorns').start();

async function changeColor() {
  await new Promise(resolve => {
    setTimeout(() => {
      spinner.color = 'yellow';
      spinner.text = 'Loading rainbows';
      resolve()
    }, 1000);
  })

  new Promise(resolve => {
    setTimeout(() => {
      spinner.stop();
      resolve()
    }, 1000);
  })

}

changeColor();
