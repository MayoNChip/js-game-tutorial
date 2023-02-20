import GameObject from "./GameObject";

export type SpriteType = {
  animations?: {
    idleDown: [
      [number, number],
      [number, number]?,
      [number, number]?,
      [number, number]?
    ];
  };
  currentAnimation?: "idleDown" | "idleUp";
  currentAnimationFrame?: number;
  image?: HTMLImageElement;
  isLoaded?: boolean;
  gameObject?: GameObject;
  src?: string;
  useShadow?: boolean;
};

export default class Sprite {
  private animations: {
    idleDown: [
      [number, number],
      [number, number]?,
      [number, number]?,
      [number, number]?
    ];
  };
  private currentAnimation: "idleDown" | "idleUp";
  private currentAnimationFrame: number;
  private image: HTMLImageElement;
  private isLoaded: boolean;
  private gameObject: GameObject;
  private shadow: HTMLImageElement;
  private shadowLoaded: boolean;
  private useShadow: boolean;

  constructor(config: SpriteType) {
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };
    this.useShadow = config.useShadow || true;
    if (this.useShadow) {
      this.shadow = new Image();
      this.shadow.src = "/src/assets/images/characters/shadow.png";
      this.shadow.onload = () => {
        this.shadowLoaded = true;
      };
    }

    this.animations = config.animations || {
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    this.gameObject = config.gameObject;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 18;

    this.useShadow && ctx.drawImage(this.shadow, x, y);
    ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
  }
}
