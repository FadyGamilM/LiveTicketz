# The builder stage
FROM golang:1.21.1-alpine3.18 AS builder

WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies.
# If the go.mod and the go.sum files are not changed,
# then Docker's layer caching will ensure that
# go mod download is not called every time we build the Docker image.
RUN go mod download

# Copy the rest of the code
COPY . .

RUN go build -o auth ./cmd/main.go

# The runtime stage
FROM alpine:3.18

WORKDIR /app

COPY --from=builder /app/auth .

COPY ./config /app/config

# default command once container is up
CMD [ "/app/auth" ]
