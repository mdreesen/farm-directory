import { useEffect, useState } from 'react';

export function useFormatDate(time: number): string {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    setDate(new Date(time).toLocaleString());
  }, []);

  return date;
}
