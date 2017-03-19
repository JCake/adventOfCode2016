class Decompressor {

    decompress(inputStr){

        let markerMatcher = inputStr.match(/\((\d+)x(\d+)\)/);
        if(!markerMatcher){
            return inputStr;
        } else {
            let outputStr = '';
            while(inputStr.match(/\((\d+)x(\d+)\)/)){
                let markerMatcher = inputStr.match(/\((\d+)x(\d+)\)/);
                let numCharsToRepeat = markerMatcher[1];
                let timesToRepeat = markerMatcher[2];
                let fullMarker = `(${numCharsToRepeat}x${timesToRepeat})`;
                const markerLoc = inputStr.indexOf(fullMarker);
                outputStr += inputStr.substring(0,markerLoc);
                const toRepeat = inputStr.substr(markerLoc + fullMarker.length, numCharsToRepeat);
                for(let repi = 0; repi < timesToRepeat; repi++){
                    outputStr += toRepeat;
                }
                inputStr = inputStr.substring(markerLoc + fullMarker.length + parseInt(numCharsToRepeat));  
            }
            return outputStr + inputStr;
        }     
    }

    decompressConsideringMarkersWithinMarkers(inputStr){
        let possibleOutputString = this.decompress(inputStr);
        while(possibleOutputString !== inputStr){
            inputStr = possibleOutputString;
            possibleOutputString = this.decompress(inputStr);
        }
        return possibleOutputString;
    }

    lengthForNestedDecompression(inputStr){
        let markerMatcher = inputStr.match(/\((\d+)x(\d+)\)/);
        if(!markerMatcher){
            return 0;
        }
        let numCharsToRepeat = parseInt(markerMatcher[1]);
        let timesToRepeat = markerMatcher[2];
        let fullMarker = `(${numCharsToRepeat}x${timesToRepeat})`;
        const firstMarkerLoc = inputStr.indexOf(fullMarker);
        let firstSection = inputStr.substring(0, firstMarkerLoc + fullMarker.length + numCharsToRepeat);
        let secondSection = inputStr.substring(firstMarkerLoc + fullMarker.length + numCharsToRepeat);

        console.log('length of section before decompression: ' + firstSection.length);
        const lengthOfFirstSection = this.decompressConsideringMarkersWithinMarkers(firstSection).length;
        console.log('length of decompressed section: ' + lengthOfFirstSection);

        return lengthOfFirstSection + this.lengthForNestedDecompression(secondSection);
    }
}