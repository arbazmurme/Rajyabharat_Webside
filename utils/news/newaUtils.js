const Baseurl = process.env.NEXT_PUBLIC_API_URL;

export const newsByslugurl = async (slugurl) => {
  try {
    const res = await fetch(
      `${Baseurl}/api/v1/news/findbyurl/${slugurl}`,
      {
        credentials: "include",
      },
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
