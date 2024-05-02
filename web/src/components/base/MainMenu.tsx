import { Listbox, ListboxItem } from "@nextui-org/react";
export const MainMenu = () => {
  return (
    <div>
      <Listbox aria-label="Listbox Variants" color="primary" variant="flat">
        <ListboxItem key="new">Opción 1</ListboxItem>
        <ListboxItem key="copy">Opción 2</ListboxItem>
        <ListboxItem key="edit">Opción 2</ListboxItem>
      </Listbox>
    </div>
  );
};
