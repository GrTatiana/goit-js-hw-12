import{a as h,S as v,i as g}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();h.defaults.baseURL="https://pixabay.com";async function y(o,e){const t={key:"44418874-6a40f19281481af9f7a412a08",q:o,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,order:"popular"},s=await h.get("/api/",{params:t});return console.log(s.data),s.data}new v(".gallery li",{captionsData:"alt",captionDelay:250});function L(o){return o.map(t=>`<li class="gallery-item"
      <a class="gallery-link" href="${t.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags} " />
          <div class="image-info">
               <p>LIKES: ${t.likes}</p>
                    <p>VIEWS: ${t.views}</p>
                    <p>COMMENTS: ${t.comments}</p>
                    <p>DOWNLOADS: ${t.downloads}</p>
                </div>
            </a>
            </li>
        `).join("")}function S(){n.loader.classList.remove("hidden")}function u(){n.loader.classList.add("hidden")}function m(){n.formSearch.reset()}function E(){n.loadBtn.classList.remove("hidden")}function p(){n.loadBtn.classList.add("hidden")}function q(){const e=n.imgGallery.children[0].getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}function f(){l>=i?(p(),i&&w("We're sorry, but you've reached the end of search results.")):E()}function w(o){g.error({title:"Error",message:o,layout:2,position:"topRight",displayMode:"once"})}const n={formSearch:document.querySelector("#search"),inputImgSearch:document.querySelector(".input-img-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let c,l=1,i;const b=15;n.formSearch.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.search.value.trim(),!c){n.imgGallery.innerHTML=" ",g.warning({title:"warning",message:" Enter a word for the query, please.",layout:2,position:"topRight",displayMode:"once"});return}S(),p(),l=1;try{const e=await y(c,l);if(i=Math.ceil(e.totalHits/b),console.log(i),i===0){w("Sorry, there are no images matching your search query. Please try again!"),u(),f();return}const t=L(e.hits);n.imgGallery.insertAdjacentHTML("beforeend",t),console.log(e.hits)}catch(e){console.log(e)}u(),f(),m()});n.loadBtn.addEventListener("click",async o=>{l++,p(),S();try{const e=await y(c,l),t=L(e.hits);n.imgGallery.insertAdjacentHTML("beforeend",t),q()}catch(e){console.log(e)}u(),f()});
//# sourceMappingURL=commonHelpers.js.map