# fs-spread
对于 `nodejs` 的 `fs` 模块进行了扩展。
## 使用
### 1. 安装
```nodejs
yarn add fs-spread
```
### 2. 使用
```nodejs
const fs2 = require('fs-spread');

fs2.rmdirs();
```
函数说明：
#### rmdirs(path) - *Promise*
删除目录，以及目录下的所有的子文件和文件夹。
* path：*String|Array|Set*，删除的目录地址
#### listFiles(path, cb) - *Void*
遍历目录下的所有的文件
* path：*String*，遍历的目录地址
* cb(filePath)：*function*，遍历到文件后的回调函数
