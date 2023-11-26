// import React, { useEffect, useState } from 'react'import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

interface GithubData {
  followers: number;
  avatar_url: string;
  // Add more properties if needed based on the actual response structure
}

function Github() {
  const data = useLoaderData() as GithubData;

  // If you prefer using useState and useEffect, you can uncomment and use the following:
  // const [data, setData] = useState<GithubData>({ followers: 0, avatar_url: '' });
  // useEffect(() => {
  //   fetch('https://api.github.com/users/raselahmedb')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async (): Promise<GithubData> => {
  const response = await fetch('https://api.github.com/users/raselahmedb');
  return response.json();
};
