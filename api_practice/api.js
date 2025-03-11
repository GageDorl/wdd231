async function getAccessToken() {
  const clientId = 'eb4cfac8b4244d869330611c03203b14';
  const clientSecret = '9191cc70fc5a4df09b11a13a8946ba2c';

  const response = await fetch('https://oauth.fatsecret.com/connect/token', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: new URLSearchParams({
          'grant_type': 'client_credentials',
          'scope': 'basic'
      })
  });

  const data = await response.json();
  console.log(data);
  return data.access_token;  // Store this token to use in API requests
}

getAccessToken();