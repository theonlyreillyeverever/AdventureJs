import { Stage } from "../Levels/Leveltmp"
import { House } from "../Types/House"
import { Key } from "../Types/Key"



export class Node<T>{

    private key : number 
    private value : T | null
    private parent : Node<T> | null = null
    private rightValue :  Node<T> | null = null
    private leftValue :  Node<T> | null = null


    constructor(key : number, value : T ){
        this.key = key
        this.value = value
    }

    Key() : number{
        return this.key
    }

    Value() : T | null{
        return this.value
    }

    SetParent(parent : Node<T>){
        if(parent === null){
            return null; 
        }
        this.parent = parent
    }

    SetLeftChild(child : Node<T>){
        if(child === null){
            return null;
        }
        this.leftValue = child
    }

    SetRightChild(child : Node<T>){
        if(child === null){
            return null;
        }
        this.rightValue = child
    }

    IsUndefinded(value : Node<T> | null | undefined) : boolean{
        if(value === undefined){
            return true
        }
        return false
    }

    IsNull(value : Node<T> | null | undefined) : boolean{
        if(value === null){
            return true
        }
        return false
    }

    Parent() : Node<T> | null {
        if(this.parent === null){   
            return null
        }
        return this.parent
    }

    LeftNode() : Node<T> | null{
        if(this.leftValue === null){
            return null
        }
        return this.leftValue
    }


     RightNode() : Node<T> | null{
        if(this.rightValue === null){
            return null
        }
        return this.rightValue
    }


}


export class LevelTree<T>{

    private root : Node<T>
    
    constructor(root : Node<T>) {
        this.root = root;
        
    }

    Root() : Node<T>{
        return this.root
    }

    AddLeftNode(node : Node<T>){
        let tmp : Node<T> | null = this.root;
        while(tmp != null)
        {
            if(tmp.LeftNode() === null){
                tmp.SetLeftChild(node);
            }

            tmp = tmp.LeftNode();
        }
    }

    AddRightNode(node : Node<T>){
        let tmp : Node<T> | null = this.root;
        while(tmp != null)
        {
            if(tmp.RightNode() === null){
                tmp.SetRightChild(node);
            }

            tmp = tmp.RightNode();
        }
    }



    SearchByKey(key : number, node : Node<T> | null, rightNode : Node<T> | null) : Node<T> | null{
        if(node === null || rightNode === null){
            return null;
        }

        if(node.Key() === key){
            return node
        }

        if(rightNode.Key() === key){
            return rightNode
        }
        
        return this.SearchByKey(key, node?.LeftNode(), rightNode?.RightNode())
            
    }
}

export class BuildTree{


}

export class HouseTree{
    private Tree : LevelTree<House>
    constructor(){
        this.Tree = new LevelTree(new Node(0, new House(1,{x : 0, y : 0})))

    }

    TreeBuild() : LevelTree<House>{
        return this.Tree
    }

}