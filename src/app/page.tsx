'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        const result = await response.json();
        setData(result.message); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.page}>
      Hello world!
      <h1>API Response:</h1>
      <p>{data ? data : 'Loading...'}</p>
    </div>
  );
}
