import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Props {
  data: {
    title: string;
    list: string[];
  }[];
}

export function ListAccordion({ data }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {data.map(({ title, list }) => (
        <AccordionItem
          key={title}
          value={title}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent className="text-xs text-gray-500">
            {list.map((item, idx) => (
              <div
                key={idx}
                className="flex-row-standard-start gap-3"
              >
                <p className="w-3">{idx + 1}.</p>
                <p>{item}</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
