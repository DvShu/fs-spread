/**
 * Created by Tenny on 2018/12/11 15:59.
 */
const rm = require('./lib/rm_promise');
const p = require('path');
const fs = require('fs');

/**
 * 删除目录, 包含目录下所有的文件一起静默删除
 * @param path {String|Array|Set} 需要删除的目录
 * @return Promise
 */
function rmdirs(path) {
  if (typeof path === 'string') {
    return rm(path);
  } else if (path instanceof Array) {
    return Promise.all(path.map(p => {
      return rm(p);
    }));
  } else if (path instanceof Set) {
    let ps = [];
    for (let i of path) {
      ps.push(rm(i));
    }
    return Promise.all(ps);
  } else {
    return Promise.reject('path must be [String|Array|Set]');
  }
}

/**
 * 遍历文件夹
 * @param path  遍历目录
 * @param cb    遍历到每个文件后的回调
 */
function listFiles(path, cb = () => {}) {
  fs.stat(path, (err, stat) => {
    if(err) {
      console.error(err);
    } else {
      if(stat.isFile()) { // 是文件
        cb(path);
      } else {
        // 读取目录下的所有文件
        fs.readdir(path, (err, files) => {
          if(err) {
            console.error(err);
          } else {
            files.forEach(function(f) {
              listFiles(p.join(path, f), cb);
            });
          }
        });
      }
    }
  });
}

module.exports = {

  rmdirs,

  listFiles
};
