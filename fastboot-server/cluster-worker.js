'use strict';

// in v2, we expose the worker to the end user, allowing for a public API to add middleware, provide your own http server
const ClusterWorker = require('ember-alt-fastboot-app-server/src/backing-classes/cluster-worker');

class CLIClusterWorker extends ClusterWorker {}

const worker = new CLIClusterWorker();

// Add 'hi' middleware.
require('./middlewares/hi')(worker);

worker.start();

