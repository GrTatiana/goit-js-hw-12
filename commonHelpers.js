import{S as c,i as l}from"./assets/vendor-da467f75.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(s){const o="https://pixabay.com",r="/api/",n=new URLSearchParams({key:"44418874-6a40f19281481af9f7a412a08",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${n}`;return console.log(e),fetch(e).then(t=>t.json()).catch(t=>{})}function d(s){const o=s.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
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
        `).join("");a.imgGallery.innerHTML=o,new c(".gallery a").refresh()}function m(){a.loader.classList.remove("hidden")}function f(){a.loader.classList.add("hidden")}const a={formSearch:document.querySelector("#search"),inputImgSearch:document.querySelector(".input-img-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.formSearch.addEventListener("submit",s=>{s.preventDefault();const o=a.inputImgSearch.value.trim();if(console.log(o),o===""){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}else m(),u(o).then(r=>d(r)).catch(r=>{}),f();a.formSearch.reset()});
//# sourceMappingURL=commonHelpers.js.map
