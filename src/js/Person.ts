import GameObject, { GameObjectConfig } from "./GameObject";

export default class Person extends GameObject {
  private movingProgressRemaining: number;
  //   private directionUpdate: { [key: string]: [string, number] };
  private directionUpdate: { [key: string]: ["x" | "y", number] };
  private isPlayerControlled: boolean;

  constructor(config: GameObjectConfig) {
    super(config);
    this.movingProgressRemaining = 32;

    this.direction = "up";

    this.directionUpdate = {
      up: ["y", -1],
      down: ["y", 1],
      left: ["x", -1],
      right: ["x", 1],
    };
    this.isPlayerControlled = config.isPlayerControlled || false;
  }

  update(state: { arrow: "down" | "up" | "right" | "left" }) {
    this.updatePosition();
    this.updateSprite(state);
    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      state.arrow
    ) {
      this.direction = state.arrow;
      this.movingProgressRemaining = 16;
    }
  }

  updatePosition() {
    if (this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  }

  updateSprite(state: { arrow: "down" | "up" | "right" | "left" }) {
    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining === 0 &&
      !state.arrow
    ) {
      this.sprite.setAnimation(`idle-${this.direction}`);
      return;
    }

    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation(`walk-${this.direction}`);
    }
  }
}
