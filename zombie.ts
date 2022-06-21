import { Monster } from "./monster"

class Zombie extends Monster {
  name: string = "Zombie"
  damage: number = 10
  health: number = 100

  constructor(level: number) {
    super(level)
    this.damage *= level
    this.health *= level
  }
}

export { Zombie }