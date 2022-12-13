class stack{
    constructor(){
        this.array=[]
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value)
        return this
    }
    pop(){
        this.array.pop()
        return this
    }

}
mystack=new stack()
mystack.push(10)
mystack.push(20)
mystack.push(30)
mystack.push(40)
mystack.push(50)
console.log(mystack)
mystack.pop()
mystack.pop()
mystack.pop()
console.log(mystack)