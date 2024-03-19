export class Patient {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly last_name: string,
        readonly age: number,
        readonly sex: string
    ) { }
}