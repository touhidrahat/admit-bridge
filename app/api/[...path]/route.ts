import {NextRequest} from 'next/server';
import {forward} from '@/lib/backend-proxy';
export const runtime='nodejs';
export const dynamic='force-dynamic';
async function handle(request:NextRequest,{params}:{params:Promise<{path:string[]}>}){return forward(request,(await params).path);}
export {handle as GET,handle as POST};
