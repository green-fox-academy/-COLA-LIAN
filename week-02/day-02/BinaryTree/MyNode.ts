class MyNode{ 
    data: string;
    father: MyNode;
    left: MyNode;
    right: MyNode;

    setData(data:string){
        this.data = data;
        return this.data
    }
    getData(){
        return this.data
    }


    getFather(){
        return this.father
    }


    setLeft(node:MyNode){
        this.left = node;
        return this.left
    }    
    getLeft(){
        return this.left
    }


    setRight(node:MyNode){
        this.right = node;
        return this.right
    } 
    getRight(){
        return this.right
    }
}

export{MyNode}