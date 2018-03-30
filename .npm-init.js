const desc = prompt('项目描述?', '...')
const name = prompt('项目名称?', process.cwd().split('/').pop())
const version = prompt('项目版本?', '0.1.0')
const repositoryType = prompt('版本控制类型?', 'git')
const repositoryUrl = prompt('远程url?', '')

module.exports = {
  name: name,
  version: version,
  description: desc,
  main: 'index.js',
  bin : {

  },
  scripts : {
    "dev" : "npm run dev",
    "build" : "npm run build",
    "test" : "test/index.js",
    "clean": "rimraf dist/* && rimraf *.log"
  },
  repository: {
    "type": "git",
    "url": repositoryUrl
  },
  bugs : {
    url : ''
  },
  keywords:[
    "SealUI"
  ],
  author : {
    name : "听着情歌流泪",
    email : 'develop@lingtal.com',
    url: "http://sealui.com"
  },
  homepage : "sealui.com",
  license : "MIT",
  engines : {
    "node": ">=6.5.0"
  },
  devDependencies : {
    "rimraf": "^2.5.4",
    "cp-cli": "^1.0.2",
    "cross-env": "^3.1.3"
  }
}
