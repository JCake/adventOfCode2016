describe('navigation', () => {
    
    it('should get you 5 blocks away for simple 2 blocks + 3 blocks scenario', () => {
        const navigation = new Navigation();
        expect(navigation.blocksAway('R2, L3')).toEqual(5);   
    });
    
    it('should get you 7 blocks away for simple 3 blocks + 4 blocks scenario', () => {
        const navigation = new Navigation();
        expect(navigation.blocksAway('R3, L4')).toEqual(7);   
    });
    
    it('should get you 2 blocks away when walking three sides of a 2x2 block square', () => {
        const navigation = new Navigation();
        expect(navigation.blocksAway('R2, R2, R2')).toEqual(2);   
    });
          
    it('should work for more complicated scenario', () => {
        const navigation = new Navigation();
        expect(navigation.blocksAway('R5, L5, R5, R3')).toEqual(12);   
    });
    
    it('should work for puzzle input', () => {
       const navigation = new Navigation();
       expect(navigation.blocksAway('R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3')).toEqual(161); 
    });

    describe('part 2', () => {
        it('should find first repeated spot - simple case', () => {
            const navigation = new Navigation();
            expect(navigation.firstDuplicateSpotBlocksAway('R8, R4, R4, R8')).toEqual(4);
        });

       it('should work for puzzle input', () => {
            const navigation = new Navigation();
            expect(navigation.firstDuplicateSpotBlocksAway('R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3')).toEqual(161); 
        });
    });
   
    
});