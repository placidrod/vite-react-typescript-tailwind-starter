import React from 'react';
import { useQuery } from 'react-query';
import ErrorBoundary from './error-boundary';

type Data = {
  id: number;
  name: string;
};

async function fetchData(): Promise<Data[]> {
  const response = await fetch('http://localhost:8000/moviegoers');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function DataFetching() {
  const { data, isLoading, isError, error } = useQuery('data', fetchData, {
    retry: false,
  });

  if (isLoading) {
    console.log('Placid logging data loading....');
  }

  if (isError) {
    throw new Error('Error while fetching data' + error);
  }

  console.log('Placid Logging: data ', data);

  return (
    <div>
      <h1>Fetching data with React Suspense</h1>
      <div>
        {/* replace the following with just {data} to demo jsx error */}
        {data?.map((d) => (
          <div key={d.id}>{d.name}</div>
        ))}
      </div>
    </div>
  );
}

function FetchAndShow() {
  return (
    <div>
      <ErrorBoundary
        fallback={<div className="text-red-700">Error shown in fallback!</div>}
      >
        <React.Suspense fallback={<div>Loading...</div>}>
          <DataFetching />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default FetchAndShow;
