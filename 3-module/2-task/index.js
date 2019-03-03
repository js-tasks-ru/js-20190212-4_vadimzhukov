let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let fromCal = this.from;
    let toCal = this.to;

    return {
        next() {
            if (fromCal < toCal) {
                if ((fromCal.getDay() == 5) || (fromCal.getDay() == 6)) {
                    return {
                        fromCal: fromCal.setDate(fromCal.getDate()+1),
                        done: false,
                        value: '['+('0' + fromCal.getDate()).slice(-2) + ']',

                        };
                    } else {

                        return {
                            fromCal: fromCal.setDate(fromCal.getDate()+1),
                            done: false,
                            value: ('0'+fromCal.getDate()).slice(-2),


                        };
                    }
                } else {
                    return {
                        done: true
                    }
            }

        }
    }

};


