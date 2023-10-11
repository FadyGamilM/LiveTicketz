# The builder stage
FROM golang:1.21.1-alpine3.18 AS builder

WORKDIR /app

COPY go.mod go.sum ./

RUN go get ./...

COPY . .

RUN go build -o auth ./cmd/main.go

# The runtime stage
FROM alpine:3.18

WORKDIR /app

COPY --from=builder /app/auth .

COPY ./config /app/config

# default command once container is up
CMD [ "/app/auth" ]