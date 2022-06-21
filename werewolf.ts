import { Monster } from "./monster"

class Werewolf extends Monster {
  name: string = "Werewolf"
  baseDamage: number = 10
  baseHealth: number = 100

  constructor(name: string, damage: number, health: number) {
    super(name, damage, health)
  }
}

export { Werewolf }