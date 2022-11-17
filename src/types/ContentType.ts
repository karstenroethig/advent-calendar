export interface ContentType {
  days: DayType[];
}

export interface DayType {
  day: number;
  content: DayContentType;
}

export interface DayContentType {
  title: string;
  episodeTitle: string;
  reader: string;
  audioFile: string;
}
