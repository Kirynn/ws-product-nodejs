const redis = require('redis');

const client = redis.createClient('6379', 'redis');

module.exports = {
    RateLimiter: function(req, res, next) {

        next();
    }
}

