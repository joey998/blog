const { program } = require('commander');

// 通过绑定处理函数实现命令（这里的指令描述为放在`.command`中）
// 返回新生成的命令（即该子命令）以供继续配置
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called', source, destination);
  });

// 通过独立的的可执行文件实现命令 (注意这里指令描述是作为`.command`的第二个参数)
// 返回最顶层的命令以供继续添加子命令
program
  .command('start <service>', './start.sh', { executableFile: 'myUpdateSubCommand' })
// .command('stop [service]', 'stop named service, or all if no name supplied');
// .helpOption(false, 'read more information');

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
