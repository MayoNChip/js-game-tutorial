import OverworldMap from "./OverworldMap";
import DirectionInput from "./DirectionInput";
import { OverworldMaps } from "./OverworldMaps";

export default class Overworld {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private height: number = window.innerHeight;
  private width: number = window.innerWidth;
  private Overworld: Overworld;
  private map: OverworldMap;
  private directionInput: DirectionInput;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d")!;
  }

  setup() {
    this.map = new OverworldMap(OverworldMaps.Kitchen);
    this.directionInput = new DirectionInput();
    this.directionInput.Init();
  }

  gameLoop() {
    const step = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.map.drawLowerImage(this.ctx);

      Object.values(this.map.gameObjects).forEach((object) => {
        object.update({
          arrow: this.directionInput.direction,
        });
        object.sprite.draw(this.ctx);
      });

      this.map.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  public Init(): void {
    this.setup();
    this.gameLoop();
    // const image = new Image();
    // image.onload = () => {
    //   this.ctx.drawImage(image, 0, 0);
    // };
    // image.src = "/src/assets/images/maps/DemoLower.png";
    // const hero = new GameObject({
    //   x: 5,
    //   y: 6,
    // });
    // const npc1 = new GameObject({
    //   x: 7,
    //   y: 8,
    //   src: "/src/assets/images/characters/people/npc1.png",
    // });
    // hero.sprite.draw(this.ctx);
    // npc1.sprite.draw(this.ctx);
    // const shadow = new Image();
    // shadow.onload = () => {
    //   this.ctx.drawImage(shadow, 0, 0, 32, 32, x * 16 - 8, y * 16 - 18, 32, 32);
    // };
    // shadow.src = "/src/assets/images/characters/shadow.png";
    // const x = 5;
    // const y = 6;
    // const hero = new Image();
    // hero.onload = () => {
    //   this.ctx.drawImage(hero, 0, 0, 32, 32, x * 16 - 8, y * 16 - 18, 32, 32);
    // };
    // hero.src = "/src/assets/images/characters/people/hero.png";
  }
}
