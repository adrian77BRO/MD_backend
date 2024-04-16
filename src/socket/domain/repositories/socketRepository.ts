import { Event } from '../entities/event';
import { Checkup } from '../../../checkup/domain/entities/checkup';

export interface SocketRepository {
    connect(): Promise<any>;
    notify(event: Event, notif: Checkup): Promise<void>;
}