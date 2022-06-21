import { Monster } from './monster'

class Skeleton extends Monster {
  name: string = "Skeleton"
  damage: number = 14
  health: number = 85

  constructor(level: number) {
    super(level)
    this.damage *= level
    this.health *= level
  }
}

export { Skeleton }