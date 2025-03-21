// Health check endpoint for Dori Fashion application
// This file is used by Vite to serve a health check endpoint

export default function handler(req: Request) {
  return new Response('OK', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}