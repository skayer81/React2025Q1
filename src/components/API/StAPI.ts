const url = 'https://stapi.co/api/v1/rest/animal';

export async function getAnimals(pageNumber: string) {
  const response = await fetch(
    `${url}/search?pageNumber=${pageNumber}&pageSize=10`
  );
  const result = await response.json();
  return result;
}

export async function getSearchAnimals(name: string, pageNumber: string) {
  if (!name) return getAnimals(pageNumber);
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `name=${name}&title=${name}`,
  };

  const response = await fetch(
    `${url}/search?pageNumber=${pageNumber}&pageSize=10`,
    init
  );
  const result = await response.json();
  return result;
}

export async function getAnimalByID(uid: string) {
  const response = await fetch(`${url}?uid=${uid}`);
  const result = await response.json();
  return result;
}
