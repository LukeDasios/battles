import { Zombie } from "./zombie"
import { Skeleton } from "./skeleton"
import { Werewolf } from "./werewolf"

let zombie = new Zombie(1)
let skeleton = new Skeleton(1)
let werewolf = new Werewolf(1)

let turn = true

console.log(`Let the fight between the ${zombie.name} and ${skeleton.name} begin!`)

while (zombie.health && skeleton.health) {
  if (turn) {
    skeleton.health -= zombie.damage
    console.log(`The ${zombie.name} swings at the ${skeleton.name} which deals ${zombie.damage}! The ${skeleton.name} has ${skeleton.health ? skeleton.health : 0} health points remaining`)
  } else {
    zombie.health -= skeleton.damage
    console.log(`The ${skeleton.name} swings at the ${zombie.name} which deals ${skeleton.damage}! The ${zombie.name} has ${zombie.health ? zombie.health : 0} health points remaining`)
  }
  turn = !turn
}

if (zombie.health) {
  console.log(`The Zombie cracks open the skull of the skeleton!`)
} else {
  console.log('The Skeleton cuts the Zombie in half!')
}