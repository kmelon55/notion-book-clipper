const options = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: 'Bearer secret_3wwZ6huQysb4ms8FBvLhYdZ6YcGhbLMJMZrrrEkq7O8'
    }
  };
  
  fetch('https://api.notion.com/v1/databases/48016554faa44ca491cb0756b4c6f1f9', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));