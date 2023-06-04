const del = require('del');

module.exports = function cleanDistFolder() {
  return del('dist');
}