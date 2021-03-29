export default class Antelope {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        antlers = true
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.antlers = antlers
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}