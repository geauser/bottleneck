const _    = require('lodash');
const fs   = require('fs-jetpack');


/**
 * Object structure of the `options` object used
 * by @see objectExport
 *
 * @typedef {Object} Options
 * @property {String|String[]} matching
 * @property {String} cwd
 * @property {Function} [onRename=(name) => name]
 */

module.exports = {

  /**
   * Return an object containing with a structure
   * key:value with `key` being the exported file
   * given name and `value` the result of the `require`
   * operation on that exported file.
   *
   * @param {Options}
   * @returns {Object}
   */
  objectExport(options) {

    const {
      matching,
      cwd,
      onRename = (name) => name,
    } = options;

    const entities = {};

    fs.cwd(cwd).find({ matching }).forEach(diskFileName => {
      const fileId         = diskFileName.split('.')[0];
      const entityName     = onRename(fileId);
      entities[entityName] = require(`${cwd}/${diskFileName}`);
    });

    return entities;
  },

};
