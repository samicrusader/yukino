from requests_futures.sessions import FuturesSession
from quart import Quart, send_from_directory, Response, request
import asyncio, os, copy

quart = Quart(__name__)

@quart.route('/assets/<path:asset>', methods=['GET'])
async def defaultpage(asset):
    if os.path.exists(f'assets/{asset}') == True:
        pass
    else:
        r = FuturesSession()
        #assetfile = r.get(f'https://discord.com/assets/{asset}')
        af_sess = r.get(f'https://discord.com/assets/{asset}')
        assetfile = af_sess.result()
        with open(f'assets/{asset}', 'wb') as f:
            for chunk in assetfile.iter_content(1024*10):
                f.write(chunk)
                f.flush()
    return await send_from_directory('assets', asset)

@quart.route('/patcher/<path:location>', methods=['GET'])
async def sendpatchdata(location):
    return await send_from_directory('patcher', location)

@quart.route('/api/<path:path>',methods=['GET','POST','DELETE'])
async def proxy(path):
    SITE_NAME = 'https://discord.com/api/'
    requests = FuturesSession()
    if path.endswith('/ack'):
        return Response(b'', 204)
    print(f'proxy {SITE_NAME}{path}')
    excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
    rqheaders = copy.deepcopy(request.headers)
    rqheaders['Host'] = 'discord.com'
    if request.method=='GET':
        sess = requests.get(f'{SITE_NAME}{path}', headers=rqheaders)
        resp = sess.result()
        headers = [(name, value) for (name, value) in  resp.raw.headers.items() if name.lower() not in excluded_headers]
        response = Response(resp.content if 'content' in dir(resp) else '', resp.status_code, headers)
        return response
    elif request.method=='POST':
        sess = requests.post(f'{SITE_NAME}{path}', headers=rqheaders, data=await request.get_data())
        resp = sess.result()
        headers = [(name, value) for (name, value) in resp.raw.headers.items() if name.lower() not in excluded_headers]
        response = Response(resp.content if 'content' in dir(resp) else '', resp.status_code, headers)
        return response
    elif request.method=='DELETE':
        sess = requests.delete(f'{SITE_NAME}{path}', headers=rqheaders)
        resp = sess.result()
        headers = [(name, value) for (name, value) in resp.raw.headers.items() if name.lower() not in excluded_headers]
        response = Response(resp.content, resp.status_code, headers)
        return response

@quart.route('/', methods=['GET'])
async def lol1():
    return await sendindex()

@quart.route('/<path:help>', methods=['GET'])
async def lol2(help):
    return await sendindex()

async def sendindex():
    return await send_from_directory('patcher', 'index.html')

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    quart.run(host='0.0.0.0', port=4000, loop=loop)
