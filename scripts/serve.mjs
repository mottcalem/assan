import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../assan-landing/dist/', import.meta.url));
const initialPort = Number(process.env.PORT || 5173);
let port = initialPort;
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("PORT 1–65535 arasında bir tam sayı olmalıdır.");
  process.exit(1);
}
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let path = resolve(root, '.' + pathname);
    if (path !== resolve(root) && !path.startsWith(resolve(root) + sep)) {
      res.writeHead(403); res.end('Forbidden'); return;
    }
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    const data = await readFile(path);
    res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
});
server.on('error', error => {
  if (error.code === 'EADDRINUSE' && port < Math.min(initialPort + 20, 65535)) {
    console.log(`${port} portu kullanımda; ${port + 1} deneniyor…`);
    port += 1;
    server.listen(port, '127.0.0.1');
    return;
  }
  console.error(error.message);
  process.exit(1);
});
server.on('listening', () => console.log(`AŞSAN yerel önizleme: http://127.0.0.1:${port}\nDurdurmak için Ctrl+C. Dosya değişikliklerini görmek için tarayıcıyı yenileyin.`));
server.listen(port, '127.0.0.1');
