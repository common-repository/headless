!function(){"use strict";window.addEventListener("DOMContentLoaded",(async()=>{await Promise.all(window.HeadlessAdmin.frontends.map((e=>e+window.HeadlessAdmin.preview_path)).map((e=>fetch(e,{credentials:"include"}).then((e=>e.json())))))}))}();