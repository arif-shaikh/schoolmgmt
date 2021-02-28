import { Comment } from './comment';

export class SchoolEvent {
    id: number;
    date: Date;
    name: string;
    description: string;

    comments: Comment[] = [];
}
