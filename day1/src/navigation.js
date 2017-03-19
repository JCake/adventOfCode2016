class Navigation {

    constructor(){
       this.facings = {'N': [0,1], 'S': [0,-1], 'E': [1,0], 'W': [-1,0]};
       this.rightRotations = {'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N'};
       this.leftRotations = {'N': 'W', 'W': 'S', 'S' : 'E', 'E': 'N'};
    }


   blocksAway(directions) {
       let curFacing = 'N';
       let curCoords = [0,0];

       const stepMatches = directions.match(/([RL]\d+)/g);
       stepMatches.forEach((stepStr) => {
           const direction = stepStr.match(/([RL])/g)[0];
           if(direction === 'R'){
               curFacing = this.rightRotations[curFacing];
           } else {
               curFacing = this.leftRotations[curFacing];
           }
           const distance = stepStr.match(/(\d+)/g);
           curCoords[0] += this.facings[curFacing][0] * distance;
           curCoords[1] += this.facings[curFacing][1] * distance; 
       });
       return Math.abs(curCoords[0]) + Math.abs(curCoords[1]); 
   }

   firstDuplicateSpotBlocksAway(directions){
       let curFacing = 'N';
       let curCoords = {x: 0, y: 0};
       let pastCoords = [];

       const stepMatches = directions.match(/([RL]\d+)/g);

       for(let i = 0; i < stepMatches.length; i++){
           console.log(pastCoords);
           const stepStr = stepMatches[i];
           const direction = stepStr.match(/([RL])/g)[0];
           if(direction === 'R'){
               curFacing = this.rightRotations[curFacing];
           } else {
               curFacing = this.leftRotations[curFacing];
           }
           const distance = stepStr.match(/(\d+)/g);

           let nextCoords = {};
           let foundMatch = false;
           for(let d = 1; d <= distance; d++){
               nextCoords = {
                   x: curCoords.x + this.facings[curFacing][0] * d, 
                   y: curCoords.y + this.facings[curFacing][1] * d};
               console.log(`Next coords: ${nextCoords.x}, ${nextCoords.y}`);   
               if(pastCoords.includes(`${nextCoords.x},${nextCoords.y}`)){
                   console.log(`found match: ${nextCoords.x}, ${nextCoords.y}`);
                   foundMatch = true;
                   break; // Stop midway through - we've been here before
               } else {
                   pastCoords.push(`${nextCoords.x},${nextCoords.y}`);
               }
           }

           curCoords = nextCoords;
           if(foundMatch){
               break; // Break out of this outer loop - we've found where we've been before
           } 
       }
       return Math.abs(curCoords.x) + Math.abs(curCoords.y); 
   } 
}