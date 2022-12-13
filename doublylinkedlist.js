class DoublyLinkedlist {
    constructor(value) {
        this.head = { value: value, next: null,prev:null }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newnode = { value: value, next: null,prev:null }
        this.tail.next = newnode //tail variable refers head ,append means add an value to end so tail is end of ll for exmaple 
         //diagram head=20|null-->tail it changes the head value next to new value of ll
        newnode.prev=this.tail
        this.tail = newnode
        this.length += 1
        return this
    }
    //add an value to front of the ll
    prepend(value) {
        const newnode = { value: value, next: null,prev:null } //it creates an  value it's our existing ll (12|.->23|.->null) add an value
        // ex:new value=21|.->12|.(exist head value)    
        newnode.next = this.head//newnode next refers the head value
        this.head.prev=newnode
        this.head = newnode//head value change to newnode
        this.length += 1
    }
    printlist() {
        let curnode = this.head //head value stored in curnode value
        let array = [] //empty array it going to get a value from ll
        while (curnode != null) { //it runs until it gets a end of ll.end of ll refers to null
            array.push(curnode.value) //add an value to array
            curnode = curnode.next //it changes to next value

        }
        return array //return value array
    }
    insert(index, value) {
        if (index <= 0) { //checks the condition if index value less than equal to 0 this means prepend
            this.length += 1
            return this.prepend(value)

        }
        else if (index >= this.length) { //if index value greater than equal to length it means append operation or add an value end of ll
            this.length += 1
            return this.append(value)
        }
        const newnode = { value: value, next: null,prev:null } //created a new node
        let header = this.traversaltoindex(index - 1) //in ll we wanna add a value to specific index we need to grab a previous value of our specified index
        //for ex this is our ll (12|.->23|.->25|.-.30|.->45|.->null) we want to add a value to index value 2, (23|.)(index value=1)is the previous value of index 2 value then add a desired value to 23'th pointer and new value pointer refers the existing value of index2
        //traversaltoindex method we have to make to grab a prev value //(23|.->newnode|.->25|.->)
        let holdingvalue = header.next
        newnode.prev=header
        header.next = newnode
        newnode.next = holdingvalue
        holdingvalue.prev=newnode
        this.length += 1
        return this.printlist()
    }
    traversaltoindex(index) {
        let counter = 0
        let curnode = this.head
        while (counter != index) { //it looping until condition is failed if index value equals to counter it's failed
            //o!=1 true and 1!=1 false it stops the loop !=not equals
            curnode = curnode.next
            counter += 1
        }
        return curnode
    }
    removebyIndex(index) {
        let header = this.traversaltoindex(index - 1) //it works exactly same like our insert operation
        let removeditem = header.next 
        //js is a high level lang. it has a automatic garbage collector whenever we change our ref value it's automatically deleted.
        let nextvalue=removeditem.next
        header.next = nextvalue
        nextvalue.prev=header
        this.length -= 1
        return this.printlist()


    }
    removebyValue(value){
       let removeindex=-1 //assume a index value -1 coz usually index value starts with 0 we loop through it becomes positive value
       let gotIndex=false //boolean value to find value
       let curnode=this.head
       while(!gotIndex){ //it runs untill it gets true
        if(curnode.value==value){//condition
            gotIndex=true //it becomes true so loop end

        }
        removeindex+=1 //it is thee index value useful to call removebyindex function
        curnode=curnode.next
       }
       this.removebyIndex(removeindex)
       this.length-=1
       return this.printlist()

       
    }
    r
}

mylinkedlist = new DoublyLinkedlist(10)
console.log(mylinkedlist.append(5))
console.log(mylinkedlist.append(50))
console.log(mylinkedlist.prepend(15))
console.log(mylinkedlist.append(25))
console.log(mylinkedlist.printlist())
console.log(mylinkedlist.insert(2, 55))
console.log(mylinkedlist.insert(4, 30))
console.log(mylinkedlist.removebyIndex(3))
console.log(mylinkedlist.removebyValue(10))
// ll=linked list
//doubly linked list
// null<-.|1|.<->.|2|.<->.|3|.->null