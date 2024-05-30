const { program } = require('commander');


let op1 = program.option('-s --search', 'search')
// 通过绑定处理函数实现命令（这里的指令描述为放在`.command`中）
// 返回新生成的命令（即该子命令）以供继续配置
let a = program
  .command('clone <source> [destination]');

a.description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called', source, destination);
  })
  .hook('postAction', (a, b) => {
    console.log('postAction', a === b);
  })
  .hook('preAction', (a, b) => {
    console.log('preAction', a === b);
  });

let c = program
  .command('cloneC <source> [destination]')
  .command('cloneCAfter <source> [destination]')

c.description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called', source, destination);
  })
  .hook('postAction', (a, b) => {
    console.log('postAction', a === b);
  })
  .hook('preAction', (a, b) => {
    console.log('preAction', a === b);
  });

let isAEqualC = a === c


// 通过独立的的可执行文件实现命令 (注意这里指令描述是作为`.command`的第二个参数)
// 返回最顶层的命令以供继续添加子命令
let b = program
  .command('start <service>', 'start service', { executableFile: 'myUpdateSubCommand' })
  .command('stop [service]', 'stop named service, or all if no name supplied');

b.helpOption('-e, --HELP', 'read more information');


program.addHelpCommand('start [command]', 'show assistance');

// program
//   .version('0.1.0')
//   .argument('<username>', 'user to login')
//   .argument('[password]', 'password for user, if required', 'no password given')
//   .action((username, password) => {
//     console.log('username:', username);
//     console.log('password:', password);
//   });

// 分别装配命令
// 返回最顶层的命令以供继续添加子命令
// program
//   .addCommand(build.makeBuildCommand());

program.parse();
let m = 12
console.log(m);
