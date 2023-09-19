import { GameEntity } from "./GameEntity";

export class Enemy extends GameEntity {
    public name: string;
    public description: string;
    public health: number;
    public attack: number;

    constructor(
        name: string,
        description: string,
        health: number,
        attack: number
    ) {
        super(name, description);
        this.name = name;
        this.description = description;
        this.health = health;
        this.attack = attack;
    }

    public takeDamage(damage: number): string {
        this.health -= damage;
        if (this.health <= 0) {
            return `${this.name} est mort`;
        } else {
            return `${this.name} a subi ${damage} dégâts.`;
        }
    }
}

