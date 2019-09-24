import {Tree} from './Tree'
import {MyNode} from './MyNode'

class BinarySearchTree implements Tree{
    root: MyNode;

    empty(): boolean{
        if(this.root == null){
            return true
        }else{
            return false
        }
    }

    add(value: string): void{ 
        let current = this.root;
        let newNode = new MyNode();
        newNode.setData(value);
    
        while (current != null) {

            if(current.getData() > value){
                current = current.left;
            }else{
                current = current.right;
            }

        }      
        if(current.getData()< value){
            current.setLeft(newNode);
        }else if(current.getData() > value){
            current.setRight(newNode);
        }
    }


    remove(value: string): void{
        let current = this.root;

        while (current.getData() != value ) {
            if(current.getData() > value && current != null){
                current = current.left;
            }else if(current.getData() < value && current != null){
                current = current.right;
            }else if(current == null){
              return undefined
            }
        }           
        current = null;
    }


    search(value: string): boolean{
        let current = this.root;
        let found = true;

        while (current.getData() != value ) {
            if(current.getData() > value && current != null){
                current = current.left;
            }else if(current.getData() < value && current != null){
                current = current.right;
            }else if(current == null){
                found = false;
            }
        }      
      return found
    }




}   