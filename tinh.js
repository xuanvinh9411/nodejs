class Tinh{
    constructor(a,b,tinh){
        this.a = a
        this.b= b
        this.tinh = tinh
    }
    get convert(){
        if(this.tinh === 'cong') return '+'
        if(this.tinh === 'tru')  return '-'
        if(this.tinh === 'nhan') return '*'
        if(this.tinh === 'chia') return '/'
    }
    getResult(){
        const string = `${this.a} ${this.convert} ${this.b}`
        return `${string} = ${eval(string)}`
    }
}
module.exports = Tinh