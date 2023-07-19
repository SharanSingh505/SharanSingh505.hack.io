import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ padding: "30px 30px 40px 0" }}>
      <Input
        placeholder="Type your problem here"
        style={{ width: "600px" }}
        value={searchQuery}
        onChange={handleInputChange}
      />
    </form>
  );
}