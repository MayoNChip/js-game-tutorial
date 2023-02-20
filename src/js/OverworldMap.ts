import GameObject from "./GameObject";

export default class OverworldMap {
  public gameObjects: {
    [key: string]: GameObject;
  };
  public lowerImage: HTMLImageElement;
  private upperImage: HTMLImageElement;

  constructor(config: {
    gameObjects: { [key: string]: GameObject };
    lowerSrc: string;
    upperSrc: string;
  }) {
    this.gameObjects = config.gameObjects;
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.lowerImage, 0, 0);
  }
  drawUpperImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.upperImage, 0, 0);
  }
}

// window.OverworldMaps = {
//   DemoRoom: {
//     lowerSrc: "/src/assets/images/maps/DemoLower.png",
//     upperSrc: "/src/assets/images/maps/DemoUpper.png",
//     gameObjects: {
//       hero: new GameObject({
//         x: 5,
//         y: 6,
//       }),
//       npc1: new GameObject({
//         x: 7,
//         y: 8,
//         src: "/src/assets/images/characters/people/npc1.png",
//       }),
//     },
//   },
//   Kitchen: {
//     lowerSrc: "/src/assets/images/maps/KitchenLower.png",
//     upperSrc: "/src/assets/images/maps/KitchenUpper.png",
//     gameObjects: {
//       hero: new GameObject({
//         x: 3,
//         y: 1,
//       }),
//       npcA: new GameObject({
//         x: 8,
//         y: 2,
//         src: "/src/assets/images/characters/people/npc2.png",
//       }),
//       npcB: new GameObject({
//         x: 4,
//         y: 3,
//         src: "/src/assets/images/characters/people/npc3.png",
//       }),
//     },
//   },
// };
