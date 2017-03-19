class IPClassifier {

    numberSupportingTLS(ipAddresses){
        const ipAddressesArray = ipAddresses.split('\n');
         console.log('checking ' + ipAddressesArray.length + ' addresses');
        const supportingTLS = ipAddressesArray.filter((ipAddress) => {
            return this.supportsTLS(ipAddress);
        });
        console.log('supporting TLS: ' + supportingTLS);
        return supportingTLS.length;
    }
    
    supportsTLS(ipAddress){
        const bracketedParts = ipAddress.match(/\[(.*?)\]/g);
        console.log(bracketedParts);
        const tlsInBracketed = bracketedParts.some((bracketedPart) => {
            return this.hasTLSPattern(bracketedPart);
        })
        if(tlsInBracketed){
            return false;
        }

        return this.hasTLSPattern(ipAddress);
    }

    hasTLSPattern(stringToSearch){
        const ipDigits = stringToSearch.split('');
        let foundPattern = false;
        for(let i = 0; i <= ipDigits.length - 4 && !foundPattern; i++){
            if(ipDigits[i] === ipDigits[i+3] && ipDigits[i+1] === ipDigits[i+2] &&
                ipDigits[i] !== ipDigits[i+1]){
                foundPattern = true;
            }
        }
        return foundPattern;
    }

    numberSupportingSSL(ipAddresses){
        const ipAddressesArray = ipAddresses.split('\n');
        const supportingSSL = ipAddressesArray.filter((ipAddress) => {
            return this.supportsSSL(ipAddress);
        });
        console.log('supporting SSL: ' + supportingSSL);
        return supportingSSL.length;
    }

    supportsSSL(ipAddress){
        const nonBracketedParts = ipAddress.match(/^([^\[\]]*)\[/)
            .concat(ipAddress.match(/\]([^\[\]]*)\[/g)) // TODO How do I use TDD to force this to be needed?
            .concat(ipAddress.match(/\]([^\[\]]*)$/));
        let possiblePatterns = [];
        nonBracketedParts.forEach((part) => {
            if(part){
                possiblePatterns = possiblePatterns.concat(this.possiblePatternsInBracketsForSSL(part));
            }
        })

        let sslMatch = false;
        const bracketedParts = ipAddress.match(/\[(.*?)\]/g);
        possiblePatterns.forEach((possiblePattern) => {
            bracketedParts.forEach((bracketedPart) => {
                if(bracketedPart.indexOf(possiblePattern) > -1){
                    sslMatch = true;
                }
            })
        });
        return sslMatch;
    }

    possiblePatternsInBracketsForSSL(stringToSearch){
        const ipDigits = stringToSearch.split('');
        const patterns = [];
        for(let i = 0; i <= ipDigits.length - 3; i++){
            if(ipDigits[i] === ipDigits[i+2] && ipDigits[i] !== ipDigits[i+1]){
                patterns.push(ipDigits[i+1] + ipDigits[i] + ipDigits[i+1]);
            }
        }
        return patterns;
    }
}