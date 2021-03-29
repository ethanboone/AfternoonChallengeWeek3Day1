export default class Kangaroo {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        pouch = true
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.pouch = pouch
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}