module.exports = function calculateNumber(type, a, b){
    try {
        if (type === 'SUM') {
            return (Math.round(a) + Math.round(b))
	} if (type === 'MULTIPLY') {
            return (Math.round(a) * Math.round(b))
        } if (type === 'SUBTRACT') {
            return (Math.round(a) - Math.round(b))
        } if (type === 'DIVISION') {
	    if (Math.round(b) === 0) {
                return 'Error: Division by 0'
	    }
            return (Math.round(a) / Math.round(b))
        } catch (err) {
	    return (err);
	}
    }
}
