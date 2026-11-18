const backend='https://admitbridge.touhidrahat111.chatgpt.site';

export async function forward(request:Request,path:string[]){
 const route=path.join('/');
 const permitted=request.method==='GET'
  ? /^(records|catalog|admin|files\/[^/]+\/[0-2])$/.test(route)
  : request.method==='POST'&&['records','admin'].includes(route);
 if(!permitted)return Response.json({error:'Not found.'},{status:404});
 const origin=request.headers.get('origin');
 if(request.method==='POST'&&origin&&origin!==new URL(request.url).origin)
  return Response.json({error:'Request not allowed.'},{status:403});
 const headers=new Headers({Origin:backend});
 // Only the application's admin cookie is forwarded to its existing backend.
 const cookie=request.headers.get('cookie')?.split(';').map(v=>v.trim()).find(v=>/^admit_admin=[a-f0-9]{64}$/.test(v));
 if(cookie)headers.set('cookie',cookie);
 let body:string|undefined;
 if(request.method==='POST'){
  if(!request.headers.get('content-type')?.includes('application/json'))return Response.json({error:'Only admission details are accepted. Document uploads are disabled.'},{status:415});
  if(Number(request.headers.get('content-length')||0)>12000)return Response.json({error:'Submission is too long.'},{status:413});
  body=await request.text();
  if(body.length>12000)return Response.json({error:'Submission is too long.'},{status:413});
  headers.set('content-type','application/json');
 }
 try{
  const upstream=await fetch(`${backend}/api/${route}`,{method:request.method,headers,body,cache:'no-store',redirect:'error',signal:AbortSignal.timeout(20000)});
  const responseHeaders=new Headers({'Cache-Control':'no-store'});
  for(const key of ['content-type','content-disposition','set-cookie']){const value=upstream.headers.get(key);if(value)responseHeaders.set(key,value);}
  return new Response(upstream.body,{status:upstream.status,headers:responseHeaders});
 }catch{return Response.json({error:'The admissions service is temporarily unavailable. Please try again.'},{status:503});}
}
