export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=SM3CrrI0w0cJjthsBp1OIQ1wQguHr4Tx&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  // console.log(gifs);
  return gifs;
};
