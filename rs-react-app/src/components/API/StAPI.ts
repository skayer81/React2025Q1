const url = 'https://stapi.co/api/v1/rest/animal/search';

export async function getAnimals() {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export async function getAnimal(name: string) {
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `name=${name}&title=${name}`,
  };

  const response = await fetch(url, init);
  const result = await response.json();
  return result;
}
