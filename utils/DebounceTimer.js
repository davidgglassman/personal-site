export class DebounceTimer {
  constructor(callback, delay) {
    this.timerId = null;
    this.callback = callback;
    this.delay = delay;
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setTimeout(this.callback, this.delay);
    }
  }

  stop() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  restart() {
    this.stop();
    this.start();
  }
}
