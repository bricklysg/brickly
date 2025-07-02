
import React, { useEffect, useState } from "react";
import CONFIG from "../config";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  image_url: string;
}

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch(`${CONFIG.API_BASE_URL}/api/properties`)
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Failed to load properties", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏠 Brickly Real Estate</h1>

      <form style={{ marginBottom: "2rem" }}>
        <input type="text" placeholder="Location" />
        <select>
          <option>Any Property Type</option>
          <option>HDB</option>
          <option>Condo</option>
          <option>Landed</option>
        </select>
        <select>
          <option>Any Listing Type</option>
          <option>Buy</option>
          <option>Rent</option>
        </select>
        <select>
          <option>Bedrooms</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
        <input type="number" placeholder="Min Price" />
        <input type="number" placeholder="Max Price" />
        <button type="submit">Search</button>
      </form>

      <h2>Listings:</h2>
      {properties.length === 0 ? (
        <p>No properties available.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
          {properties.map((property) => (
            <div key={property.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <img
                src={property.image_url}
                alt={property.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>${property.price.toLocaleString()}</p>
              <p>{property.bedrooms} bedrooms</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}