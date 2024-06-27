import { useState, useEffect } from "react";
type Tlist = { [key: string]: string }[];

export function useFetch(
  url: string,
  initialState?: Tlist
): { imageList: Tlist; setList: (url: string) => void } {
  const [imageList, setImageList] = useState<Tlist>([]);
  initialState && setImageList(initialState);
  useEffect(() => {
    if (url) {
      try {
        setList(url);
      } catch (errorMessage) {
        console.error(errorMessage);
      }
    }
  }, [url]);

  async function setList(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    if (typeof data === "object" && data.length > 0) {
      setImageList([...data]);
    }
  }
  return { imageList, setList };
}
