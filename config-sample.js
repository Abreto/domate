
exports.debug = 0;

exports.http = {
  hostname: '127.0.0.1',
  port:     2017
};

exports.redis = {
  port: 6397,
  host: '127.0.0.1',
  family: 4,          /* 4 (IPv4) or 6 (IPv6) */
  password: 'auth',
  db: 0
};
