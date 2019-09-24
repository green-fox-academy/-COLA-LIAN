import {MyNode} from './MyNode'
interface LinkedList {
    add1(value: string): void;
    add2(index: number, value: string): void;
    get(index: number): string;
    remove1(value: string): void;
    remove2(index: number): string;
    size(): number;
  }


//   class MyNode{
//     data: string;
//     next: MyNode;
//     before: MyNode;

//     setData(data:string){
//         this.data = data;
//         return this.data
//     }
//     getData(){
//         return this.data
//     }
//     setNext(node:MyNode){
//         this.next = node;
//         return this.next
//     }
//     getNext(){
//         return this.next
//     }
//     getBefore(){
//         return this.before
//     }
// }


  class LinkedList1 implements LinkedList {
    head: MyNode;
    tail: MyNode;
    current: MyNode;
   
    constructor(head: MyNode) {
        this.head = head;
        this.head = this.tail
      }

     add1(value:string):void{
        let node = new MyNode;
        myNode.setData(value);
        this.current = this.head;
        while(this.current.next != null){
            this.current = this.current.getNext();
        }
        this.current.setNext(myNode);
        
      }
      

      add2(index: number, value: string): void{
          this.current = this.head;
        for(var i = 0; i < index; i++){
            this.current = this.current.getNext();
        }
        this.current.setData(value);
      }


      get(index: number): string{
        this.current = this.head;
        for(var i = 0; i < index; i++){
            this.current = this.current.getNext();
        }
        return this.current.getData()
      }


      remove1(value: string): void{

        this.current = this.head;
        while(this.current != null){
            if(this.current.getData() == value){
                this.current.before.next = this.current.next;
            }else{
                this.current = this.current.getNext();
            }
        }

      }

      remove2(index: number): string{
        this.current = this.head;
        for(var i = 0; i < index; i++){
            this.current = this.current.getNext();
        }
        let str = this.current.getData();
        this.current.before.next = this.current.next;
        return str
      }
          
      size(): number{
        let number = 0;
        this.current = this.head;
        while(this.current != null){
            this.current = this.current.getNext();
            number++;
        }
        return number
      }
  }


let myNode = new MyNode();
myNode.setData("Hello");
let linkedlist = new LinkedList1(myNode);



