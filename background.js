const options = {
method: 'POST',
headers: {
    Accept: 'application/json',
    'Notion-Version': '2022-02-22',
    'Content-Type': 'application/json',
    Authorization: 'Bearer secret_3wwZ6huQysb4ms8FBvLhYdZ6YcGhbLMJMZrrrEkq7O8'
},
body: JSON.stringify({
    parent: '48016554faa44ca491cb0756b4c6f1f9',
    properties: '속성'
})
};

fetch('https://api.notion.com/v1/pages', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
