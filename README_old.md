# video-store

## Routes

    path:  http://localhost:3333

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
  attribute?: string;
  value?: any;
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
        "title": "filme3",
        "director": "diretor3",
        "amount": 3,
        "id": "f80f2511-2f12-4f65-99b6-c3b8921d1b90",
        "created_at": "2020-11-19T09:53:48.666Z",
        "updated_at": "2020-11-19T09:53:48.666Z"
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
        "id": "f80f2511-2f12-4f65-99b6-c3b8921d1b90",
        "title": "filme3",
        "director": "diretor3",
        "amount": 4,
        "created_at": "2020-11-19T09:53:48.666Z",
        "updated_at": "2020-11-19T09:55:43.509Z"
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
    "updatedMovie": {
        "id": "f80f2511-2f12-4f65-99b6-c3b8921d1b90",
        "title": "filme3",
        "director": "diretor3",
        "amount": 4,
        "created_at": "2020-11-19T09:53:48.666Z",
        "updated_at": "2020-11-19T09:55:43.509Z"
    }
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
  attribute?: string;
  value?: any;
}
```

```json
Response:
{
    "movies": [
        {
            "id": "c3289ff8-9606-452b-84c7-92550fdc20ba",
            "title": "filme3",
            "director": "diretor3",
            "amount": 2,
            "created_at": "2020-11-19T08:07:42.296Z",
            "updated_at": "2020-11-19T09:18:08.823Z"
        },
        {
            "id": "ae26aa76-fdbe-480e-905a-45aca95dbc1f",
            "title": "filme1",
            "director": "diretor1",
            "amount": 2,
            "created_at": "2020-11-18T08:43:46.518Z",
            "updated_at": "2020-11-19T09:34:36.986Z"
        }
}
```

### Rent

**Create**

```
path: "/rent"
type: "POST"
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
    "message": "filme3 rented!",
    "name": "Lucas"
}
```

**Delete**

```
path: "/rent"
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
    "name": "Lucas"
}
```

**List**

```
path: "/rent"
type: "GET"
Auth: Bearer Token - Admin Token
```

```json
Request:
Query Params: {
  attribute?: string;
  value?: any;
}
```

```json
Response:
{
    "rents": [
        {
            "id": "ce521a69-8957-4f0c-90c8-7fad0756d0af",
            "user_id": "571d213d-e294-4ef9-8a55-63f505f83d12",
            "movie_id": "c3289ff8-9606-452b-84c7-92550fdc20ba"
        },
        {
            "id": "23075a35-8b3c-4813-8420-5b0bb7af886a",
            "user_id": "571d213d-e294-4ef9-8a55-63f505f83d12",
            "movie_id": "c3289ff8-9606-452b-84c7-92550fdc20ba"
        }
}
```

## Database

**Configuration**: All configuration can be found at ormconfig.json

**Tables**: All table schemas are available at migrations folder

    To create the tables at SQL DataBase, run:
      npm run typeorm migration:run

## Initialize Project

    Install packages: npm i
    Run application: npm start

#### Developed By

    Lucas M Gomes
    lgomes@post.com
