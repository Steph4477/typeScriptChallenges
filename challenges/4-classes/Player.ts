import { Position } from "./Position";
import { cardinalDirections } from "./cardinalDirections";
import { Weapon } from "./Weapon";
import { GameEntity } from "./GameEntity";
import { Treasure } from "./Treasure";

export class Player {
    inventory: GameEntity[] = [];
    health: number = 100;
    currentPosition: Position;
    previousPosition: Position | null;  // Allow previousPosition to be null

    constructor(currentPosition: Position) {
        this.currentPosition = currentPosition;
        this.previousPosition = null;  // Initialize previousPosition to null
    }

    moveTo(direction: cardinalDirections): void {
        this.previousPosition = { ...this.currentPosition };  // Save the previous position before moving.

        if (direction === cardinalDirections.north) {
            this.currentPosition.y--;
        }
        if (direction === cardinalDirections.south) {
            this.currentPosition.y++;
        }
        if (direction === cardinalDirections.east) {
            this.currentPosition.x--;
        }
        if (direction === cardinalDirections.west) {
            this.currentPosition.x++;
        }
    }

    goBack(): void {
        if (this.previousPosition) {
            this.currentPosition = { ...this.previousPosition };  // Move back to the previous position.
            this.previousPosition = null;  // Reset the previous position after going back.
        }
    }

    pickUp(item: GameEntity): void {
        this.inventory.push(item);
    }

    takeDamage(damage: number): void {
        this.health -= damage
    }

    get isDead(): boolean {
        return this.health <= 0;
    }

    get hasTreasure(): boolean {
        return this.inventory.some(item => item instanceof Treasure);
    }

    get attack(): number {
        const weapons = this.inventory.filter(item => item instanceof Weapon) as Weapon[];
        if (weapons.length === 0) {
            return 1;
        }
        return Math.max(...weapons.map(weapon => weapon.damage));
    }
}
