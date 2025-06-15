import { Card, CardContent } from "@/components/ui/card";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Props {
  item: {
    id: string;
    data: {
      company: string;
      years: string;
      url: string;
      roles: {
        other: { title: string; years: string }[];
      };
      items: {
        content: string;
        link?: { title: string; url: string } | null;
      }[];
    };
  };
}

export function ExperienceSection({ item }: Props) {
  return (
    <Card className="w-full">
      <CardContent className="-mt-4 -mb-5">
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          <AccordionItem
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger className="mt-1">
              <div className="flex-row-standard -mt-1 mr-3">
                <h4>{item.data.company}</h4>
                <p>{item.data.years}</p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-xs text-gray-500">
              <a
                className="block"
                href={item.data.url}
              >
                {item.data.url}
              </a>

              {item.data.roles.other.map((role, idx) => (
                <div
                  className="flex-row-standard"
                  key={`${role.title}-${idx}`}
                >
                  <p>{role.title}</p>
                  <p>{role.years} </p>
                </div>
              ))}

              {item.data.items.map((item, idx) => (
                <div
                  className="flex-col-standard"
                  key={`${item.content}-${idx}`}
                >
                  <li>{item.content}</li>
                  {item.link && <a href={item.link.url}>{item.link.title}</a>}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
