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
  pathname: string;
}

const NavDropdown = ({ links, pathname }: Props) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const current = links.find((link) => link.href === pathname);

    setSelected(current?.title ?? "");
  }, [pathname, links]);

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
