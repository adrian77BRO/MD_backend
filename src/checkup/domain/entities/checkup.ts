export class Checkup {
    constructor(
        readonly id: number,
        readonly patient: string,
        readonly heartRate: number,
        readonly spo2: number,
        readonly temperature: number
    ) { }
}