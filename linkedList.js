class LinkedList {
    constructor() {
        this.head = null,
        this.length = 0
    }

    prePend(data) {
        //adds new node at start
        const newNode = new Node(data,this.head)
        this.head = newNode
        this.length++ 
    }

    append(data) {
        //add end of the list
        let current = this.head
        let prevNode
        while(current !== null) {
            prevNode = current
            current = current.next
        }
        prevNode.next = new Node(data,null)
        this.length++
    }

    size() {
        //length
        return this.length
    }

    toHead() {
        //first node in the list
        return this.head.value
    }

    tail() {
        //last node in the list
        let current = this.head
        while(current.next) {
            current = current.next
        }
        return current.value
    }

    at(index) {
        //node at given index
        if(index<0) return null
        if(index>=this.length) return null
        let current = this.head
        for(let i=0;i<index;i++){
            current = current.next
        }
        return current.value
    }

    pop() {
        //last element from list
        let current = this.head
        let prevNode

        while(current.next) {
            prevNode = current
            current = current.next
        }
        prevNode.next = current.next
        this.length--
    }

    contains(value) {
        //true or false if we have that value in thte list
        let current = this.head
        while(current){
            if(current.value === value) {
                return true
            }
            current = current.next
        }
        return false
    }

    find(value) {
        //index of that value or null if value is not present
        let current = this.head
        let index = 0
        while(current){
            index++
            if(current.value === value) {
                return index
            }
            current = current.next
        }
        return -1
    }

    toString() {
        //represents list in value -> value -> null format
        let current = this.head
        let msg = ''
        while(current) {
            msg = `${msg}${current.value} ->`
            current =current.next
        }
        msg = `${msg} Null`
        return msg
    }

    insertAt(index,value) {
        //insert value at that index
        let node = new Node(value,null)
        let current = this.head
        let prevNode 
        let currentIndex =0
        if(index > this.length) return false
        if(index === 0) {
            return this.prePend(value)
        }else{
            while(currentIndex < index){
                currentIndex++
                prevNode = current
                current = current.next
            }
            node.next = current
            prevNode.next = node
            this.length++
        }
    }

    removeAt(index) {
        //remove the node at that index
        if(index > this.length || index < 0) return false
        if(index === 0){
            this.head = this.head.next
        }else{
            let currentIndex = 0
            let current = this.head
            let prevNode
            while(currentIndex < index) {
                currentIndex++
                prevNode = current
                current = current.next
            }
            prevNode.next = current.next
        }
        this.length--
    }

    isEmpty() {
        return this.length === 0
    }
}

class Node {
    constructor(value,next) {
        this.value = value,
        this.next = next
    }
}

const list1 = new LinkedList()
list1.prePend(10)
list1.prePend(20)
list1.prePend(30)
list1.prePend(40)
list1.prePend(50)


function sumList(list) {
    let current = list.head
    let sum = 0 
    while(current) {
        sum = sum + current.value
        current = current.next
    }
    return sum
}