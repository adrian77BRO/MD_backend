export class Checkup {
    constructor(
        readonly id: number,
        readonly heartRate: number,
        readonly spo2: number,
        readonly temperature: number
    ) { }
}