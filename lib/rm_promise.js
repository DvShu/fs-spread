/**
 * Created by Tenny on 2018/12/11 16:06.
 */
const { exec } = require('child_process');

// 使用系统命令进行文件夹删除
const RM_CMD = {
  win32: 'rd /s/q',
  linux: 'rm -rf'
};

module.exports = function(path) {
  return new Promise((resolve, reject) => {
    exec(`${RM_CMD[process.platform]} ${path}`, function(error, stdout, stderr) {
      if (error) {
        reject(error);
      } else {
        if (stderr) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      }
    });
  });
};
