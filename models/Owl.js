export default class Owl {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        wings = 2
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.wings = wings
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}