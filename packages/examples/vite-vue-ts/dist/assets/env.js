const o=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function c(r){const a={};let t=r.toString();t=t.replace(/\r\n?/mg,`
`);let n;for(;(n=o.exec(t))!=null;){const s=n[1];let e=n[2]||"";e=e.trim();const i=e[0];e=e.replace(/^(['"])([\s\S]+)\1$/mg,"$2"),i==='"'&&(e=e.replace(/\\n/g,`
`),e=e.replace(/\\r/g,"\r")),a[s]=e}return a}const m=c(`VITE_NAME=vite-plugin-dotenv
VITE_VSCODE=VSCode
VITE_ALT=Vue logo
`);var l=Object.assign(m,{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0});export{l};
