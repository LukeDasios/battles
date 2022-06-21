class Monster {
  name: string = ""
  damage: number = 0
  health: number = 0
  level: number

  constructor (level: number) {
    this.level = level
  }
}


export { Monster }
