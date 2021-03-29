export default class Monkey {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        tail = true
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.tail = tail
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}