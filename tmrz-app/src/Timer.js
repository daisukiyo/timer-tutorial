class Timer {
    // the "name" property is passed into the constructor and the class is initialized
    constructor(name) {
        // setting the default values for each property
        this.name = name;
        this.time = 0;
        this.isRunning = false;
    }
}

export default Timer