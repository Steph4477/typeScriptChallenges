import { GameEntity } from "./GameEntity";

export class Weapon extends GameEntity {
    public damage: number;

    constructor(name: string, description: string, damage: number) {
        super(name, description)
        this.damage = damage
    }
}
