# Yukino

Yukino is a sort-of client mod for Discord's web client. It uses the original client scripts with a patcher script that is used to modify Webpack assets, that can connect to custom servers or even Discord production servers with either modified CORS rules or a full on API proxy.

It was created by someone (whom I'm not sure wants to be named as I haven't spoken with them in quite a while) who sold it as part of a bundle with a modified [Litecord](https://gitlab.com/litecord) server. The original source was in Node but as I couldn't be assed to work with that I converted it to Python down the line and used it briefly as a client when I was stubborn and didn't want whatever bullshit change Discord did to their interface that time.

## Standard config

In [patcher/yukino.js](patcher/yukino.js), set `domain` to the domain you are serving a Discord-compatible API from. You may want to configure things in `window.GLOBAL_ENV` incase you're using custom endpoints. These correspond to the `GLOBAL_ENV` variables in [Discord's /app HTML](view-source:https://web.archive.org/web/20181201052808im_/discordapp.com/app).

For an example of a custom config, the following config will set Yukino's to use `chat.mercyfuckers.org` as the web app and API endpoints, `cdn.mercyfuckers.org/chat` for the file CDN endpoint, and `i.mfk.rs` as the domain for invite links in the UI.
```js
    window.GLOBAL_ENV = {
        API_ENDPOINT: `//chat.mercyfuckers.org/api`,
        WEBAPP_ENDPOINT: `//chat.mercyfuckers.org`,
        CDN_HOST: `cdn.mercyfuckers.org/chat`,
        ASSET_ENDPOINT: WEBAPP_ENDPOINT,
        WIDGET_ENDPOINT: `//chat.mercyfuckers.org/widget`,
        INVITE_HOST: `i.mfk.rs`,
        MARKETING_ENDPOINT: WEBAPP_ENDPOINT,
        NETWORKING_ENDPOINT: `//router.mfk.rs`, // I'm not sure what this is used for
        RELEASE_CHANNEL: 'stable',
        BRAINTREE_KEY: '0',
        STRIPE_KEY: '0',
    };
```

Setup a web server with an API endpoint going to your custom API server, then reverse proxy endpoints `/{app,activity,library,store,channels,login,register,invite{,proxy},welcome,verify,reset,apps,connections,oauth2,settings,users}` to your running instance of Yukino and you should be set with running your own 2018 Discord frontend.

## Advanced config

With the custom servers that me and my buddies were running we needed some way to patch different parts of the UI. Discord's app is written in Node then "built" using Webpack into smaller files that are shoved in an `/assets` folder of the website.

![NanaZip 07032024_1720040771](https://github.com/samicrusader/yukino/assets/89530830/af7b0074-bd2a-4cba-bd6a-f7b165f6fae6)

The original author did a modification to a script that handled Webpack that would allow us to override exports from a Webpack module, allowing us to change resources by overwriting them with custom versions included in the patcher script.

### Changing the client

The default configuration of Yukino uses a client from November 16th, 2018. Normally, Discord's client is loaded by importing a main stylesheet and 2 to 4 scripts in the HTML code used as the basis for the web app:

```html
...
<head>
...
<link rel="stylesheet" href="/assets/c545b978455fe2e876ee10e2b1b1fa01.css" integrity="...">
...
</head>

<body>
  <div id="app-mount"></div>
  ...
  <script src="/assets/353eff64f6ce08035e0b.js" integrity="..."></script>
  <script src="/assets/e8ced2c97cf13904d02b.js" integrity="..."></script>
</body>
...
```

The first script (hereby called the bootstrap script) stores a list of JS scripts that provide different core features of the UI, including the login screen, the friends interface and the settings screen. The second initializes the app and loads other parts of it going further up the tree. Yukino's [yukino.js](patcher/yukino.js) takes the place of the first script and loads the second one for us because it needs to hook onto the second script to perform tasks `onload` that include doing Webpack injection or changing the token used in the client to one specified by another value in Local Storage.

In order to load another client we need to inject the script list from the bootstrap script into yukino.js and then load the stylesheet and other JS scripts through yukino.js. Using the [Wayback Machine](https://web.archive.org/) we can actually look up past results for `https://discordapp.com/app` and pull the page source through that: [view-source:web.archive.org/web/20180508185243im_/https://discordapp.com/app](view-source:web.archive.org/web/20180508185243if_/https://discordapp.com/app)

In this case, load up [353eff64f6ce08035e0b.js](https://web.archive.org/web/20180508185243js_/https://discordapp.com/assets/353eff64f6ce08035e0b.js), and copy the dictionary in the middle of the script after `n.src=d.p+""+e+"."+{` and `}[e]+".js"` and paste it overtop of the `scripts` dict under `PATCHER_ENV` in yukino.js. Lastly, copy the css stylesheet that it tries to load and the rest of the .js scripts and paste them into the `loadApp` section:

```js
...
    function loadApp() {
        loadAsset("/assets/c545b978455fe2e876ee10e2b1b1fa01.css", 'stylesheet');
        loadAsset("/assets/e8ced2c97cf13904d02b.js", 'script');
    }
...
```

And... maybe it'll work. Some older versions of Discord's app that is available requires an older webpack that has a differing function or some other oddity. Best choice would be clients between October 2018 and mid-2021.

### Modifying the client

The `loadAsset` function takes a optional 3rd parameter that will be passed as a `onload` event to a loaded script. This will allow you to immediately call functions to replace Webpack objects or perform other stuff. These are identified through numbers, exactly like the ones in the `scripts` dict under `PATCHER_ENV`. You can find these under each script in your `assets` dir by looking for `: function(e,`. Anything under `e.exports` can be modified by calling `PATCHER_ENV.replaceModule(7004, x);` within the `onload` func in the `loadAsset`. [yukino.js](patcher/yukino.js) includes an example for modifying the changelog with custom text.
