var request = require("request");

var options = { method: 'GET',
  url: 'https://monikaproject.au.auth0.com/oauth/token',
  headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UYzBRVGt6UlRReE5UaENSVE5DTWpRM1JqbEdOalEzUmpNd00wVTFSamxEUmpRNU9EUTJSUSJ9.eyJpc3MiOiJodHRwczovL21vbmlrYXByb2plY3QuYXUuYXV0aDAuY29tLyIsInN1YiI6ImZDd2tFdlVScDZEbmJIeGE0MkpTc2M3UDJMalFqdUJEQGNsaWVudHMiLCJhdWQiOiJodHRwczovL21vbmlrYXByb2plY3QuYXUuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MjQwNTU2MTUsImV4cCI6MTUyNDE0MjAxNSwiYXpwIjoiZkN3a0V2VVJwNkRuYkh4YTQySlNzYzdQMkxqUWp1QkQiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.PYPmGNjOVFp35CLGFB8Y1NbfF-mdudC60Cce3IJFxZ57_edAtZrVUkVlpR9CxDL5HEYaDH0mLaXl0HNOZNBiXqEgDWz1Zwy-F_4aGTEm3mO0yDrSgHPHes9lA4-nriTyYaKRAMtX11XFlDTcdg5Ua6yRLgBZgSPje-WjE7i43rFC7sIK_XSURlxXHh0YxEKALJ9ItJpclWCHf6GYLQXJxrXhTZzL8b4ieentVYilO0DpdFvb_Fp4NENW6xp7fpQ-HIhWm_u3wvNYL7yR91sf8N9Z7-bmKFJ_JPwIlrVwO-9LBoHI8VdakHqFdm1yqKGt2H7joGKSxunGTn3iUtrqGw' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});