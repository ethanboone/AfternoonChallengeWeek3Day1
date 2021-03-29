export default class Lion {
    constructor(
        name,
        food,
        weight,
        sex,
        speed,
        predator = false,
        mane = true
    ) {
        this.name = name
        this.food = food
        this.weight = weight
        this.sex = sex
        this.speed = speed
        this.predator = predator
        this.mane = mane
    }

    isPredator() {
        if (this.food == 'animals') {
            return this.predator = true
        } else {
            return this.predator = false
        }
    }
}