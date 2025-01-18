interface Book {
  title: string;
  author: string;
}

interface BookReading extends Book {
  started: string;
}

interface BookCompleted extends Book {
  completed: string;
  rating: number;
}

interface BookDNF extends Book {
  percent: number;
}

export interface BookData {
  reading: BookReading[];
  completed: BookCompleted[];
  dnf: BookDNF[];
}
