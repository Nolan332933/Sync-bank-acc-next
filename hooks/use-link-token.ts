import { useEffect, useState } from "react";

export const useLinkToken = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("/api/link-token")
      .then((res) => res.json())
      .then((data) => setValue(data.token));
  }, []);

  return value;
};
