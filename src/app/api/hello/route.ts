// import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Hello from API!' }),
    { status: 200 }
  );
}