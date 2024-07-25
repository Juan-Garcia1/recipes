"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Form.scss";

const SearchForm = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/?search=${search}`);

    setSearch("");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z-\s]*$/;
    if (regex.test(value)) {
      setSearch(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form__input"
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="I want to make..."
      />
      <button type="submit" className="form__btn">
        <Image src="/search-icon.svg" width={18} height={18} alt="Search" />
      </button>
    </form>
  );
};

export default SearchForm;
