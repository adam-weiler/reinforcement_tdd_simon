const echo = (word) => {
    return word;
}

const shout = (word) => {
    return word.toUpperCase();
}

const repeat = (word, count) => {
    return `${word} `.repeat(count - 1) + word;
}

const startOfWord = (word, letters) => {
    return word.substring(0, letters);
}

const firstWord = (word) => {
    return word.split(' ')[0];
}

module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};
