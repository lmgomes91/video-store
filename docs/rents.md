### Rent

**rentMovie**

```
path: /rents
type: "POST"
Auth: Bearer Token - User Token
```

```json
Request:
BODY: {
  devolution: string;
  movieId: string;
}
```

```json
Response:
{
    "message": "filme3 rented!",
    "name": "Lucas"
}
```

**returnMovie**

```
path: "/rents"
type: "DELETE"
Auth: Bearer Token - User Token
```

```json
Request:
BODY: {
  movie_id: string;
}
```

```json
Response:
{
    "mesage": "filme3 returned",
}
```

**List**

```
path: "/rents"
type: "GET"
Auth: Bearer Token - Admin Token
```

```json
Request:
Query Params: {
  id?: string,
  user_id?: string,
  movie_id?: string
  devolution?: string
}
```

```json
Response:
{
  "rents": [
    {
      "id": "d48b5462-de0f-4fbc-9415-2e9179779924",
      "user_id": "836a5d30-fbe0-4d47-876e-a1ecf88f60a6",
      "movie_id": "52f3416a-910e-4bf5-b9e4-9e4e56d84e4b",
      "devolution": "2021-04-29T02:02:30.946Z"
    }
  ]
}
```
