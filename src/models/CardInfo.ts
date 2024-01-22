export class CardInfo {
    activityName: string;
    category: string;
    description: string;
    tags?: string[];
    image?: string;
    date: Date;
    duration: Duration;
    onlineEvent?: string;
    presentialEvent?: PresentialEvent;
    organizers: string[];

    constructor(activityName: string, category: string, description: string, date: Date, organizers: string[], 
        duration: Duration, onlineEvent?: string, presentialEvent?: PresentialEvent,  tags?: string[], image?: string) {
        this.activityName = activityName;
        this.category = category;
        this.description = description;
        this.tags = tags;
        this.image = image;
        this.date = date;
        this.duration = duration;
        this.onlineEvent = onlineEvent;
        this.presentialEvent = presentialEvent;
        this.organizers = organizers;
    

    }
}
    export interface Duration{
        timeStart: string;
        timeEnd: string;
    }
    interface PresentialEvent{
        placeName: string;
        urlPlace?: string;
        availableSeats: number;
    }