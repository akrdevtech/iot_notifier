const crypto = require('crypto');
const { encryption: { algorithm, password } } = require('../configs')

module.exports = {
  encryptData: (data) => {
    try {
      const key = crypto.scryptSync(password, 'salt', 24);
      const iv = Buffer.alloc(16, 0);

      const cipher = crypto.createCipheriv(algorithm, key, iv);

      let encrypted = cipher.update(data, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      return Promise.resolve(encrypted);
    } catch (error) {
      return Promise.reject(error);
    }

  },

  decryptData: (data) => {
    try {
      const key = crypto.scryptSync(password, 'salt', 24);
      const iv = Buffer.alloc(16, 0);

      const decipher = crypto.createDecipheriv(algorithm, key, iv);

      let decrypted = decipher.update(data, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return Promise.resolve(decrypted);
    } catch (error) {
      return Promise.reject(error);
    }
  },

  /**
   * @description Util to create a random token
   * @param {Number} bytes twice the number of characters required for the token
   * @returns {String} a random token string
   */
  generateRandomToken: (bytes = 32) => {
    try {
      return crypto.randomBytes(bytes).toString('hex');
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
