import { Monster } from "./monster"

class Werewolf extends Monster {
  name: string = "Werewolf"
  damage: number = 16
  health: number = 68

  constructor(level: number) {
    super(level)
    this.damage *= level
    this.health *= level
  }
}

export { Werewolf }