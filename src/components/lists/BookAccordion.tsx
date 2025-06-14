import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type Book = {
  id: string;
  title: string;
  author: string;
  started?: string;
  completed?: string;
  rating?: number;
  percent?: number;
};

export function BookAccordion({ books }: { books: Book[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {books.map((book) => (
        <AccordionItem
          key={book.id}
          value={book.id}
        >
          <AccordionTrigger>{book.title}</AccordionTrigger>

          <AccordionContent className="text-xs text-gray-500">
            <p>Author: {book.author}</p>

            {book.started && <p>Started: {book.started}</p>}

            {book.completed && <p>Completed: {book.completed}</p>}

            {book.rating && <p>Rating: {book.rating}</p>}

            {book.percent && <p>Completed: {book.percent}%</p>}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
