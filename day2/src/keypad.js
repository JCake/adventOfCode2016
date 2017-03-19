class KeypadCodeFinder {

    codeFrom(input, keypad, startingCoord) {
        let curCoords = startingCoord;
        const instructions = input.split(/\W+/);
        let code = '';
        instructions.forEach((instruction) => {
            console.log(instruction);
            const steps = instruction.split('');
            console.log(steps);
            steps.forEach((step) => {
                if(step === 'U'){
                    const possibleNewCoord = Math.max(curCoords[0] - 1, 0);
                    if(keypad[possibleNewCoord][curCoords[1]]){
                        curCoords[0] = possibleNewCoord;
                    }
                } else if(step === 'D'){
                    const possibleNewCoord = Math.min(curCoords[0] + 1, keypad.length - 1);
                    if(keypad[possibleNewCoord][curCoords[1]]){
                        curCoords[0] = possibleNewCoord;
                    }
                } else if(step === 'L'){
                    const possibleNewCoord = Math.max(curCoords[1] - 1, 0);
                    if(keypad[curCoords[0]][possibleNewCoord]){
                        curCoords[1] = possibleNewCoord;
                    }
                } else if(step === 'R'){
                    const possibleNewCoord = Math.min(curCoords[1] + 1, keypad[curCoords[0]].length - 1);
                    if(keypad[curCoords[0]][possibleNewCoord]){
                        curCoords[1] = possibleNewCoord;
                    }
                }
            });
            code += keypad[curCoords[0]][curCoords[1]]
        });
        return code;
    }

}