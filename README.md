# Rent Syatem

## Installation

### 1. Install dependencies

```sh
npm i
```

## Development

### Start dev server

Starting the dev server also starts MongoDB as a service in a docker container using the compose script at `docker-compose.dev.yml`.

```sh
npm run dev
```

Running the above commands results in

- 🌏**API Server** running at `http://localhost:3000`
- ⚙️**Swagger UI** at `http://localhost:3000/__VERSION__/dev/api-docs`
- 🛢️**MongoDB** running at `mongodb://localhost:27017`

## Packaging and Deployment

### 1. Run with docker-compose

```sh
docker-compose up
```

### 2. Run with docker

```sh
docker build -t api-server .
docker run -t -i -p 3000:3000 api-server
```

### 3. Build and run

```sh
npm run build && npm run start
```

---

## Environment

To edit environment variables, create a file with name `.env` and copy the contents from `.env.example` to start with.

| Var Name                  | Type     | Default                           | Description                             |
| ------------------------- | -------- | --------------------------------- | --------------------------------------- |
| NODE_ENV                  | string   | `development`                     | API runtime environment. eg: `staging`  |
| PORT                      | number   | `3000`                            | Port to run the API server on           |
| MONGO_URL                 | string   | `mongodb://localhost:27017/books` | URL for MongoDB                         |
| SECRET_HEX                | string   | `827d263847500d926a520b...`       | HEX string to secure JWT                |
| ACCESS_TOKEN_LIFETIME_MIN | number   | `60`                              | Access token TTL in mins                |
| BCRYPT_N_ROUNDS           | number   | `12`                              | Number of round to generate Bcrypt salt |
| WHITELIST_ORIGINS         | string[] | `["http://localhost"]`            | White list origins                      |
| SMTP_USER                 | string   | `project`                         | SMTP user name                          |
| SMTP_PASS                 | string   | `secret`                          | SMTP password                           |
| SMTP_PORT                 | number   | `1025`                            | SMTP port                               |
| SMTP_HOST                 | string   | `localhost`                       | SMTP localhost                          |
| SMTP_FROM_EMAIL           | string   | `no-reply@example.com`            | SMTP from email                         |

## Logging

The application uses [winston](https://github.com/winstonjs/winston) as the default logger. The configuration file is at `src/logger.ts`.

- All logs are saved in `./logs` directory and at `/logs` in the docker container.
- The `docker-compose` file has a volume attached to container to expose host directory to the container for writing logs.
- Console messages are prettified
- Each line in error log file is a stringified JSON.

### Directory Structure

```sh
├── .vscode
│   └── settings.json
├── scripts
│   └── dev.sh
├── src
│   ├── config
│   │   └── config.ts
│   ├── db
│   │   └── mongo
│   │       └── connection.ts
│   ├── errors
│   │   └── index.ts
│   ├── middleware
│   │   └── handle-error-middleware.ts
│   ├── models
│   │   └── Book.ts
│   ├── public
│   │   └── index.html
│   ├── services
│   │   ├── jwt.ts
│   │   └── password.ts
│   ├── v1
│   │   ├── controllers
│   │   │   └── book
│   │   │       ├── add.ts
│   │   │       ├── all.ts
│   │   │       ├── index.ts
│   │   │       └── search.ts
│   │   ├── index.ts
│   │   └── openapi.json
│   ├── app.ts
│   ├── logger.ts
│   ├── routes.ts
│   └── server.ts
├── tests
│   ├── errors
│   │   └── ApplicationError.test.ts
│   ├── middleware
│   │   └── handle-error-middleware.test.ts
│   ├── models
│   │   └── Book.test.ts
│   └── app.test.ts
├── .env
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .travis.yml
├── Dockerfile
├── README.md
├── docker-compose.dev.yml
├── docker-compose.yml
├── jest.config.js
├── nodemon.json
├── package-lock.json
├── package.json
└── tsconfig.json
```
