import { Enemy } from "./Enemy";
import { GameEntity } from "./GameEntity";

export class Room {
  public items: GameEntity[];
  public enemies: Enemy[];

  constructor() {
    this.items = [];
    this.enemies = [];
  }

  public addEnemy(enemy: Enemy): void {
    this.enemies.push(enemy);
  }

  public addItem(item: GameEntity): void {
    this.items.push(item);
  }

  public removeItem(item: GameEntity): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  public removeEnemy(enemy: Enemy): void {
    const index = this.enemies.indexOf(enemy);
    if (index !== -1) {
      this.enemies.splice(index, 1);
    }
  }
}

