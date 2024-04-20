import { SocketRepository } from '../domain/repositories/socketRepository';
import { Event } from '../domain/entities/events';
import { CheckupInfo } from '../../checkup/domain/entities/checkupInfo';
import { Socket, io } from 'socket.io-client';

export class SocketIORepository implements SocketRepository {
    constructor(private readonly url: string) { }

    async connect(): Promise<any> {
        return new Promise<Socket>((resolve, reject) => {
            try {
                const socket = io(this.url);
                resolve(socket);
            } catch (error: any) {
                reject(error);
            }
        })
    }

    async notify(eventEmit: Event, notif: CheckupInfo): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            try {
                const socket = await this.connect();
                socket.emit(eventEmit, notif);
                resolve();
            } catch (error: any) {
                reject(error);
            }
        })
    }
}