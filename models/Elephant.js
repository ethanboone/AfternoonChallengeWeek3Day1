export default class Elephant {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        ears = 2
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.ears = ears
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}