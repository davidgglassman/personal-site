import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";

interface Props {
  links: {
    href: string;
    title: string;
  }[];
}

const NavDropdown = ({ links }: Props) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    const current = links.find((link) => link.href === currentPath);

    setSelected(current?.title ?? "");
  }, [links]);

  const handleChange = (value: string) => {
    const targetLink = links.find((link) => link.title === value);

    if (targetLink) {
      window.location.href = targetLink.href;
    }
  };

  return (
    <Select
      value={selected}
      onValueChange={handleChange}
    >
      <SelectTrigger className="xs:w-48 w-40">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {links.map((link, idx) => (
          <SelectItem
            key={idx}
            value={link.title}
          >
            {link.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default NavDropdown;
