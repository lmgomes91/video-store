
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
        "name": "Lucas",
        "email": "lgomes@email.com",
        "id": "f7823f4e-91dc-4135-bfc0-f9632a349e70",
        "created_at": "2020-11-19T09:41:35.169Z",
        "updated_at": "2020-11-19T09:41:35.169Z"
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
    "name": "Lucas",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3ODIzZjRlLTkxZGMtNDEzNS1iZmMwLWY5NjMyYTM0OWU3MCIsIm5hbWUiOiJMdWNhcyIsImlhdCI6MTYwNTc2ODI0NywiZXhwIjoxNjA1ODU0NjQ3fQ.KeH5_kU3LwpN_tlFgUZoBDPMvipaq4QiA6YHN79khG4"
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
        "id": "3c414307-7b41-44cb-84c8-68e427b17e47",
        "name": "Lucas",
        "email": "lgomes@post.com",
        "created_at": "2020-11-19T06:54:22.441Z",
        "updated_at": "2020-11-19T09:45:12.125Z"
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
            "id": "571d213d-e294-4ef9-8a55-63f505f83d12",
            "name": "Lucas",
            "email": "lgomes@email2.com",
            "created_at": "2020-11-19T07:18:48.112Z",
            "updated_at": "2020-11-19T07:18:48.112Z"
        },
        {
            "id": "f7823f4e-91dc-4135-bfc0-f9632a349e70",
            "name": "Lucas",
            "email": "lgomes@email.com",
            "created_at": "2020-11-19T09:41:35.169Z",
            "updated_at": "2020-11-19T09:41:35.169Z"
        }
    ]
}
```
