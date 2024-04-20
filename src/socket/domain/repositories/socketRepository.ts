import { Event } from '../entities/events';
import { CheckupInfo } from '../../../checkup/domain/entities/checkupInfo';
export interface SocketRepository {
    connect(): Promise<any>;
    notify(event: Event, notif: CheckupInfo): Promise<void>;
}