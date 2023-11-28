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
        // Add a new score object to the list
        const newScore = { player: name, score: score };
        this.scores.push(newScore);

        // Sort the scores based on the score property in descending order
        this.scores.sort((a, b) => b.score - a.score);

        // Save the updated scores to localStorage
        localStorage.scores = JSON.stringify(this.scores);
    }
}

export default HighscoresApi;
