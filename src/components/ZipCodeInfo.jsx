import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

const ZipCodeInfo = ({pincode}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    const fetchData = async () => {
      const country = 'IN';
      const zipCode = `${pincode}`; 
      const apiUrl = `https://api.zippopotam.us/${country}/${zipCode}`;
    
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          setError(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        setError(`An error occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [pincode]);

  return (
    <div className='no-scrollbar overflow-y-auto'>
      {loading && <TailSpin
                      height="80"
                      width="80"
                      color="#4fa94d"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                  />}
      {error && <p className='text-headingColor text-lg font-semibold text-center'>{error}</p>}
      {data && (
        <div>
          <h2 className='text-headingColor text-lg font-semibold text-center'>Zip Code Information</h2>
          <p className='text-headingColor text-lg font-semibold py-2'>Country: {JSON.stringify(data.country)}</p>
          
           {
            data.places.map((place) => 
            <div className='text-headingColor text-lg font-semibold py-2'>
              <p>State: {place.state}</p>
            <p>Places name: {JSON.stringify(place['place name'])}</p>
            </div>
            
            )
           }
        </div>
      )}
    </div>
  );
};

export default ZipCodeInfo;