
module ashman{
   /**
    * Entity
    * 实体类由组件组成。因此，它必须有一个组件的集合
    */
   class Entity {
       private static nameCount:number = 0;
       /**
        * 实体名称
        */
       private _name: string;
       
       previous: Entity;
       next: Entity;

       constructor(name:string = "") {
           if(name){
               this._name = name;
           }else{
               this._name = "_entity"+(++Entity.nameCount);
           }
       }
   }
}