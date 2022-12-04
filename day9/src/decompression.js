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
        const markerMatcher = inputStr.match(/\((\d+)x(\d+)\)/);
        if(!markerMatcher){
            return inputStr.length;
        }
        const numCharsToRepeat = parseInt(markerMatcher[1]);
        const timesToRepeat = markerMatcher[2];
            
        const repeatInstructionsLocation = inputStr.indexOf(markerMatcher[0]);
        const endOfInstruction = repeatInstructionsLocation + markerMatcher[0].length;

        return repeatInstructionsLocation 
            + timesToRepeat * this.lengthForNestedDecompression(
                inputStr.substring(endOfInstruction,endOfInstruction + numCharsToRepeat))
            + this.lengthForNestedDecompression(inputStr.substring(endOfInstruction + numCharsToRepeat));
      ;
        
    }
}