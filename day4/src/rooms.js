class Rooms {

    namesOfRealRooms(input){
        const lines = input.split('\n');
        console.log(`${lines.length} possible rooms`);
        let matchingSectorId = 0;
        lines.forEach((line) => {
            if(this.isReal(line)){
                const sectorId = parseInt(line.match(/\-(\d+)\[/)[1]);
                const encryptNameWords = line.match(/([a-z]+)\-/g);
                console.log(`encrypted name: ${encryptNameWords}`);
                let realName = '';
                encryptNameWords.forEach((encryptNameWord) => {
                    let realWord = '';
                    const encryptChars = encryptNameWord.split('');
                    encryptChars.forEach((encChar) => {
                        realWord += this.shiftCharacter(encChar, sectorId);
                    });
                    realName = `${realName}${realWord}`;
                });
                console.log(`${realName} has sector id ${sectorId}`);
                if(realName==='northpole object storage '){
                    matchingSectorId = sectorId;
                }
                
            }
        });
        return matchingSectorId; // TODO what to return??
    }

    shiftCharacter(encChar, shiftAmount){
        if(encChar === '-'){
            return ' ';
        }
        const charCodeForLowercaseA ='a'.charCodeAt(0);
        let characterCode = encChar.charCodeAt(0);
        let characterIndex = characterCode - charCodeForLowercaseA;
        characterIndex = (characterIndex + shiftAmount) % 26 + charCodeForLowercaseA;
        return String.fromCharCode(characterIndex);
    }

    sumOfRealRoomSectorIds(input){
        const lines = input.split('\n');
        console.log(`${lines.length} possible rooms`);
        let numOfRealRooms = 0;
        let sectorIdSum = 0;
        lines.forEach((line) => {
            if(this.isReal(line)){
                sectorIdSum += parseInt(line.match(/\-(\d+)\[/)[1]);
                numOfRealRooms++;
            }
        });
        console.log(`${numOfRealRooms} real rooms`);
        return sectorIdSum;
    }

    isReal(input){
        input = input.trim();
        const name = input.match(/(.+)\-\d+\[/)[1];
        const nameChars = name.split('');
        const frequencies = new Map();
        nameChars.forEach((nameChar) => {
            if(nameChar !== '-'){
                if(!frequencies.has(nameChar)){
                    frequencies.set(nameChar, 0);
                }
                frequencies.set(nameChar, frequencies.get(nameChar) + 1);
            }
        });

        let freqArray = [];
        frequencies.forEach((key, value) => {
            freqArray.push({character: value, count: key});
        });

        freqArray = freqArray.sort((a, b) => {
            if(a.count === b.count) {
                if(a.character < b.character){
                    return -1;
                } else {
                    return 1;
                }
            } else {
                return b.count - a.count;
            }
        });

        const expectedChecksum = `${freqArray[0].character}${freqArray[1].character}${freqArray[2].character}${freqArray[3].character}${freqArray[4].character}`;

        const checksum = input.match(/\[(.+)\]/)[1];   
        
        return expectedChecksum === checksum;
    }
    
}