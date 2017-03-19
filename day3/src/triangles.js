class Triangles {

    constructor(){
        
    }

    isTriangle(input){
        const sides = input.match(/(\d+)/g);
        return this.isTriangleGivenSides(sides);
    }

    isTriangleGivenSides(sides){
        const sideA = parseInt(sides[0]);
        const sideB = parseInt(sides[1]);
        const sideC = parseInt(sides[2]);
        return sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB;
    }

    countTriangles(input){
        const inputs = input.split('\n');

        let count = 0;
        inputs.forEach((possibleTriangle) => {
            if(this.isTriangle(possibleTriangle)){
                ++count;
            }
        });
        return count;
    }

    countTrianglesVertically(input){
        const inputs = input.split('\n');

        let count = 0;
        for(let index = 0; index < inputs.length; index += 3){
            let row1 = inputs[index].match(/(\d+)/g);
            let row2 = inputs[index + 1].match(/(\d+)/g);
            let row3 = inputs[index + 2].match(/(\d+)/g);
            for(let triangleIndex = 0; triangleIndex < 3; triangleIndex++){
                const possibleTriangle = [row1[triangleIndex], row2[triangleIndex], row3[triangleIndex]];
                if(this.isTriangleGivenSides(possibleTriangle)){
                    ++count;
                }    
            }
        }
        return count;
    }
    
}