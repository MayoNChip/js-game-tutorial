export default class DirectionInput {
  private heldDirections: ("up" | "down" | "left" | "right")[];
  private map: { [key: string]: "up" | "down" | "left" | "right" };

  constructor() {
    this.heldDirections = [];
    this.map = {
      ArrowUp: "up",
      KeyW: "up",
      ArrowDown: "down",
      KeyS: "down",
      ArrowLeft: "left",
      KeyA: "left",
      ArrowRight: "right",
      KeyD: "right",
    };
  }

  get direction() {
    return this.heldDirections[0];
  }

  Init() {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      const dir = this.map[e.code];
      const index = this.heldDirections.indexOf(dir);
      if (dir && index === -1) {
        this.heldDirections.unshift(dir);
        console.log(this.heldDirections);
      }
    });
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      const dir = this.map[e.code];
      const index = this.heldDirections.indexOf(dir);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
        console.log(this.heldDirections);
      }
    });
  }
}
