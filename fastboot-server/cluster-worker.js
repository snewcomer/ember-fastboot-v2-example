'use strict';

const ClusterWorker = require('ember-alt-fastboot-app-server/src/backing-classes/cluster-worker');

class CLIClusterWorker extends ClusterWorker {}

const worker = new CLIClusterWorker();

// Add in hi middleware.
require('./middlewares/hi')(worker);

worker.start();


