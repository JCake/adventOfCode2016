class Code {

    
    codeFrom(fullMessage){
        const frequencies = this.findLetterFrequencies(fullMessage);
        return this.codeFromFrequencies(frequencies);
    }

    codeFromFrequencies(wordFrequencies){
        const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let decodedMessage = '';
        wordFrequencies.forEach((characterFrequency) => {
            let maxFrequency = 0;
            let mostFrequencyChar = '';
            alphabet.forEach((letter) => {
                if(characterFrequency[letter] > maxFrequency){
                    mostFrequencyChar = letter;
                    maxFrequency = characterFrequency[letter];
                }
            });
            decodedMessage += mostFrequencyChar;
        });

        return decodedMessage;
    }

    altCodeFrom(fullMessage){
        const frequencies = this.findLetterFrequencies(fullMessage);
        return this.altCodeFromFrequencies(frequencies);
    }

    altCodeFromFrequencies(wordFrequencies){
        const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let decodedMessage = '';
        wordFrequencies.forEach((characterFrequency) => {
            let minFrequency = 1000;
            let leastFrequencyChar = '';
            alphabet.forEach((letter) => {
                if(characterFrequency[letter] < minFrequency){
                    leastFrequencyChar = letter;
                    minFrequency = characterFrequency[letter];
                }
            });
            decodedMessage += leastFrequencyChar;
        });

        return decodedMessage;
    }

    findLetterFrequencies(fullMessage){
        const messages = fullMessage.split('\n');
        const wordFrequencies = [];
        for(let i = 0; i < messages[0].length; i++){
            wordFrequencies.push({});
        }

        for(let mesi = 0; mesi < messages.length; mesi++){
            const message = messages[mesi];
            for(let chi = 0; chi < message.length; chi++){
                const character = message[chi];
                if(!wordFrequencies[chi][character]){
                    wordFrequencies[chi][character] = 0;
                }
                wordFrequencies[chi][character] = wordFrequencies[chi][character] + 1;
            }
        }

        return wordFrequencies;
    }
    
}