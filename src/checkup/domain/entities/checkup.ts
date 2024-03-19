export class Checkup {
    constructor(
        readonly id: number,
        readonly username: string,
        readonly heart_rate: number,
        readonly oxigen_sat: number,
        readonly temperature: number
    ) { }
}