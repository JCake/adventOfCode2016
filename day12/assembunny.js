const sampleInstructionString =
`cpy 41 a
inc a
inc a
dec a
jnz a 2
dec a`;
const instructionString = `cpy 1 c
cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 19 c
cpy 14 d
inc a
dec d
jnz d -2
dec c
jnz c -5`;

const instructionStrings = instructionString.split('\n');
const instructions = instructionStrings.map((instructionString) => {
    return instructionString.split(' ');
});
console.log(instructions);
const registers = {};

for(let i = 0; i < instructions.length; ){
    let instructionParts = instructions[i];
    if(instructionParts[0] === 'cpy'){
        let numberValue = parseInt(instructionParts[1]);
        if(isNaN(numberValue)){
            registers[instructionParts[2]] = registers[instructionParts[1]];
        } else {
            registers[instructionParts[2]] = numberValue;
        }
        i++;
    } else if(instructionParts[0] === 'inc'){
        registers[instructionParts[1]] = registers[instructionParts[1]] + 1;
        i++;
    } else if(instructionParts[0] === 'dec'){
        registers[instructionParts[1]] = registers[instructionParts[1]] - 1;
        i++;
    } else if(instructionParts[0] === 'jnz'){
        let numberValue = parseInt(instructionParts[1]);
        if(isNaN(numberValue)){
            if(registers[instructionParts[1]] > 0){
                i += parseInt(instructionParts[2]);
            } else {
                i++;
            }
        }
        else if(numberValue > 0){
            console.log('advancing due to numeric value');
            i += parseInt(instructionParts[2]);
        } else {
            i++;
        }      
    } else {
        i++;
    }
    

}

console.log(registers);