import Application from 'debug-launch-darkly-fastboot/app';
import config from 'debug-launch-darkly-fastboot/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
