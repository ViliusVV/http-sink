const PORT = 8888;

function nowTime() {
    return new Date().toISOString().replace("T", " ").replace("Z", "");
}

async function requestHandler(req: Request)  {
  // Print path
  const url = new URL(req.url);
  const path = url.pathname + url.search;
  const time =  nowTime();
  console.log(`[${time}] ${req.method} ${path}`);

  // log body if present
  if (req.body) {
      console.log(await req.json());
  }

  return new Response("OK");
}


if (import.meta.main) {
  console.log("HTTP Sink started on part:" + PORT)

  Deno.serve(
    { port: 8888},
    requestHandler
  );
}
