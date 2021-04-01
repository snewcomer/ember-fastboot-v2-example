import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service fastboot;

  get lines() {
    let data = Array(10000).fill().map((_, i) => i)

    if (this.fastboot.isFastBoot) {
      this.fastboot.shoebox.put('list-data', data);
    }

    return data;
  }
}
