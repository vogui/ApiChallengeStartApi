const fetch = require('node-fetch')

const request = async (url, acc = []) => {
    if (url) {
      const as = await fetch(url).then((response) => response.json());
      if (as.results || as.next) {
        acc = [...acc, as.results];
        return request(as.next, acc);
      }
    }
    return acc.flat();
  };

  module.exports = request