import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get lines() {
    return Array(10000).fill().map((_, i) => i)
  }
}
