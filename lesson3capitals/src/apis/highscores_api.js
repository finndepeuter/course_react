class HighscoresApi  {

    constructor() {
        this.scores = [];

        if (localStorage.scores) {
            this.scores = JSON.parse(localStorage.scores);
        } else {
            this.scores = [ { player: "Fred", score: 5 },
                { player: "Dorien", score: 4 },
                { player: "Paul", score: 3 },
                { player: "Els", score: 2 },
                { player: "Wout", score: 1 }];
            localStorage.scores = JSON.stringify(this.scores);
        }
    }

    count() {
        return this.scores.length;
    }

    all() {
        return this.scores;
    }

    add(name, score) {
        // TODO: fix the adding of a new highscore
        this.scores.add({player: name, score: score});
    }
}

export default HighscoresApi;
