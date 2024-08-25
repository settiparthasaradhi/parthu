import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Assessment from './Assessment';
import Loading from './Loading';
const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let tempArray = [];
      for (let i = 1; i <= 10; i++) {
        try {
          const response = await axios.get(`https://iohpo6uldwgeqgeiddliptycke0gefgy.lambda-url.ap-south-1.on.aws/${i}`);
          tempArray.push(response.data);
        } catch (error) {
          console.error(`Error fetching data for URL ${i}:`, error);
        }
      }
      setData(tempArray);
      setIsLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div><Loading /></div>; 
  }

  return (
    <div>
      <Assessment questions={data} />
    </div>
  );
};

export default FetchDataComponent;
