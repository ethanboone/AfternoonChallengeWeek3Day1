export default class Giraffe {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        neck = 1
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.neck = neck
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}