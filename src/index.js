module.exports = function toReadable (number) {
    const under20 = [' ', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const under100 = [' ',' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const multBy10 = [' ', ' ', 'hundred', 'thousand'];
    let converted = (Math.abs(number)).toString();
    let readable = '';
    if (typeof(number) === 'undefined') return Error;
    if (!number) return 'zero';

    const to20 = numStr => {
        let result = '';
        if (numStr % 100 >= 20) return ''; 
        return result += (numStr.slice(-2, -1) === '0') ? 
                        ` ${under20[numStr.slice(-1)]}` :
                        ` ${under20[numStr.slice(-2)]}`;
    }; 

    const to100 = numStr => {
        let result = '';
        if (numStr %100 < 20) return '';
        return result += (numStr % 10) ? 
                            ` ${under100[numStr.slice(-2, -1)]} ${under20[numStr.slice(-1)]}`:
                            ` ${under100[numStr.slice(-2, -1)]}`;
    };
    
    const to1000 = numStr => {
        if (numStr < 100) return '';
        let result = '';
        return result += `${under20[numStr.slice(-3, -2)]} ${multBy10[2]}`; 
    } 

    readable = (number >= 100) ? 
            (to1000(converted) + to100(converted) + to20(converted)).trim() : 
            (number >= 20) ? 
            (to100(converted) + to20(converted)).trim() :
            (to20(converted)).trim(); 

    return readable;
}
