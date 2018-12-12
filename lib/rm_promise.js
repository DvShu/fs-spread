/**
 * Created by Tenny on 2018/12/11 16:06.
 */
const { exec } = require('child_process');

module.exports = function(path) {
  return new Promise((resolve, reject) => {
    let deleteCmd = process.platform === 'win32' ? 'rd /s/q' : 'rm -rf';
    exec(`${deleteCmd} ${path}`, function(error, stdout, stderr) {
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
