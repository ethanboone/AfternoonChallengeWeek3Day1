export default class Zebra {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        stripes = true
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.stripes = stripes
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}