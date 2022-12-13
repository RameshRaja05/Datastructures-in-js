class node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class queue{
    constructor(){
        this.first=null
        this.last=null
        this.length=0
    }
    peek(){
        return this.first.value
    }
    enqueue(value){
        const newnode=new node(value)
        if(this.length===0){
            this.first=newnode
            this.last=newnode
        }
        else{
            this.last.next=newnode
            this.last=newnode
        }
        this.length+=1
       
            
        
    }
    dequeue(){
        if(!this.first){
            return null
        }
        if(this.first===this.last){
            this.last=null
        }
        let hold=this.first
        this.first=hold.next
        this.length-=1
    }
}
myqueue=new queue()
myqueue.enqueue(10)
myqueue.enqueue(100)
myqueue.enqueue(1000)
myqueue.enqueue(10000)
console.log(myqueue)
myqueue.dequeue()
console.log(myqueue)