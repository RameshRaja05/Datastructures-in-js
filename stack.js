class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null //equals to null coz we are able to create empty stack
        this.bottom=null //it looks confusing in stack we wanna keep track our value
        this.length=0 //empty stack
    }
    peek(){
        return this.top.value; //this means lookup the top value
    }
    push(value){
        const newnode=new Node(value); //instantiates node class we can't dry
        if(this.length==0){ //if stack is empty
            this.top=newnode //value will be stored right on the top value no need to manipulate the pointer
            this.bottom=newnode //it helpful to keep track
        }
        else{
            let holdingpointer=this.top //if stack is not empty if we changes top value to new value we will lose a existing values this we stored it on the holdingpointer

            this.top=newnode //new values stored on the top
            newnode.next=holdingpointer //we connected to the existing value
        }
        this.length+=1 //increase the length
        return this //we can see our values
    }
    pop(){
      if(!this.top){ //if stack is empty we return null
            return null
        }
        if(this.top==this.bottom){ //if we get a end of stack bottom value changes to null however we don't have values
            this.bottom=null
        }
        let unwanted=this.top //let's grab a our value it will be useful to makesure we deleted the top value
        this.top=unwanted.next//top value changes next value
        this.length-=1 //decrease the length
        return unwanted //we can see our del value
    }
}
mystack=new stack()
mystack.push(10)
mystack.push(11)

mystack.push(12)
mystack.push(13)
mystack.push(14)
mystack.push(15)
console.log(mystack.peek())
mystack.pop()
console.log(mystack.peek())