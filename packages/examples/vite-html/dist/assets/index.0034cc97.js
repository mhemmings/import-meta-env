import{l as r}from"./env.js";const f=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};f();o(".base",r.BASE_URL);o(".mode",r.MODE);o(".dev",r.DEV);o(".prod",r.PROD);o(".custom",r.VITE_CUSTOM_ENV_VARIABLE);o(".custom-prefix",r.CUSTOM_PREFIX_ENV_VARIABLE);o(".mode-file",r.VITE_EFFECTIVE_MODE_FILE_NAME);o(".inline",r.VITE_INLINE);o(".node-env","production");o(".env-object",JSON.stringify(r,null,2));function o(s,i){document.querySelector(s).textContent=i}