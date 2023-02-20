import Sprite, { SpriteType } from "./Sprite";

export interface GameObjectConfig {
  x: number;
  y: number;
  src?: string;
  direction?: "up" | "down" | "left" | "right";
  isPlayerControlled?: boolean;
}

export default class GameObject {
  public x: number;
  public y: number;
  public sprite: Sprite;
  public direction: "up" | "down" | "left" | "right";
  constructor(config: GameObjectConfig) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "/src/assets/images/characters/people/hero.png",
    });
  }

  update(state: { arrow: "up" | "down" | "left" | "right" }) {}
}
