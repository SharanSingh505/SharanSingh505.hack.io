import React, { useState } from "react";
//import new_logo from "./logo.svg";
import "./App.css";
import { Center, Container, Divider, Heading } from "@chakra-ui/react";
import { SearchBar } from "./components/SearchBar";

interface AppInfo {
  name: string;
  description: string;
}

function App() {
  const [searchResults, setSearchResults] = useState<AppInfo[]>([]);

  const handleSearch = (query: string) => {
    if (query.toLowerCase() === "what are the best mental apps?") {
      // Define your predetermined boxes here
      const predeterminedApps: AppInfo[] = [
        { name: "App 1", description: "Description of App 1" },
        { name: "App 2", description: "Description of App 2" },
        { name: "App 3", description: "Description of App 3" },
        { name: "App 4", description: "Description of App 4" },
      ];
      setSearchResults(predeterminedApps);
    } else {
      setSearchResults([]); // Clear search results if the query doesn't match
    }
  };

  return (
    <div className="App">
      <div style={{ "backgroundColor": "#bee3f8" }}>
        <Heading pt={8} pb={1} bg="#bee3f8">
          <Center mb={3}>
            <img src="MentalHealth.png" width="100" alt="Hackathon Logo" />
          </Center>
          <p>Mindset Miners</p>
        </Heading>
        <Container pb={8} bg="#bee3f8">
          Find the perfect solution for your mental health needs.
        </Container>
      </div>
      <Divider orientation="horizontal" borderWidth={3} borderColor="#2055A1" />
      <SearchBar onSearch={handleSearch} />

      <Divider orientation="horizontal" borderWidth={3} borderColor="#2055A1" />


      {/* Display predetermined boxes */}
      {searchResults.length > 0 && (
        <div style={{ "backgroundColor": "#bee3f8", "padding": "30px 0" }}>
          {searchResults.map((app, index) => (
            <div key={index} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
              <b>{app.name}</b>
              <div>{app.description}</div>
            </div>
          ))}
        </div>
      )}
      <div style={{ "backgroundColor": "#bee3f8", "padding": "30px 0 40px 0" }}>
        <b>Mindset Miners 2023</b>
        <div>DS/AI Hackathon</div>
        <b>Team Members</b>
        <div>
          Sakhee Desai, Abhishek Karwankar, Akash Parmar, Sharanjit Singh, Hasan Baker, and Moath Erqsous
        </div>
      </div>
    </div>
  );
}

export default App;
