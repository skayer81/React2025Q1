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
    // if (!hasSave()) return;
    const request = loadRequest();
    setData(request);
    // const request = localeStorageAPI.loadRequest();
    //  setInputValue(request);
    //  props.onClick(request);
  }, [loadRequest]);

  return [request, saveData];
}

// export class LocaleStorageAPI {
//   #FIELD_NAME = 'skayer81ReactLS';

//   saveRequest(request: string) {
//     localStorage.setItem(this.#FIELD_NAME, JSON.stringify(request));
//   }

//   loadRequest() {
//     try {
//       const data = JSON.parse(localStorage.getItem(this.#FIELD_NAME) ?? '');
//       return data;
//     } catch {
//       return '';
//     }
//   }

//   hasSave() {
//     return localStorage.getItem(this.#FIELD_NAME) !== null;
//   }
// }
