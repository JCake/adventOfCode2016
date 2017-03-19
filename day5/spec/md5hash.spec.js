describe('MD5 Hash', () => {
    
    it('finds md5 hash', () => {
        const hasher = new MD5Hash();
        expect(hasher.md5('abc3231929')).toEqual('00000155f8105dff7f56ee10fa9b9abd');
    });

    it('finds password from hashes starting with 5 zeroes', () => {
        const hasher = new MD5Hash();
        expect(hasher.passwordFrom('abc')).toEqual('18f47a30');
    });

    it('finds password from hashes starting with 5 zeroes for real puzzle input', () => {
        const hasher = new MD5Hash();
        expect(hasher.passwordFrom('wtnhxymk')).toEqual('2414bc77');
    });

    it('finds more complicated password', () => {
        const hasher = new MD5Hash();
        expect(hasher.password2From('abc')).toEqual('05ace8e3');
    });

    fit('finds more complicated password for real puzzle', () => {
        const hasher = new MD5Hash();
        expect(hasher.password2From('wtnhxymk')).toEqual('437e60fc');
    });

    
});