FROM denoland/deno:2.1.4

EXPOSE 8888

WORKDIR /app
RUN adduser --system http-sink
USER http-sink

# Cache deps layer
COPY deno.json .
COPY deno.lock .
RUN deno install

COPY . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]
