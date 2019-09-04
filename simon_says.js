const echo = (word) => {
    return word;
}

const shout = (phrase) => {
    return phrase.toUpperCase();
}

const repeat = (word, count) => {
//     repeatedWord = '';
//     for (let x = 0; x < count; x++) {
//         repeatedWord += `${word} `; 
//     }
//     return repeatedWord;
}

const startOfWord = (word, letters) => {
    return word.substring(0, letters);
}

const firstWord = () => {
    
}



module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
