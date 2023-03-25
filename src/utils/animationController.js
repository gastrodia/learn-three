export class AnimationController {
    constructor(callback, fps, immediate = false) {
        this.interval = 1000 / fps;
        this.then = Date.now();
        this.callback = callback;
        this.loop = this.loop.bind(this);
        this.requestId = null;
        this.paused = false;
        if (immediate) {
            this.callback();
        }
        this.loop();
    }

    loop() {
        if (this.paused) return;
        this.clear()
        this.requestId = requestAnimationFrame(this.loop);

        const now = Date.now();
        const elapsed = now - this.then;

        if (elapsed > this.interval) {
            this.then = now - (elapsed % this.interval);
            this.callback();
        }
    }

    clear() {
        cancelAnimationFrame(this.requestId)
    }

    pause() {
        this.paused = true;
        this.clear()
    }

    resume() {
        if (this.paused) {
            this.paused = false;
            this.loop();
        }
    }
}
