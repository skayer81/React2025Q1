import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage(): [string, (newRequest: string) => void] {
  const FIELD_NAME = 'skayer81ReactLS';

  const loadRequest = useCallback(function () {
    if (!hasSave()) {
      return '';
    }
    try {
      const data = JSON.parse(localStorage.getItem(FIELD_NAME) ?? '');
      return data;
    } catch {
      return '';
    }
  }, []);

  const [request, setData] = useState(loadRequest());

  function hasSave() {
    return localStorage.getItem(FIELD_NAME) !== null;
  }

  function saveData(newRequest: string) {
    localStorage.setItem(FIELD_NAME, JSON.stringify(newRequest));
    setData(newRequest);
  }

  useEffect(() => {
    const request = loadRequest();
    setData(request);
  }, [loadRequest]);

  return [request, saveData];
}
