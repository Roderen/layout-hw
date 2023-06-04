const sync = require('browser-sync');

module.exports = function browserSyncZ() {
  sync.init({
    server: {
      baseDir: 'src/'
    }
  });
}