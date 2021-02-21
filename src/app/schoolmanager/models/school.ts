import { Note } from './note';

export class SchoolEvent {
    id: number;
    date: Date;
    name: string;
    description: string;

    notes: Note[] = [];
}
