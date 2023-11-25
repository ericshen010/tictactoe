import React, { useEffect, useState } from 'react';

function RandomQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    async function fetchRandomQuote() {
      const apiUrl = 'https://api.quotable.io/random';

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setQuote(data.content);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }

    fetchRandomQuote();
  }, []);

  return (
    <div className="random-quote">
      <h2>Random Quote:</h2>
      <p>{quote}</p>
    </div>
  );
}

export default RandomQuote;