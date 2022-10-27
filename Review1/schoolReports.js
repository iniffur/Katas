class SchoolReport{
    splitString(){
        let string = 'Green, Amber, Amber, Red'
        const scoresArray = string.split(", ")
        return scoresArray
        // for (let i = 0; i < scoresArray.length; i++){
        //     return scoresArray[i]
        // }
    }
}

module.exports = SchoolReport