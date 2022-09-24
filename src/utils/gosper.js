class Gosper {
    constructor(a, b) {
        this._a = a
        this._b = b
        this._turtle = [0, 0, 0]
        this._points = []
        this._count = 0
    }

    genGosper() {
        this._rg(this._a, this._b, this._turtle)
        return this._points
    }

    _rt(x) {
        this._turtle[2] += x
    }

    _lt(x) {
        this._turtle[2] -= x
    }

    _fd(d) {
        this._points.push({
            x: this._turtle[0],
            y: this._turtle[1],
            z: Math.sin(this._count) * 5
        })

        const dir = this._turtle[2] * (Math.PI / 180)
        this._turtle[0] += Math.cos(dir) * d
        this._turtle[1] += Math.sin(dir) * d

        this._points.push({
            x: this._turtle[0],
            y: this._turtle[1],
            z: Math.sin(this._count) * 5
        })
    }

    _rg(st, ln, turtle) {
        st--
        ln = ln / 2.6457
        if (st > 0) {
            this._rg(st, ln, turtle)
            this._rt(60)
            this._gl(st, ln, turtle)
            this._rt(120)
            this._gl(st, ln, turtle)
            this._lt(60)
            this._rg(st, ln, turtle)
            this._lt(120)
            this._rg(st, ln, turtle)
            this._rg(st, ln, turtle)
            this._lt(60)
            this._gl(st, ln, turtle)
            this._rt(60)
            return
        }
        if (st === 0) {
            this._fd(ln)
            this._rt(60)
            this._fd(ln)
            this._rt(120)
            this._fd(ln)
            this._lt(60)
            this._fd(ln)
            this._lt(120)
            this._fd(ln)
            this._fd(ln)
            this._lt(60)
            this._fd(ln)
            this._rt(60)
        }
    }


    _gl(st, ln, turtle) {
        st--
        ln = ln / 2.6457
        if (st > 0) {
            this._lt(60)
            this._rg(st, ln, turtle)
            this._rt(60)
            this._gl(st, ln, turtle)
            this._gl(st, ln, turtle)
            this._rt(120)
            this._gl(st, ln, turtle)
            this._rt(60)
            this._rg(st, ln, turtle)
            this._lt(120)
            this._rg(st, ln, turtle)
            this._lt(60)
            this._gl(st, ln, turtle)
            return
        }
        if (st === 0) {
            this._lt(60)
            this._fd(ln)
            this._rt(60)
            this._fd(ln)
            this._fd(ln)
            this._rt(120)
            this._fd(ln)
            this._rt(60)
            this._fd(ln)
            this._lt(120)
            this._fd(ln)
            this._lt(60)
            this._fd(ln)
        }
    }
}

export default Gosper