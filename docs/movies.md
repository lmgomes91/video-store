### Movies

**Create**

```
path: "/movies"
type: "POST"
Auth: Bearer Token - Admin Token
```

```json
Request:
BODY: {
  title: string;
  director: string;
  amount: number;
}
```

```json
Response:
{
  "movie": {
    "title": "Filme 2",
    "director": "ele",
    "amount": 10,
    "id": "d00e5fd9-52b3-41b5-a51e-ce6a571b7df6",
    "created_at": "2021-04-29T04:19:00.156Z",
    "updated_at": "2021-04-29T04:19:00.156Z"
  }
}
```

**Update**

```
path: "/movies"
type: "PUT"
Auth: Bearer Token - Admin Token
```

```json
Request:
BODY: {
  id: string;
  title?: string;
  director?: string;
  amount?: number;
}
```

```json
Response:
{
  "updatedMovie": {
    "id": "01dd85d8-d1aa-476c-ba3e-22dbc91da7a6",
    "title": "Filme 4",
    "director": "ele",
    "amount": 5,
    "created_at": "2021-04-29T04:17:48.174Z",
    "updated_at": "2021-04-29T04:27:11.822Z"
  }
}
```

**Delete**

```
path: "/movies"
type: "DELETE"
Auth: Bearer Token - Admin Token
```

```json
Request:
BODY: {
  id: string;

}
```

```json
Response:
{
  "deleted": true
}
```

**List**

```
path: "/movies"
type: "GET"
Auth: Bearer Token - User Token
```

```json
Request:
Query Params: {
  id?: string;
  title?: string;
  director?: string;
  amount?: number;
}
```

```json
Response:
{
  "movies": [
    {
      "id": "d00e5fd9-52b3-41b5-a51e-ce6a571b7df6",
      "title": "Filme 2",
      "director": "ele",
      "amount": 10,
      "created_at": "2021-04-29T04:19:00.156Z",
      "updated_at": "2021-04-29T04:19:00.156Z"
    },
    {
      "id": "52f3416a-910e-4bf5-b9e4-9e4e56d84e4b",
      "title": "Filme 1",
      "director": "EU",
      "amount": 5,
      "created_at": "2021-04-29T03:52:55.627Z",
      "updated_at": "2021-04-29T05:08:30.154Z"
    }
  ]
}
```
