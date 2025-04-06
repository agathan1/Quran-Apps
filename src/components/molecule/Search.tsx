import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";

type PropsSearch = {
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: () => void
};

export default function Search({
  placeholder,
  onChange,
  value,
  onKeyDown,
  onClick,
}: PropsSearch) {

  const handleSearch = () => {
    console.log("search");
  }
  return (
    <div className="flex rounded-md bg-secondary/20 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-secondary h-14">
      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
        {/* <button onClick={() => console.log("search")}> */}
        <button onClick={onClick}>
          <SearchIcon className="size-8 mx-4 my-auto" />
        </button>
        {/* <select
          id="country"
          name="country"
          autoComplete="country"
          aria-label="Country"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        >
          <option>US</option>
          <option>CA</option>
          <option>EU</option>
        </select> */}
        {/* <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        /> */}
      </div>
      <input
        id="phone-number"
        name="phone-number"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
      />
    </div>
  );
}
