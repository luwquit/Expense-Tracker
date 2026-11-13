import { db } from "@/data/db";
import type { Category, Saving } from "@/types/types";
import { useLiveQuery } from "dexie-react-hooks";
import { Field, FieldLabel } from "../ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "../ui/select";
import { useEffect, useState } from "react";

interface allItemsArray {
  label: string,
  value: string
}

export function CategoryPickInput({setCategoryInput}) {
  const [input, setInput] = useState<string | null>(null);

  useEffect(() => {
    if (!input) return;
    
    const [type, id] = input.split(':');
    setCategoryInput({id: Number(id), type})
    
  }, [input, setCategoryInput])

  const categories: Category[] | undefined = useLiveQuery(() => db.categories.toArray(), []);
  const savings: Saving[] | undefined = useLiveQuery(() => db.savings.toArray(), []);
  if (!categories) return;
  if (!savings) return;

  const categoriesSelectArray = categories.map((category) => ({label: category.name, value: category.id}));

  const savingsSelectArray = savings.map((saving) => ({label: saving.name, value: saving.id}))

  const allItems: allItemsArray[] = [
    ...categoriesSelectArray.map((c) => ({value: `category:${c.value}`, label: c.label})),
    ...savingsSelectArray.map((s) => ({value: `saving:${s.value}`, label: s.label}))
  ];

  return (
    <>
      <Field className="pop-up-input">
        <FieldLabel htmlFor="form-category">Category</FieldLabel>
        <Select items={allItems} value={input} onValueChange={setInput}>
          <SelectTrigger id="form-category" size="sm" className="cursor-pointer p-0 pl-5">
            <SelectValue placeholder='Select category' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categoriesSelectArray.map((category) => (
                <SelectItem key={`category:${category.value}`} value={`category:${category.value}`}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Savings</SelectLabel>
              {savingsSelectArray.map((saving) => (
                <SelectItem key={`saving:${saving.value}`} value={`saving:${saving.value}`}>
                  {saving.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </>
  );
}
