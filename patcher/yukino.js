(() => {
    var store = localStorage;
    let domain = '127.0.0.1:4000';
    window.GLOBAL_ENV = {
        API_ENDPOINT: `//${domain}/api`,
        WEBAPP_ENDPOINT: `//${domain}`,
        CDN_HOST: `cdn.${domain}`,
        ASSET_ENDPOINT: `//${domain}`,
        WIDGET_ENDPOINT: `//${domain}/widget`,
        INVITE_HOST: `i.${domain}`,
        MARKETING_ENDPOINT: `//${domain}`,
        NETWORKING_ENDPOINT: `//router.${domain}`,
        RELEASE_CHANNEL: 'stable',
        BRAINTREE_KEY: '0',
        STRIPE_KEY: '0',
    };

    window.PATCHER_ENV = {
        storage: store,
        assetsEndpoint: GLOBAL_ENV.ASSET_ENDPOINT + "/assets/",
        scripts: {
            // `yukino.js` takes place of the bootstrap script (the first script loaded in the /app HTML page) so we need to call all the asset scripts (called chunks) in the bootstrap script ourselves.
            163: "fdfd220fa54f0fb61120", // Settings
            166: "5550564cd31ed1b9345a", // Main UI
            4: "9424f97c991ae424d13c", // Chat UI

            1: "740547d599081c03e18c",
            2: "e334f9b07010fbdb1f5d",
            3: "f29014ed7af92b08c5e2",
            5: "ce194b4f553728820ace",
            6: "abc12673dbafa680d556",
            7: "dde95269e53e4b55a16f",
            8: "1f46b061a6dc91185ede",
            9: "c062a4f3904d982b7498",
            10: "4ec6b3f4c4de94d9cbb7",
            11: "93bddfe37754d2fb89f0",
            12: "9c6ba875ac2a2f4e7dd0",
            13: "439de7a2610fc2d49c65",
            14: "fecabc12cb11a961b3ed",
            15: "d3d471cf4cb144b6b1d3",
            16: "6661b0962da0ff990060",
            17: "b69500fa35e7bbe51262",
            18: "75383c5fe3724f013933",
            19: "e391a9133125fd6a1cfe",
            20: "7f947f30e93f04f5fcd6",
            21: "0933bc9842b2998e22d2",
            22: "3b901d4f280c4ad5d2c8",
            23: "da22e19af02323e17ac0",
            24: "13288353253c37c83b69",
            25: "998216ff6a1ea3a0b7d3",
            26: "6e76066122e2f6c37ee6",
            27: "c4a615ea966758e4a142",
            28: "be29762d095da507ca99",
            29: "08499f50ab13922bd399",
            30: "867439e57afa5a8ec39e",
            31: "53e128bc2697a1eabcd7",
            32: "64ee68c7bd0af36307ef",
            33: "55e964414dac337af7bc",
            34: "111a18756441b334828d",
            35: "ff31e8a3858adc2f7a48",
            36: "05f397a7814f1f1dd6c3",
            37: "1b7ef45a4f2a3f73d4b4",
            38: "11a83a0fba5e17466812",
            39: "28a7f0877210c9219ec4",
            40: "1acd1a815a301f49eef0",
            41: "a89d883a16483266e7b5",
            42: "39c92463d29dc98b5c3f",
            43: "cb389760b7ea91507a5e",
            44: "86807eaf11705d6e4261",
            45: "956327e9ea5d44f3037c",
            46: "217492c48e0017ed3c08",
            47: "caf99edceee1f3a5b8b7",
            48: "c094c3b94ec991dc8d32",
            49: "a7de4761d6e50e483a76",
            50: "1e2c48aacb2f5b87b2b7",
            51: "f365a35979a24d04cedf",
            52: "33b44dab2cf99ab853a5",
            53: "2261336c02fe3f46123a",
            54: "6837f720afb685a744e5",
            55: "b604287396910f922a2e",
            56: "6792bbbedc672d55e080",
            57: "cbe22f073a0791a2ce5e",
            58: "e3bb9d466d298d1f4996",
            59: "3ffe3691a33b2f9a50aa",
            60: "e31452af9c28b22f2c7b",
            61: "de321dc127ff378b3789",
            62: "2648b94fe36e8d9502e8",
            63: "73323697ed044baacb55",
            64: "38d92c6b4317747453a1",
            65: "e9e76528d038b4f5537c",
            66: "841d5a581d1981312e5f",
            67: "c43b7f30b2b623c08fc2",
            68: "b92bf53b9afe7bd2cebd",
            69: "a24a2350e5d2f33d0b0c",
            70: "bb0eae41b6c3445e1321",
            71: "aec0e8b9a317376b1f1f",
            72: "cc6eb4c37ecaca6283cb",
            73: "fc4034f1d976f4bb5bc3",
            74: "35c1a1559693ad1a8020",
            75: "f1f28e5b064be7371ff0",
            76: "01942bec21f0a11638f1",
            77: "beb5ef9265fd0318d100",
            78: "c65d029e6d5b70fc3472",
            79: "395bddee8f7e540e5388",
            80: "f93962986200df5471ac",
            81: "848ee3c8194904c690b8",
            82: "49732d23536b825a1415",
            83: "8f60fc2142b2a476f5d1",
            84: "f329346522cf81b0f21f",
            85: "021a7a13bc323440971a",
            86: "9d1e23b1ae9b0cf31d18",
            87: "27afa2e937ada1a977ff",
            88: "6c4331745e696b38b78a",
            89: "fb2f130cfd9280bede30",
            90: "10cd4a8d84a7d2b0abb2",
            91: "930d0bec511d92c9b67b",
            92: "146d80bcdd911b3fe667",
            93: "fe2e7d3450cc1eb25e07",
            94: "a8ec3a31942d3af7b51c",
            95: "64bb297de9b159f84152",
            96: "8f3c315eb94469104cf2",
            97: "a1b6fc0926ced1dbb141",
            98: "699052d7a3b6feeb66c2",
            99: "47bac0b8d95c3ecc6511",
            100: "22ee9f044e094c24a2d8",
            101: "72d3e58be9a1f94996fb",
            102: "8482a5203e623bb2bbb9",
            103: "b8e1996149e15abb5ea1",
            104: "c5382faa91ba55922cea",
            105: "cc57e7f70756ec6a11f4",
            106: "6e101efcefa0194b707d",
            107: "4a0d0c986cf70b5e2124",
            108: "3a12bfd69b46374f6a18",
            109: "4ea1230ec29e5c568684",
            110: "736d6ba5282bdec6ef3c",
            111: "611764c07ef33aebbed1",
            112: "abfe21fec6cbb0ca2c12",
            113: "53076b90976d0c032774",
            114: "94ac4a3b321028dd0ccd",
            115: "6ddc976d31618e74c0f6",
            116: "4e671dfedb86557f4d64",
            117: "f2d74fbfcc6e1e0a66e9",
            118: "21d3490c48c423feee67",
            119: "d1ce9357dc8cddfa1163",
            120: "7c353f1f54b48ce0bc20",
            121: "f3301435405494f53a33",
            122: "d0f5e267c0f23da0aa92",
            123: "49fde9c367ea165ea698",
            124: "32b258602871f9e7db6a",
            125: "12709a7915adac86f488",
            126: "7e226dc0917511f7e11e",
            127: "7e6663d116b0dfe60ba2",
            128: "9ec0d0c083ea5a835432",
            129: "fe85585d6ff1f7a36678",
            130: "295d91e051a725ade1bd",
            131: "bc42cdfc5c854e96b222",
            132: "99bc4da4aa6e8554ed9e",
            133: "b8f820b1824f6b7a95b1",
            134: "23a844d9c6e20723a1df",
            135: "2f5f701c678654fb86a1",
            136: "c177f4ac1ed0dbd0af51",
            137: "8e42c32fd5f05f3b2f23",
            138: "4afb9cac0a4d0900605d",
            139: "9989caf725a84e0c45bc",
            140: "d94b6b038ccc1e3a44fb",
            141: "64323a4ea770a22ad710",
            142: "40218a3b952e952eb718",
            143: "b03e9a132f1f7b5afb0e",
            144: "5466756dd2ab528702e2",
            145: "77a9d46b0bbdfd0fabda",
            146: "2894a2601bea050463e6",
            147: "b99ce41c60147a558f90",
            148: "10f3fab463ce75f6d017",
            149: "33e82d288fa384aa8e70",
            150: "39d49dd8f5759bcf7b6f",
            151: "9365d2a87a8e8f6ef184",
            152: "e6709959782df618a175",
            153: "7c07f01392706d8eb562",
            154: "c8d8a865ed6f7e686212",
            155: "1a1b4b8e7b3aaedccf4d",
            156: "b197ea4aafe136723180",
            157: "88636fee61f8e75f7752",
            158: "ec9d2bb27bd04ad9904e",
            159: "3a134e5a6d8014a85719",
            160: "788253a7a13780eeeabd",
            161: "a7f7e588af5bdae07ee1",
            162: "691896672eb0d8093ecc",
            164: "f7450cb7479987845a65",
            165: "d071db35a84a78803243",
            167: "8dda25935ed064d7a512",
            168: "55c7f935e65c4c53277c",
            169: "8182bd7cd4c5457c1bf2",
            170: "9d283b164b0278491710",
            171: "aa813828ebf8e69150b5",
            172: "ebd61334c3d9220ca73c",
            173: "74d0d8e447f61c0613d9",
            174: "1e2eadf3b2adf099e957",
            175: "ecbc856aca41a750f0a3",
            176: "612157702f78ff994ee9",
            177: "a3e3900646a3f7fcd9a8",
            178: "5cf93deca2b78841985f",
            179: "392eacd561a252da1f39",
            180: "60df8209a7a2984c2e0c",
            181: "10a5e2b8e433f043718f",
            182: "6e70472a775ab0da8ed0",
            183: "6eb1dbb684abcce0e7e2",
            184: "3390b1d365822b9365ce",
            185: "9bfa4026c0996ca5c4b4",
            186: "26ceec79d0d6f1ed5937",
            187: "a51700c9e6ddd6e9b900",
            188: "26ab4c21ea124729fd56",
            189: "ae98e548a20e74038c91",
            190: "4a6ce92b823099aa525b",
            191: "3ed5e98cec037c6ffa14",
            192: "ea7f3d9773fb11693d9d",
            193: "cce4e8543d5f6283373d",
            194: "2d47d6c84bb262de7351",
            195: "c743c0ff4b499d8cbfaf",
            196: "bd7aa2a5cf5cc1993a1a",
            197: "c52efd957d58ee3f9c23",
            198: "3b5787f06e9f4007a301",
            200: "e35f780f0beda7f25545",
            201: "025d1a7c6d44ee362cdd",
            202: "82829977f0e53c9bc9aa",
            203: "cd758f232c5183a9d44f",
            204: "9d915de8dc9a839548a3",
            205: "9933c060aa877c11908b"
        }
    };

    function log(message) {
        console.log("%c[yukino] ", "color:purple", message);
    }

    function loadAsset(path, type, load) {
        log(`Loading asset from "${path}"`);
        let head = document.getElementsByTagName("head")[0];
        let item = store.getItem("patched_" + path);

        if (type == 'stylesheet') {
            if (item != null) {
                let style = document.createElement("style");
                style.text = pako.inflate(item);
                head.appendChild(style);
            } else {
                let link = document.createElement("link");
                link.href = path.startsWith("/assets/") ? PATCHER_ENV.assetsEndpoint + path.substring(8) : path;
                link.type = "text/css";
                link.rel = "stylesheet";
                head.appendChild(link);
            }
        } else if (type == 'script') {
            let script = document.createElement("script");
            script.charset = "utf-8";
            script.timeout = 120;
            script.onload = load;

            if (item != null) {
                script.text = pako.inflate(item);
            } else {
                script.src = path.startsWith("/assets/") ? PATCHER_ENV.assetsEndpoint + path.substring(8) : path;
            }
            head.appendChild(script);
        }
    }

    function loadApp() {
        // These are the paths to the assets loaded by Discord at first start, if you go to Wayback Machine for "https://discordapp.com/app" and copy the .css and .js files thats embedded in the raw HTML code and put them here you can load different client versions.
        // You can optionally pass script arguments to each script to patch various things using PATCHER_ENV.replaceModule, see the README for details.

        /*
        // 11/14/2019 client
        loadAsset("/assets/0.9334e22178acb9d8e503.css", 'stylesheet');
        loadAsset("/assets/bb14cf48cb062977fdc1.js", 'script');
        loadAsset("/assets/85ed31756d5e5812f808.js", 'script');
        loadAsset("/assets/f2d7172ff647ff26b9c3.js", 'script');
        */

        // 10/16/2018 client
        loadAsset("/assets/0.28962297433e08e6d793.css", "stylesheet");
        loadAsset("/assets/062ede8de2fa6d8de1f6.js", "script");
        loadAsset("/assets/f908e0dccf3f5c6e9128.js", "script", () => {
            // replaces Webpack module 7004 (the changelog, <assets/5550464cd31ed1b9345a.js>) with custom text
            PATCHER_ENV.replaceModule(7004, '---changelog---\ndate: "2018-10-16"\nrevision: 1\nyoutube_video_id: \"Y_0lN2PQWmE\"\nlocale: "en-us"\n---\n welcome to discrod! {fixed margintop}\n=====================\n\n* anime is cool.\n* lmao discord get raped.');
        });
    }

    document.addEventListener("DOMContentLoaded", e => {
        let token = store.getItem("inject_token");
        if (token) {
            log("Injecting token...");
            store.removeItem("inject_token");
            store.setItem("token", token);
        }
        loadAsset("/patcher/pako.js", 'script');
        loadAsset("/patcher/webpack.js", 'script', loadApp);
    });
})();
