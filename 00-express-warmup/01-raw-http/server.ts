import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';

type Task = { id: number; title: string; done: boolean };

const tasks: Task[] = [
  { id: 1, title: 'Learn HTTP', done: false },
  { id: 2, title: 'Learn NestJS', done: false },
];

function sendJson(res: ServerResponse, status: number, data: unknown): void {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function handler(req: IncomingMessage, res: ServerResponse): void {
  // Everything the client sent is on `req`: method, url, headers (and body as a stream).
  console.log(`${req.method} ${req.url}`);

  if (req.method === 'GET' && req.url === '/tasks') {
    return sendJson(res, 200, tasks);
  }

  sendJson(res, 404, { message: `Cannot ${req.method} ${req.url}` });
}

const PORT = 3000;
createServer(handler).listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
