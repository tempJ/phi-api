const defaults = {
    name: 'Buffer'
};

class Buffer{
    constructor(name){
        this.name = name || defaults.name;
        this.data = [];
        this.len = 0;
    }

    enBuffer(item){
        this.data.push(item);
        this.len += 1;
    }

    deBuffer(){
        if(this.isEmpty()) { return console.log(`${this.name} is empty\n`); }
        this.len -= 1;
        return this.data.shift();
    }

    clear(){
        this.data = [];
        this.len = 0;
    }

    isEmpty(){
        if(this.len){ return false; }
        return true;
    }

    getName(){ return this.name; }
    getLen(){ return this.len; }

    printData(){
        let print = this.name + ':\n< ' + this.len + '# ';
        this.data.forEach(element => {
            print += element + ' ';
        });
        print += '>';
        console.log(print);
    }
}

module.exports = Buffer;