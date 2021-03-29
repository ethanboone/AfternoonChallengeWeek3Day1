export default class Jaguar {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        claws = 4
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.claws = claws
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}