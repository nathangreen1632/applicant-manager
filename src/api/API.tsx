const searchGithub = async () => {
  try {
    const start : number = Math.floor(Math.random() * 100000) + 1;
    console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );
    console.log('Response:', response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    console.log('Data:', data);
    return data;
  } catch (err) {
    console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser : (username : string) => Promise<any> = async (username: string) => {
  try {
    const response : Response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });
    const data : string = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
