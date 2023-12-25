import React, { useState } from 'react';

export default function YearSelect(props) {
  const [selectedYear, setSelectedYear] = useState(0);

  const onYearChange = (e) => {
    const selectedYear = e.target.value;
    setSelectedYear(selectedYear);
    // console.log(selectedYear);
    const val =parseInt(selectedYear)
    props.Amount(val)
    // You can perform additional actions here if needed
  };

  // Create an array of years from props.min to props.max with the specified skip
  const yearOptions = [];
  for (let i = props.min; i <= props.max; i += props.skip) {
    yearOptions.push(i);
  }

  return (
    <div>
      <label htmlFor="yearSelect">Select a year:</label>
      <select id="yearSelect" value={selectedYear} onChange={onYearChange}>
        {yearOptions.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
