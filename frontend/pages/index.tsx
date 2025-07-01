
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Brickly Real Estate</h1>
      <form>
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
    </div>
  );
}
