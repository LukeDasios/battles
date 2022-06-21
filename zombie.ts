import { Monster } from "./monster"

class Zombie extends Monster {
  constructor(name: string, damage: number, health: number) {
    super(name, damage, health)
  }
}

export { Zombie }