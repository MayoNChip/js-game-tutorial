import GameObject from "./GameObject";

export type currentAnimationType =
  | "idle-down"
  | "walk-down"
  | "walk-left"
  | "walk-right"
  | "walk-up"
  | "idle-left"
  | "idle-right"
  | "idle-up";

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
  animationFrameLimit?: number;
};

export default class Sprite {
  private animations: {
    [key: string]: [number, number][];
  };
  private currentAnimation: currentAnimationType;
  private currentAnimationFrame: number;
  private image: HTMLImageElement;
  private isLoaded: boolean;
  private gameObject: GameObject;
  private shadow: HTMLImageElement;
  private shadowLoaded: boolean;
  private useShadow: boolean;
  private animationFrameLimit: number;
  private animationFrameProgress: number;

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
      "idle-down": [[0, 0]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "idle-right": [[0, 1]],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
      "walk-up": [
        [1, 2],
        [0, 2],
        [3, 2],
        [0, 2],
      ],
      "walk-left": [
        [1, 3],
        [0, 3],
        [3, 3],
        [0, 3],
      ],
      "walk-right": [
        [1, 1],
        [0, 1],
        [3, 1],
        [0, 1],
      ],
    };
    this.currentAnimation = "idle-right"; //config.currentAnimation || "idleUp";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 16;
    this.animationFrameProgress = this.animationFrameLimit;

    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key: currentAnimationType) {
    if (this.currentAnimation !== key) {
      console.log(this.currentAnimation);
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 18;

    this.useShadow && ctx.drawImage(this.shadow, x, y);

    const [frameX, frameY] = this.frame;

    this.isLoaded &&
      ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);

    this.updateAnimationProgress();
  }
}
