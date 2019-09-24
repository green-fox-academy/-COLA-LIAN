  class MyNode{
    data: string;
    next: MyNode;
    before: MyNode;

    setData(data:string){
        this.data = data;
        return this.data
    }
    getData(){
        return this.data
    }
    setNext(node:MyNode){
        this.next = node;
        return this.next
    }
    getNext(){
        return this.next
    }
    getBefore(){
        return this.before
    }
}

export {MyNode}