import{S as i,i as l}from"./assets/vendor-da467f75.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(s){const o="https://pixabay.com",r="/api/",a=new URLSearchParams({key:"44418874-6a40f19281481af9f7a412a08",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${a}`;return console.log(e),fetch(e).then(t=>t.json()).catch(t=>{})}function m(s){const o=s.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
  <li class="gallery-item">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${r.webFormatURL}"
      alt="${r.tags} " />
          <div class="image-info">
               <p>LIKES: ${r.likes}</p>
                    <p>VIEWS: ${r.views}</p>
                    <p>COMMENTS: ${r.comments}</p>
                    <p>DOWNLOADS: ${r.downloads}</p>
                </div>
            </a>
        `).join("");c.imgGallery.innerHTML=o,new i(".gallery a").refresh()}const c={formSearch:document.querySelector("#search"),inputImgSearch:document.querySelector(".input-img-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};c.formSearch.addEventListener("submit",s=>{s.preventDefault();const o=c.inputImgSearch.value.trim();if(console.log(o),o===""){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}else u(o).then(r=>m(r)).catch(r=>{})});
//# sourceMappingURL=commonHelpers.js.map
