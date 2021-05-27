class Api{
    static isNumber(arg){
        return !isNaN(arg * 1);
    }

    static genRanNum(){
        return Math.round(Math.random()*10000)/100;
    }
    
    static genRanArr(size){
        const tmp = [];
        for(;;){
            tmp.push(Math.round(Math.random()*10000)/100);
            if(tmp.length === size) break;
        }
        return tmp;
    }
    
    static genStrData(arr){
        let tmp = '';
        arr.forEach(element => {
            tmp += element.toString() + '\n';
        });
        return tmp;
    }
}

module.exports = Api;