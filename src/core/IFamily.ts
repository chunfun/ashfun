module ashman{
    
    export interface IFamily{
        /**
		 * An entity has been added to the engine. It may already have components so test the entity
		 * for inclusion in this family's NodeList.
		 */
        newEntity(entity:Entity) : void;
        /**
		 * An entity has been removed from the engine. If it's in this family's NodeList it should be removed.
		 */
        removeEntity(entity:Entity) : void;
        /**
		 * A component has been added to an entity. Test whether the entity's inclusion in this family's
		 * NodeList should be modified.
		 */
        componentAddedToEntity(entity:Entity):void;
        /**
		 * A component has been removed from an entity. Test whether the entity's inclusion in this family's
		 * NodeList should be modified.
		 */
        componentRemovedFromEntity(entity:Entity):void;
        /**
		 * The family is about to be discarded. Clean up all properties as necessary. Usually, you will
		 * want to empty the NodeList at this time.
		 */
        cleanUp():void
    }

}