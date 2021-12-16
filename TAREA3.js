class nodo{
    constructor(dato){
        this.dato=dato;
        this.siguiente=null;
        this.anterior=null;
        this.pila=new pila();
        this.size=0;
    }
}
class ListadeLista{
    constructor(){
        this.primero=null;
    }
    insert(dato){
        let nuevo= new nodo(dato);
        if(this.primero==null){
            this.primero=nuevo;
        }else{
            let aux = this.primero;
            while(aux.siguiente!=null){
                if(aux.dato==dato){
                    return
                }
                aux=aux.siguiente;
            };
            if(aux.dato==dato){
                return
            }
            aux.siguiente=nuevo;
            nuevo.anterior=aux;
        }
    }
    show(){
        let aux=this.primero;
        while(aux!=null){
            console.log(" --> "+aux.dato);
            aux.pila.showpila();
            aux=aux.siguiente;
        }
    }
    insertSon(data,value){
        let aux=this.primero;
        while(aux!=null){
            if(data==aux.dato){
                aux.pila.push(value);
                return
            }
            aux=aux.siguiente;
        }
        return null;
    }
}

class nodepila{
    constructor(dato){
        this.dato=dato;
        this.siguiente=null;
        this.anterior=null;
    }
    
}
class pila{
    constructor(){
        this.header=null;
        this.size=0;
    }
    push(dato){
        let newnode=new nodepila(dato);
        if(this.emptyPila()){
            this.header=newnode;
            this.size;
        }else{
            let aux=this.header;
            newnode.siguiente=aux;
            this.header=newnode;
            this.size++;
        }
    }
    pop(){
        let aux=this.header;
        this.header=this.header.siguiente;
        this.size--;
        return aux;
    }
    peek(){
        return this.header.dato;
    }
    emptyPila(){
        if(this.header==null){
            return true;
        }
        return false;
    }
    showpila(){
        let aux=this.header;
        while(aux!=null){
            console.log("    -- "+aux.dato);
            aux=aux.siguiente;
        }
    }
    getSize(){
        return this.size;
    }
}
