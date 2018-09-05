// 代码参考  http://gitlab.alipay-inc.com/bigfish/bigfish-antdpro-adapter

const executeRule = require('./executeRule');

const rules = [
  // copy 代码
  {
    pattern: '!(dist|node_modules|tool|.git|.gitlab-ci.yml)',
    operation: 'cp',
    target: 'dist/',
  },
  // 修改代码从 umi 到 bigfish
  {
    pattern: 'dist/package.json',
    operation: 'modify',
    ops: [{
      match: '"umi": "^2.0.0",',
      replace: '"@alipay/bigfish": "^2.0.0",'
    }, {
      match: `,
    "umi-plugin-react": "^1.0.0"`,
      replace: ''
    }, {
      match: /umi/g,
      replace: 'bigfish',
    }],
  },
  // 修改配置
  {
    pattern: 'dist/config/config.js',
    operation: 'modify',
    ops: [{
      match: `
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      },
    }],
  ],`,
      replace: `
  locale: {
    enable: true,
  },`,
    }],
  },
  // 修改组件中的依赖路径
  {
    pattern: 'dist/src/**/*.js',
    operation: 'modify',
    ops: [{
      match: '\'react\'',
      replace: '\'@alipay/bigfish/react\'',
    }, {
      match: '\'dva\'',
      replace: '\'@alipay/bigfish/sdk\'',
    }, {
      match: /'antd/g,
      replace: '\'@alipay/bigfish/antd',
    }, {
      match: '\'classnames\'',
      replace: '\'@alipay/bigfish/util/classnames\'',
    }, {
      match: 'import { routerRedux } from \'dva/router\'',
      replace: 'import history from \'@alipay/bigfish/sdk/history\';',
    }, {
      match: '\'dva/router\'',
      replace: '\'@alipay/bigfish/sdk/router\'',
    }, {
      match: '\'prop-types\'',
      replace: '\'@alipay/bigfish/util/prop-types\'',
    }, {
      match: '\'umi/locale\'',
      replace: '\'@alipay/bigfish/locale\'',
    }, {
      match: 'import Link from \'umi/link\';',
      replace: 'import { Link } from \'@alipay/bigfish/sdk/router\';',
    }]
  }
]

rules.forEach((rule) => {
  executeRule(rule, true);
});

console.log('done');
process.exit(0);
