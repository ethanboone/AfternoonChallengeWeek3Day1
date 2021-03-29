export default class Seal {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        fins = 3
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.fins = fins
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}