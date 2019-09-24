import {Tree} from './Tree'
import {MyNode} from './MyNode'


class BinaryTree implements Tree{
    root: MyNode;
    // array: string[];
    
    // constructor(){
    //     // let nodes = [];
       
    //     // //create tree's nodes and set data
    //     // for(var i = 0; i < this.array.length; i++){
    //     //     let node = new MyNode;
    //     //     node.setData(array[i]);
    //     //     nodes.push(node);
    //     // }

    //     // let index = 0;
    //     // //create the tree's structure 
    //     // for(var i = 0; i < this.array.length; i++){
    //     //     let indexL = 2*index + 1;//当前节点左子树索引
    //     //     let indexR = 2*index + 2;//当前节点右子树索引
    //     //     nodes[index].setLeft(nodes[indexL]);//给当前节点添加左子树
    //     //     nodes[index].setRight(nodes[indexR]);//给当前节点添加右子树
    //     //     index++;
    //     // }
    //     // this.root = nodes[0];
    // }

    empty(): boolean{
        if(this.root == null){
            return true
        }else{
            return false
        }
    }

    add(value: string): void{
        let current = this.root;
        let newNode = new MyNode;
        newNode.setData(value);

        if(current != null){
            current.setData(value);
        }

        while(current != null){
            if(current.getLeft == null){
                current.setLeft(newNode);
            }else if(current.getRight == null){
                current.setRight(newNode);
            }else{
                current = current.left;
            }
        }   
    }

    Rightest(root: MyNode): MyNode{
        let current = root;

        while(current.right != null){
            current = current.right;
        }

        return current
    }

    remove(value: string): void{
        if(this.find(this.root, value) == undefined){
           return undefined
        }else{
            this.find(this.root, value).getData() == this.Rightest(this.root).getData();
            this.Rightest(this.root).setData(null);
        }
    }


    search(value: string): boolean{     
       if(this.find(this.root, value) == undefined) {
           return false
       }else{
           return true
       }
    }


    find(current : MyNode,value: string): MyNode{
        let found: MyNode;

        if(current.getData() == value){
            found = current;
        }
        // while(current.getData() != value){
            if(current.left != null){
                // current = current.left;
                current = this.find(current.left, value);

            }else if(current.right != null){
                // current = current.right;
                current = this.find(current.right, value);
            }
        // }    
        return found
    }


}