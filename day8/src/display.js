class Screen {

    constructor(rows=6, columns=50){
        this.rows = rows;
        this.columns = columns;
    }

    countOn(display){
        return display.match(/(#)/g).length;
    }

    draw(instructions){

        let display = [];
        for(let rowi = 0; rowi < this.rows; rowi++){
            let row = [];
            for(let coli = 0; coli < this.columns; coli++){
                row.push('.');
            }
            display.push(row);
        }


        const instructionsArray = instructions.split('\n');

        instructionsArray.forEach((instruction) => {
            const rectDimensions = instruction.match(/rect (\d+)x(\d+)/);
            const rotateCol = instruction.match(/rotate column x=(\d+) by (\d+)/);
            const rotateRow = instruction.match(/rotate row y=(\d+) by (\d+)/);
            
            if(rectDimensions){
                const width = parseInt(rectDimensions[1]);
                const height = parseInt(rectDimensions[2]);

                for(let rowi = 0; rowi < this.rows; rowi++){
                    let row = [];
                    for(let coli = 0; coli < this.columns; coli++){
                        if(coli < width && rowi < height){
                            display[rowi][coli] = '#';
                        }
                    }
                }
            } else if(rotateCol){
                const col = parseInt(rotateCol[1]);
                const amt = parseInt(rotateCol[2]);

                let curColPixels = [];
                for(let rowi = 0; rowi < this.rows; rowi++){
                    curColPixels.push(display[rowi][col]);
                }
                for(let rowi = 0; rowi < this.rows; rowi++){
                    let indexToPullFrom = (rowi - amt) % this.rows;
                    while(indexToPullFrom < 0){
                        indexToPullFrom += this.rows;
                    }
                    display[rowi][col] = curColPixels[indexToPullFrom];
                }

            } else if(rotateRow){
                const row = parseInt(rotateRow[1]);
                const amt = parseInt(rotateRow[2]);

                let curRowPixels = [];
                for(let coli = 0; coli < this.columns; coli++){
                    curRowPixels.push(display[row][coli]);
                }
                for(let coli = 0; coli < this.columns; coli++){
                    let indexToPullFrom = (coli - amt) % this.columns;
                    while(indexToPullFrom < 0){
                        indexToPullFrom += this.columns;
                    }
                    display[row][coli] = curRowPixels[indexToPullFrom];
                }
            }
            
        });


        let strDisplay = '';
        display.forEach((row) => {
        strDisplay += ('\n' + (row.join('')));
        })
        return strDisplay;
    }
}