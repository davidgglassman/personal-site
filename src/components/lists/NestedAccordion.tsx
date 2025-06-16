import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Props {
  data: {
    name: string;
    items: string[];
  }[];
}

export function NestedAccordion({ data }: Props) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      {data.map(({ name, items }) => (
        <AccordionItem
          key={name}
          value={name}
        >
          <AccordionTrigger className="capitalize">{name}</AccordionTrigger>
          <AccordionContent className="text-primary/50 text-xs">
            {items.map((item, idx) => (
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
