export const game = {
    letters: [],
    word: '',
    streak: 0,
    error: false,
    newGame: function () {
        this.letters = [];

        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        
        this.letters = new Array(3).fill().map(function(letter) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            return alphabet[randomIndex];
        });

        this.word = '';
        this.error = false;
        this.streak = 0;
    },
    validateWord: function(word){
        for(let i = 0; i < this.letters.length; i++){
            if(!word.includes(this.letters[i])){
                this.error = true;
                return false;
            }
        }

        this.streak++;
        return true;
    }

}