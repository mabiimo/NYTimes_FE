import { Input } from "@material-tailwind/react";

export default function SearchComponent() {
  const search = (q) => {
    console.log({ q });
  };
  return (
    <div className="w-auto items-center justify-center my-7 px-14" onChange={({ target }) => search(target.value)}>
      <Input label="Cari Kata Kunci" />
    </div>
  );
}
