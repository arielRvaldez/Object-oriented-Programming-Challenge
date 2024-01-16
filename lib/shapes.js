class shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

class Square extends shape {
    render() {
        return `<rect x="50" y="0" width="100%" height="100%" fill="${this.color}"/>`;
    }
}

class Triangle extends shape {
    render() {
        return `<polygon height="100% width="100%" points="0,200 300, 150,0" fill="${this.color}"/>`;
    }
};

module.exports = {Circle, Square, Triangle};