import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class HiRoute extends Route {
  @service launchDarkly;
  @service fastboot
  model() {
    if (!this.fastboot.isFastboot) {
      let user = {
        key: 'aa0ceb',
        anonymous: true
      };

      return this.launchDarkly.initialize(user);
    }

  }
}
