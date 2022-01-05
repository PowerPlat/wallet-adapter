(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{48475:function(t,e,n){"use strict";n.d(e,{vl:function(){return o},Tu:function(){return u}});var i=n(46177),c=n(64706),s=n(32735),a=n(74512),r=(0,s.createContext)({});function o(){return(0,s.useContext)(r)}var u=function(t){var e=t.children,n=(0,c._)("autoConnect",!1),s=(0,i.Z)(n,2),o=s[0],u=s[1];return(0,a.jsx)(r.Provider,{value:{autoConnect:o,setAutoConnect:u},children:e})}},37863:function(t,e,n){"use strict";n.r(e),n.d(e,{ContextProvider:function(){return C}});var i=n(18613),c=n(83370),s=n(80630),a=n(72905),r=n(5133),o=n(3700),u=n(64706),l=n(42243);var M=n(36301);var w=n(80452),h=n(75291).Buffer;function g(t){return(2147483648|t)>>>0}const y=255;async function d(t,e,n){const i=h.alloc(1);i.writeUInt8(1,0);const c=e.serializeMessage(),s=h.concat([i,n,c]);return await N(t,6,1,s)}async function N(t,e,n,i){let c=0,s=0;if(i.length>y)for(;i.length-s>y;){const a=i.slice(s,s+y);if(2!==(await t.send(224,e,n,2|c,a)).length)throw new w.rZ(w.WC.INCORRECT_DATA);c|=1,s+=y}const a=i.slice(s),r=await t.send(224,e,n,c,a);return r.slice(0,r.length-2)}class I extends o.sz{name="Ledger";url="https://ledger.com";icon="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzUgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0ibTIzLjU4OCAwaC0xNnYyMS41ODNoMjEuNnYtMTZhNS41ODUgNS41ODUgMCAwIDAgLTUuNi01LjU4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5KSIvPjxwYXRoIGQ9Im04LjM0MiAwaC0yLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCAtNS41ODUgNS41ODV2Mi43NTdoOC4zNDJ6Ii8+PHBhdGggZD0ibTAgNy41OWg4LjM0MnY4LjM0MmgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDUuNzM5KSIvPjxwYXRoIGQ9Im0xNS4xOCAyMy40NTFoMi43NTdhNS41ODUgNS41ODUgMCAwIDAgNS41ODUtNS42di0yLjY3MWgtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS40NzggMTEuNDc4KSIvPjxwYXRoIGQ9Im03LjU5IDE1LjE4aDguMzQydjguMzQyaC04LjM0MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNzM5IDExLjQ3OCkiLz48cGF0aCBkPSJtMCAxNS4xOHYyLjc1N2E1LjU4NSA1LjU4NSAwIDAgMCA1LjU4NSA1LjU4NWgyLjc1N3YtOC4zNDJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDExLjQ3OCkiLz48L2c+PC9zdmc+";_derivationPath;_connecting;_transport;_publicKey;_readyState="undefined"!==typeof navigator&&navigator.hid?o.i1.Loadable:o.i1.Unsupported;constructor(t={}){super(),this._derivationPath=t.derivationPath||function(t,e){const n=void 0!==t?void 0===e?3:4:2,i=h.alloc(1+4*n);let c=i.writeUInt8(n,0);return c=i.writeUInt32BE(g(44),c),c=i.writeUInt32BE(g(501),c),void 0!==t&&(c=i.writeUInt32BE(g(t),c),void 0!==e&&i.writeUInt32BE(g(e),c)),i}(0,0),this._connecting=!1,this._transport=null,this._publicKey=null}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get readyState(){return this._readyState}async connect(){try{if(this.connected||this.connecting)return;if(this._readyState===o.i1.Unsupported)throw new o.OZ;let e,i,c;this._connecting=!0;try{e=await n.e(918).then(n.bind(n,74918))}catch(t){throw new o.W8(t?.message,t)}try{i=await e.default.create()}catch(t){throw new o.$w(t?.message,t)}try{c=await async function(t,e){const n=await N(t,5,0,e);return new l.nh(n)}(i,this._derivationPath)}catch(t){throw new o.Nx(t?.message,t)}i.on("disconnect",this._disconnected),this._transport=i,this._publicKey=c,this.emit("connect",c)}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}async disconnect(){const t=this._transport;if(t){t.off("disconnect",this._disconnected),this._transport=null,this._publicKey=null;try{await t.close()}catch(e){this.emit("error",new o.UG(e?.message,e))}}this.emit("disconnect")}async signTransaction(t){try{const n=this._transport,i=this._publicKey;if(!n||!i)throw new o.oS;try{const e=await d(n,t,this._derivationPath);t.addSignature(i,e)}catch(e){throw new o.PY(e?.message,e)}return t}catch(e){throw this.emit("error",e),e}}async signAllTransactions(t){try{const n=this._transport,i=this._publicKey;if(!n||!i)throw new o.oS;try{const e=this._derivationPath;for(const c of t){const t=await d(n,c,e);c.addSignature(i,t)}}catch(e){throw new o.PY(e?.message,e)}return t}catch(e){throw this.emit("error",e),e}}_disconnected=()=>{const t=this._transport;t&&(t.off("disconnect",this._disconnected),this._transport=null,this._publicKey=null,this.emit("error",new o.at),this.emit("disconnect"))}}class D extends o.eC{name="Phantom";url="https://phantom.app";icon="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K";_connecting;_wallet;_publicKey;_readyState="undefined"===typeof window||"undefined"===typeof document?o.i1.Unsupported:o.i1.NotDetected;constructor(t={}){super(),this._connecting=!1,this._wallet=null,this._publicKey=null,this._readyState!==o.i1.Unsupported&&(0,o.su)((()=>!!window.solana?.isPhantom&&(this._readyState=o.i1.Installed,this.emit("readyStateChange",this._readyState),!0)))}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get connected(){return!!this._wallet?.isConnected}get readyState(){return this._readyState}async connect(){try{if(this.connected||this.connecting)return;if(this._readyState!==o.i1.Installed)throw new o.OZ;this._connecting=!0;const e=window.solana;if(!e.isConnected){const n=e._handleDisconnect;try{await new Promise(((t,i)=>{const c=()=>{e.off("connect",c),t()};e._handleDisconnect=(...t)=>(e.off("connect",c),i(new o.hd),n.apply(e,t)),e.on("connect",c),e.connect().catch((t=>{e.off("connect",c),i(t)}))}))}catch(t){if(t instanceof o.lj)throw t;throw new o.$w(t?.message,t)}finally{e._handleDisconnect=n}}if(!e.publicKey)throw new o.cO;let n;try{n=new l.nh(e.publicKey.toBytes())}catch(t){throw new o.Nx(t?.message,t)}e.on("disconnect",this._disconnected),this._wallet=e,this._publicKey=n,this.emit("connect",n)}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}async disconnect(){const t=this._wallet;if(t){t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null;try{await t.disconnect()}catch(e){this.emit("error",new o.UG(e?.message,e))}}this.emit("disconnect")}async sendTransaction(t,e,n){try{const i=this._wallet;if(i&&"signAndSendTransaction"in i&&!n?.signers){t.feePayer=t.feePayer||this.publicKey||void 0,t.recentBlockhash=t.recentBlockhash||(await e.getRecentBlockhash("finalized")).blockhash;const{signature:c}=await i.signAndSendTransaction(t,n);return c}}catch(i){throw this.emit("error",i),i}return await super.sendTransaction(t,e,n)}async signTransaction(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signTransaction(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signAllTransactions(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signAllTransactions(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signMessage(t){try{const n=this._wallet;if(!n)throw new o.oS;try{const{signature:e}=await n.signMessage(t);return e}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}_disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null,this.emit("error",new o.at),this.emit("disconnect"))}}class j extends o.eC{name="Slope";url="https://slope.finance";icon="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgZmlsbD0iIzZlNjZmYSIgcj0iNjQiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMzUuMTk2MyA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNzMuNTk3IDU0LjM5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtNzMuNTk3IDczLjU5OTgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMnoiIGZpbGwtb3BhY2l0eT0iLjc1Ii8+PHBhdGggZD0ibTczLjYwNCA1NC4zOTk4aDE5LjJ2MTkuMmgtMTkuMnoiLz48cGF0aCBkPSJtNTQuMzk2OCAzNS4yIDE5LjItMTkuMnYxOS4ybC0xOS4yIDE5LjJoLTE5LjJ6IiBmaWxsLW9wYWNpdHk9Ii43NSIvPjxwYXRoIGQ9Im03My41OTE1IDkyLjgtMTkuMiAxOS4ydi0xOS4ybDE5LjItMTkuMmgxOS4yeiIgZmlsbC1vcGFjaXR5PSIuNCIvPjwvZz48L3N2Zz4=";_connecting;_wallet;_publicKey;_readyState="undefined"===typeof window||"undefined"===typeof document?o.i1.Unsupported:o.i1.NotDetected;constructor(t={}){super(),this._connecting=!1,this._wallet=null,this._publicKey=null,this._readyState!==o.i1.Unsupported&&(0,o.su)((()=>"function"===typeof window.Slope&&(this._readyState=o.i1.Installed,this.emit("readyStateChange",this._readyState),!0)))}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get readyState(){return this._readyState}async connect(){try{if(this.connected||this.connecting)return;if(this._readyState!==o.i1.Installed)throw new o.OZ;this._connecting=!0;const e=new window.Slope;let n,i;try{({data:n}=await e.connect())}catch(t){throw new o.$w(t?.message,t)}if(!n.publicKey)throw new o.cO;try{i=new l.nh(n.publicKey)}catch(t){throw new o.Nx(t?.message,t)}this._wallet=e,this._publicKey=i,this.emit("connect",i)}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}async disconnect(){const t=this._wallet;if(t){this._wallet=null,this._publicKey=null;try{const{msg:e}=await t.disconnect();if("ok"!==e)throw new o.UG(e)}catch(e){e instanceof o.lj||(e=new o.UG(e?.message,e)),this.emit("error",e)}}this.emit("disconnect")}async signTransaction(t){try{const n=this._wallet;if(!n)throw new o.oS;try{const e=M.encode(t.serializeMessage()),{msg:i,data:c}=await n.signTransaction(e);if(!c.publicKey||!c.signature)throw new o.PY(i);const s=new l.nh(c.publicKey),a=M.decode(c.signature);return t.addSignature(s,a),t}catch(e){if(e instanceof o.lj)throw e;throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signAllTransactions(t){try{const n=this._wallet;if(!n)throw new o.oS;try{const e=t.map((t=>M.encode(t.serializeMessage()))),{msg:i,data:c}=await n.signAllTransactions(e),s=t.length;if(!c.publicKey||c.signatures?.length!==s)throw new o.PY(i);const a=new l.nh(c.publicKey);for(let n=0;n<s;n++)t[n].addSignature(a,M.decode(c.signatures[n]));return t}catch(e){if(e instanceof o.lj)throw e;throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signMessage(t){try{const n=this._wallet;if(!n)throw new o.oS;try{const e=await n.signMessage(t);return M.decode(e.data.signature)}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}}class T extends o.eC{name="Solflare";url="https://solflare.com";icon="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+";_connecting;_wallet;_publicKey;_readyState="undefined"===typeof window||"undefined"===typeof document?o.i1.Unsupported:o.i1.NotDetected;constructor(t={}){super(),this._connecting=!1,this._wallet=null,this._publicKey=null,this._readyState!==o.i1.Unsupported&&(0,o.su)((()=>!!window.solflare?.isSolflare&&(this._readyState=o.i1.Installed,this.emit("readyStateChange",this._readyState),!0)))}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get connected(){return!!this._wallet?.isConnected}get readyState(){return this._readyState}async connect(){try{if(this.connected||this.connecting)return;if(this._readyState!==o.i1.Installed)throw new o.OZ;this._connecting=!0;const e=window.solflare;if(!e.isConnected)try{await e.connect()}catch(t){throw new o.$w(t?.message,t)}if(!e.publicKey)throw new o.$w;let n;try{n=new l.nh(e.publicKey.toBytes())}catch(t){throw new o.Nx(t?.message,t)}e.on("disconnect",this._disconnected),this._wallet=e,this._publicKey=n,this.emit("connect",n)}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}async disconnect(){const t=this._wallet;if(t){t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null;try{await t.disconnect()}catch(e){this.emit("error",new o.UG(e?.message,e))}}this.emit("disconnect")}async signTransaction(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signTransaction(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signAllTransactions(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signAllTransactions(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signMessage(t){try{const n=this._wallet;if(!n)throw new o.oS;try{const{signature:e}=await n.signMessage(t,"utf8");return e}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}_disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),this._wallet=null,this._publicKey=null,this.emit("error",new o.at),this.emit("disconnect"))}}class A extends o.eC{_provider;_network;_timeout;_readyState="undefined"===typeof window||"undefined"===typeof document?o.i1.Unsupported:o.i1.NotDetected;_connecting;_wallet;constructor({provider:t,network:e=o.QZ.Mainnet,timeout:n=1e4}={}){super(),this._provider=t,this._network=e,this._timeout=n,this._connecting=!1,this._wallet=null,this._readyState!==o.i1.Unsupported&&("string"===typeof this._provider?this._readyState=o.i1.Loadable:(0,o.su)((()=>"function"===typeof window.sollet?.postMessage&&(this._readyState=o.i1.Installed,this.emit("readyStateChange",this._readyState),!0))))}get publicKey(){return this._wallet?.publicKey||null}get connecting(){return this._connecting}get connected(){return!!this._wallet?.connected}get readyState(){return this._readyState}async connect(){try{if(this.connected||this.connecting)return;if(this._readyState!==o.i1.Loadable&&this._readyState!==o.i1.Installed)throw new o.OZ;this._connecting=!0;const e=this._provider||window.sollet;let i,c;try{i=await n.e(886).then(n.bind(n,73886))}catch(t){throw new o.W8(t?.message,t)}try{c=new i.default(e,this._network)}catch(t){throw new o.p6(t?.message,t)}try{const t=c.handleDisconnect;let n,i;try{await new Promise(((s,a)=>{const r=()=>{n&&clearTimeout(n),c.off("connect",r),s()};if(c.handleDisconnect=(...e)=>(c.off("connect",r),a(new o.hd),t.apply(c,e)),c.on("connect",r),c.connect().catch((t=>{c.off("connect",r),a(t)})),"string"===typeof e){let t=0;i=setInterval((()=>{const e=c._popup;e?e.closed&&a(new o.hd):t>50&&a(new o.d2),t++}),100)}else n=setTimeout((()=>a(new o.NK)),this._timeout)}))}finally{c.handleDisconnect=t,i&&clearInterval(i)}}catch(t){if(t instanceof o.lj)throw t;throw new o.$w(t?.message,t)}if(!c.publicKey)throw new o.Nx;c.on("disconnect",this._disconnected),this._wallet=c,this.emit("connect",c.publicKey)}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}async disconnect(){const t=this._wallet;if(t){t.off("disconnect",this._disconnected),this._wallet=null;const n=t.handleDisconnect;try{await new Promise(((e,i)=>{const c=setTimeout((()=>e()),250);t.handleDisconnect=(...i)=>(clearTimeout(c),e(),t._responsePromises=new Map,n.apply(t,i)),t.disconnect().then((()=>{clearTimeout(c),e()}),(t=>{clearTimeout(c),"Wallet disconnected"===t?.message?e():i(t)}))}))}catch(e){this.emit("error",new o.UG(e?.message,e))}finally{t.handleDisconnect=n}}this.emit("disconnect")}async signTransaction(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signTransaction(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signAllTransactions(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signAllTransactions(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signMessage(t){try{const n=this._wallet;if(!n)throw new o.oS;try{const{signature:e}=await n.sign(t,"utf8");return Uint8Array.from(e)}catch(e){throw new o.fk(e?.message,e)}}catch(e){throw this.emit("error",e),e}}_disconnected=()=>{const t=this._wallet;t&&(t.off("disconnect",this._disconnected),this._wallet=null,this.emit("error",new o.at),this.emit("disconnect"))}}class m extends A{name="Sollet";url="https://www.sollet.io";icon="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUzMCIgd2lkdGg9IjUzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLTEtMWg1MzJ2NTMyaC01MzJ6IiBmaWxsPSJub25lIi8+PGcgZmlsbD0iIzAwZmZhMyI+PHBhdGggZD0ibTg4Ljg4OTM1IDM3Mi45ODIwMWMzLjE5My0zLjE5IDcuNTIyLTQuOTgyIDEyLjAzNS00Ljk4Mmg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTc0IDYuMDE3IDE0LjUzNmwtODIuMjkxIDgyLjIyNmMtMy4xOTMgMy4xOTEtNy41MjIgNC45ODMtMTIuMDM2IDQuOTgzaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NS05LjE3NC02LjAxNzgtMTQuNTM3bDgyLjI5MTktODIuMjI2eiIvPjxwYXRoIGQ9Im04OC44ODkzNSA2NS45ODI1YzMuMTkzLTMuMTkwNCA3LjUyMi00Ljk4MjUgMTIuMDM1LTQuOTgyNWg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTczOSA2LjAxNyAxNC41MzYzbC04Mi4yOTEgODIuMjI2N2MtMy4xOTMgMy4xOS03LjUyMiA0Ljk4Mi0xMi4wMzYgNC45ODJoLTQxNi40NjAxYy03LjU4NjYgMC0xMS4zODQ1LTkuMTc0LTYuMDE3OC0xNC41MzZsODIuMjkxOS04Mi4yMjY1eiIvPjxwYXRoIGQ9Im00NDEuMTExMzUgMjE5LjEwOTVjLTMuMTkzLTMuMTktNy41MjItNC45ODItMTIuMDM2LTQuOTgyaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NSA5LjE3My02LjAxNzggMTQuNTM2bDgyLjI5MTkgODIuMjI2YzMuMTkzIDMuMTkgNy41MjIgNC45ODMgMTIuMDM1IDQuOTgzaDQxNi40NjFjNy41ODYgMCAxMS4zODQtOS4xNzQgNi4wMTctMTQuNTM3eiIvPjwvZz48L3N2Zz4=";constructor({provider:t="https://www.sollet.io",...e}={}){super({provider:t,...e})}}class L extends A{name="Sollet (Extension)";url="https://chrome.google.com/webstore/detail/sollet/fhmfendgdocmcbmfikdcogofphimnkno";icon="data:image/png;base64,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"}class S extends o.eC{name="Torus";url="https://tor.us";icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzAzNjRGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjIxODYgOS40OTIxOUMxMC40NTM5IDkuNDkyMTkgOS44MzM5OCAxMC4xMTIxIDkuODMzOTggMTAuODc2OFYxMi40ODk4QzkuODMzOTggMTMuMjU0NSAxMC40NTM5IDEzLjg3NDQgMTEuMjE4NiAxMy44NzQ0SDEzLjY2ODRWMjIuODk3NkMxMy42Njg0IDIzLjY2MjMgMTQuMjg4MyAyNC4yODIyIDE1LjA1MyAyNC4yODIySDE2LjY2NkMxNy40MzA3IDI0LjI4MjIgMTguMDUwNiAyMy42NjIzIDE4LjA1MDYgMjIuODk3NlYxMi41MDE1QzE4LjA1MDYgMTIuNDk3NiAxOC4wNTA2IDEyLjQ5MzcgMTguMDUwNiAxMi40ODk4VjEwLjg3NjhDMTguMDUwNiAxMC4xMTIxIDE3LjQzMDcgOS40OTIxOSAxNi42NjYgOS40OTIxOUgxNS4wNTNIMTEuMjE4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4zMzc2IDEzLjg3NDRDMjIuNTQ3NyAxMy44NzQ0IDIzLjUyODcgMTIuODkzNCAyMy41Mjg3IDExLjY4MzNDMjMuNTI4NyAxMC40NzMyIDIyLjU0NzcgOS40OTIxOSAyMS4zMzc2IDkuNDkyMTlDMjAuMTI3NSA5LjQ5MjE5IDE5LjE0NjUgMTAuNDczMiAxOS4xNDY1IDExLjY4MzNDMTkuMTQ2NSAxMi44OTM0IDIwLjEyNzUgMTMuODc0NCAyMS4zMzc2IDEzLjg3NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";_connecting;_wallet;_publicKey;_params;_readyState="undefined"===typeof window?o.i1.Unsupported:o.i1.Loadable;constructor({params:t={showTorusButton:!1}}={}){super(),this._connecting=!1,this._wallet=null,this._publicKey=null,this._params=t}get publicKey(){return this._publicKey}get connecting(){return this._connecting}get connected(){return!!this._wallet?.isLoggedIn}get readyState(){return this._readyState}async connect(){try{if(this.connected||this.connecting)return;if(this._readyState!==o.i1.Loadable)throw new o.OZ;let e,i,c,s;this._connecting=!0;try{e=await Promise.all([n.e(932),n.e(470),n.e(149)]).then(n.bind(n,52470))}catch(t){throw new o.W8(t?.message,t)}try{i=window.torus||new e.default}catch(t){throw new o.p6(t?.message,t)}if(!i.isInitialized)try{await i.init(this._params)}catch(t){throw new o.$w(t?.message,t)}try{c=await i.login()}catch(t){throw new o.cO(t?.message,t)}try{s=new l.nh(c[0])}catch(t){throw new o.Nx(t?.message,t)}this._wallet=i,this._publicKey=s,this.emit("connect",s)}catch(t){throw this.emit("error",t),t}finally{this._connecting=!1}}async disconnect(){const t=this._wallet;if(t){this._wallet=null,this._publicKey=null;try{t.isLoggedIn&&await t.cleanUp()}catch(e){this.emit("error",new o.UG(e?.message,e))}}this.emit("disconnect")}async signTransaction(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signTransaction(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signAllTransactions(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signAllTransactions(t)||t}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}async signMessage(t){try{const n=this._wallet;if(!n)throw new o.oS;try{return await n.signMessage(t)}catch(e){throw new o.PY(e?.message,e)}}catch(e){throw this.emit("error",e),e}}}var f=n(71030),z=n(32735),O=n(48475),x=n(74512),p=(0,i.Z)({palette:{mode:"dark",primary:{main:a.Z[700]},secondary:{main:r.Z[700]}},components:{MuiButtonBase:{styleOverrides:{root:{justifyContent:"flex-start"}}},MuiButton:{styleOverrides:{root:{textTransform:"none",padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}}),E=function(t){var e=t.children,n=(0,O.vl)().autoConnect,i=o.QZ.Devnet,c=(0,z.useMemo)((function(){return(0,l.Wf)(i)}),[i]),s=(0,z.useMemo)((function(){return[new D,new j,new T,new S,new I,new m({network:i}),new L({network:i})]}),[i]),a=(0,f.Ds)().enqueueSnackbar,r=(0,z.useCallback)((function(t){a(t.message?"".concat(t.name,": ").concat(t.message):t.name,{variant:"error"}),console.error(t)}),[a]);return(0,x.jsx)(u.U,{endpoint:c,children:(0,x.jsx)(u.nS,{wallets:s,onError:r,autoConnect:n,children:e})})},C=function(t){var e=t.children;return(0,x.jsx)(c.Z,{injectFirst:!0,children:(0,x.jsx)(s.Z,{theme:p,children:(0,x.jsx)(f.wT,{children:(0,x.jsx)(O.Tu,{children:(0,x.jsx)(E,{children:e})})})})})}},24605:function(){},65678:function(){},11164:function(){},8505:function(){},93907:function(){},3700:function(t,e,n){"use strict";n.d(e,{eC:function(){return S},sz:function(){return L},cO:function(){return y},QZ:function(){return c},p6:function(){return M},$w:function(){return w},at:function(){return h},UG:function(){return g},lj:function(){return o},W8:function(){return l},oS:function(){return N},OZ:function(){return u},Nx:function(){return d},i1:function(){return i},fk:function(){return D},PY:function(){return j},NK:function(){return T},d2:function(){return A},hd:function(){return m},su:function(){return r}});var i,c,s=n(4399);!function(t){t.Installed="Installed",t.NotDetected="NotDetected",t.Loadable="Loadable",t.Unsupported="Unsupported"}(i||(i={}));class a extends s{get connected(){return!!this.publicKey}}function r(t){"undefined"!==typeof window&&"undefined"!==typeof document&&("complete"!==document.readyState?window.addEventListener("load",(function e(){window.removeEventListener("load",e),t()})):t())}class o extends Error{error;constructor(t,e){super(t),this.error=e}}class u extends o{name="WalletNotReadyError"}class l extends o{name="WalletLoadError"}class M extends o{name="WalletConfigError"}class w extends o{name="WalletConnectionError"}class h extends o{name="WalletDisconnectedError"}class g extends o{name="WalletDisconnectionError"}class y extends o{name="WalletAccountError"}class d extends o{name="WalletPublicKeyError"}class N extends o{name="WalletNotConnectedError"}class I extends o{name="WalletSendTransactionError"}class D extends o{name="WalletSignMessageError"}class j extends o{name="WalletSignTransactionError"}class T extends o{name="WalletTimeoutError"}class A extends o{name="WalletWindowBlockedError"}class m extends o{name="WalletWindowClosedError"}class L extends a{async sendTransaction(t,e,n={}){let i=!0;try{try{t.feePayer=t.feePayer||this.publicKey||void 0,t.recentBlockhash=t.recentBlockhash||(await e.getRecentBlockhash("finalized")).blockhash;const{signers:i,...c}=n;i?.length&&t.partialSign(...i);const s=(t=await this.signTransaction(t)).serialize();return await e.sendRawTransaction(s,c)}catch(c){if(c instanceof o)throw i=!1,c;throw new I(c?.message,c)}}catch(c){throw i&&this.emit("error",c),c}}}class S extends L{}!function(t){t.Mainnet="mainnet-beta",t.Testnet="testnet",t.Devnet="devnet"}(c||(c={}))},64706:function(t,e,n){"use strict";n.d(e,{U:function(){return r},nS:function(){return g},Rc:function(){return a},_:function(){return w},Os:function(){return M}});var i=n(42243),c=n(32735);const s=(0,c.createContext)({});function a(){return(0,c.useContext)(s)}const r=({children:t,endpoint:e,config:n={commitment:"confirmed"}})=>{const a=(0,c.useMemo)((()=>new i.ew(e,n)),[e,n]);return c.createElement(s.Provider,{value:{connection:a}},t)};var o=n(3700);class u extends o.lj{name="WalletNotSelectedError"}const l=(0,c.createContext)({});function M(){return(0,c.useContext)(l)}function w(t,e){const n=(0,c.useState)((()=>{try{const e=localStorage.getItem(t);if(e)return JSON.parse(e)}catch(n){console.error(n)}return e})),i=n[0],s=(0,c.useRef)(!0);return(0,c.useEffect)((()=>{if(!0!==s.current)try{null===i?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(i))}catch(e){console.error(e)}else s.current=!1}),[i]),n}const h={wallet:null,adapter:null,publicKey:null,connected:!1},g=({children:t,wallets:e,autoConnect:n=!1,onError:i,localStorageKey:s="walletName"})=>{const[a,r]=w(s,null),[{wallet:M,adapter:g,publicKey:y,connected:d},N]=(0,c.useState)(h),I=g?.readyState||o.i1.Unsupported,[D,j]=(0,c.useState)(!1),[T,A]=(0,c.useState)(!1),m=(0,c.useRef)(!1),L=(0,c.useRef)(!1),S=(0,c.useRef)(!1),[f,z]=(0,c.useState)((()=>e.map((t=>({adapter:t,readyState:t.readyState})))));(0,c.useEffect)((()=>{function t(t){z((e=>{const n=e.findIndex((({adapter:t})=>t.name===this.name));return-1===n?e:[...e.slice(0,n),{...e[n],readyState:t},...e.slice(n+1)]}))}for(const n of e)n.on("readyStateChange",t,n);return()=>{for(const n of e)n.off("readyStateChange",t,n)}}),[e]),(0,c.useEffect)((()=>{const t=f.find((({adapter:t})=>t.name===a));N(t?{wallet:t,adapter:t.adapter,connected:t.adapter.connected,publicKey:t.adapter.publicKey}:h)}),[a,f]),(0,c.useEffect)((()=>{m.current||D||d||!n||!g||I!==o.i1.Installed&&I!==o.i1.Loadable||async function(){m.current=!0,j(!0);try{await g.connect()}catch(t){r(null)}finally{j(!1),m.current=!1}}()}),[m,D,d,n,g,I]),(0,c.useEffect)((()=>{function t(){S.current=!0}return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)}),[S]);const O=(0,c.useCallback)((()=>{g&&N((t=>({...t,connected:g.connected,publicKey:g.publicKey})))}),[g]),x=(0,c.useCallback)((()=>{S.current||r(null)}),[S]),p=(0,c.useCallback)((t=>(S.current||(i||console.error)(t),t)),[S,i]);(0,c.useEffect)((()=>{if(g)return g.on("connect",O),g.on("disconnect",x),g.on("error",p),()=>{g.off("connect",O),g.off("disconnect",x),g.off("error",p)}}),[g,O,x,p]),(0,c.useEffect)((()=>()=>{g?.disconnect()}),[g]);const E=(0,c.useCallback)((async()=>{if(!(m.current||D||T||d)){if(!g)throw p(new u);if(I!==o.i1.Installed&&I!==o.i1.Loadable)throw r(null),"undefined"!==typeof window&&window.open(g.url,"_blank"),p(new o.OZ);m.current=!0,j(!0);try{await g.connect()}catch(t){throw r(null),t}finally{j(!1),m.current=!1}}}),[m,D,T,d,g,I,p]),C=(0,c.useCallback)((async()=>{if(!L.current&&!T){if(!g)return r(null);L.current=!0,A(!0);try{await g.disconnect()}catch(t){throw r(null),t}finally{A(!1),L.current=!1}}}),[L,T,g]),b=(0,c.useCallback)((async(t,e,n)=>{if(!g)throw p(new u);if(!d)throw p(new o.oS);return await g.sendTransaction(t,e,n)}),[g,p,d]),k=(0,c.useMemo)((()=>g&&"signTransaction"in g?async t=>{if(!d)throw p(new o.oS);return await g.signTransaction(t)}:void 0),[g,p,d]),Y=(0,c.useMemo)((()=>g&&"signAllTransactions"in g?async t=>{if(!d)throw p(new o.oS);return await g.signAllTransactions(t)}:void 0),[g,p,d]),Z=(0,c.useMemo)((()=>g&&"signMessage"in g?async t=>{if(!d)throw p(new o.oS);return await g.signMessage(t)}:void 0),[g,p,d]);return c.createElement(l.Provider,{value:{autoConnect:n,wallets:f,wallet:M,publicKey:y,connected:d,connecting:D,disconnecting:T,select:r,connect:E,disconnect:C,sendTransaction:b,signTransaction:k,signAllTransactions:Y,signMessage:Z}},t)}}}]);