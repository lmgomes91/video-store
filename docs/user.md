
### Users

**Create**

```
path: "/users"
type: "POST"
Auth: -
```

```json
Request:
BODY: {
  name: string;
  email: string;
  password: string;
}
```

```json
Response:
{
  "user": {
    "name": "Lucas2",
    "email": "lucas123@teste.com",
    "id": "26afba25-77da-42fb-853b-46cd265175df",
    "created_at": "2021-04-30T04:46:35.743Z",
    "updated_at": "2021-04-30T04:46:35.743Z"
  }
}
```

**Session**

```
path: "/session"
type: "POST"
Auth: -
```

```json
Request:
BODY: {
  email: string;
  password: string;
}
```

```json
Response:
{
  "name": "Lucas Gomes",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzNmE1ZDMwLWZiZTAtNGQ0Ny04NzZlLWExZWNmODhmNjBhNiIsIm5hbWUiOiJMdWNhcyBHb21lcyIsImlhdCI6MTYxOTY2MjA2MCwiZXhwIjoxNjE5NzQ4NDYwfQ.BdY710cSAmwt_yheoYsv5XKuEt169RqXqU8E7ZVLjHY"
}
```

**Update**

```
path: "/users"
type: "PUT"
Auth: Bearer Token - User Token
```

```json
Request:
BODY: {
  name?: string;
  email?: string;
  password?: string;
}
```

```json
Response:
{
  "user": {
    "id": "836a5d30-fbe0-4d47-876e-a1ecf88f60a6",
    "name": "Lucas",
    "email": "lucas@teste.com",
    "created_at": "2021-04-29T03:24:30.375Z",
    "updated_at": "2021-04-30T04:46:05.373Z"
  }
}
```

**Delete**

```
path: "/users"
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
BODY: {
    "message": "Deleted"
}
```

**List**

```
path: "/users"
type: "GET"
Auth: Bearer Token - Admin Token
```

```json
Request:
Query Params: {
  id?: string;
  name?: string;
  email?: string;
}
```

```json
Response:
{
  "users": [
    {
      "id": "836a5d30-fbe0-4d47-876e-a1ecf88f60a6",
      "name": "Lucas Gomes",
      "email": "lucas@teste.com",
      "created_at": "2021-04-29T03:24:30.375Z",
      "updated_at": "2021-04-29T04:13:51.529Z"
    }
  ]
}
```
