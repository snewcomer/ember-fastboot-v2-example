'use strict';

class Hi {
  middleware(req, res) {
    res.send({ ok: 'hi' });
  }
}

module.exports = function(worker) {
  const hi = new Hi(worker);

  worker.addMiddleware({
    name: 'hi',
    value: {
      method: 'GET',
      path: '/hi',
      callback: hi.middleware.bind(hi)
    },
    before: ['fastboot', 'static-serve']
  })
}

