class SearchParams {
    name: string;
    age: number;
    date: Date;
    sex: number[]|string[];
    numberValue: number|string;
    
    constructor() {
      this.reset()
    }

    getParams() {
        return JSON.parse(JSON.stringify(this))
    }

    reset() {
        for (const prop in this) {
            this[prop] = undefined;
        }
    }
}

export default SearchParams