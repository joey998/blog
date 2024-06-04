# package.json 说明

- peerDependencies   
开发插件时候，需要确定是在某个框架的某个版本生效，比如pug-loader的`peerDependencies`里面定义了作用于pug@^2.0.0，但是webpack5里面的`dependencies`里面定义了pug@3.0.3。  
所以当执行`npm i`的时候，会有报错提示，这里意思是项目可能会有风险，可以使用
`npm i --legacy-peer-deps`无视风险安装，表示我们自己知道风险并承担后果