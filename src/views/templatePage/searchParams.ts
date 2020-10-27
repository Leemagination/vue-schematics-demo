class SearchParams {
    inputField: string;
    numberInputField: number;
    dateField: Date;
    selectField: number;
    multiSelectField: number[];

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