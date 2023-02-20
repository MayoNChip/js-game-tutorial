import GameObject from "./GameObject";
import Person from "./Person";
import { utils } from "./utils";

export const OverworldMaps = {
  DemoRoom: {
    lowerSrc: "/src/assets/images/maps/DemoLower.png",
    upperSrc: "/src/assets/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new GameObject({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      npc1: new GameObject({
        x: utils.withGrid(7),
        y: utils.withGrid(8),
        src: "/src/assets/images/characters/people/npc1.png",
      }),
    },
  },
  Kitchen: {
    lowerSrc: "/src/assets/images/maps/KitchenLower.png",
    upperSrc: "/src/assets/images/maps/KitchenUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(8),
        y: utils.withGrid(9),
      }),
      npcA: new Person({
        x: utils.withGrid(5),
        y: utils.withGrid(6),
        src: "/src/assets/images/characters/people/npc2.png",
      }),
      npcB: new GameObject({
        x: utils.withGrid(4),
        y: utils.withGrid(8),
        src: "/src/assets/images/characters/people/npc3.png",
      }),
    },
  },
};
