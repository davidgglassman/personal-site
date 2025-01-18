// Books

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

// Courses

type CourseType = "Online" | "In Person";

interface Course {
  name: string;
  where: string;
  link: string;
  type: CourseType;
}

export interface CourseActive extends Course {
  started: string;
}

export interface CourseUpcoming extends Course {
  starting: string;
}

export interface CourseCompleted extends Course {
  completed: string;
  rating: number;
}

export interface CourseData {
  active: CourseActive[];
  upcoming: CourseUpcoming[];
  completed: CourseCompleted[];
}
