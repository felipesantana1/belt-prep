export class Recipe {
    constructor(
        public name: String = "",
        public chef: String = "",
        public rating: Number = 0,
        public ingredients: Array<Object> = []
    ){}
}