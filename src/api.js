export const getCharacterFromApi = () => {
  return fetch("https://swapi.dev/api/people/").then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};
