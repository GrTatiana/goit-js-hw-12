import{a as h,S as v,i as y}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();h.defaults.baseURL="https://pixabay.com";async function g(o,e){const t={key:"44418874-6a40f19281481af9f7a412a08",q:o,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,order:"popular"};return(await h.get("/api/",{params:t})).data}new v(".gallery li",{captionsData:"alt",captionDelay:250});function L(o){return o.map(t=>`<li class="gallery-item"
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
        `).join("")}function S(){n.loader.classList.remove("hidden")}function u(){n.loader.classList.add("hidden")}function m(){n.formSearch.reset()}function E(){n.loadBtn.classList.remove("hidden")}function p(){n.loadBtn.classList.add("hidden")}function q(){const e=n.imgGallery.children[0].getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}function f(){s>=l?(p(),l&&w("We're sorry, but you've reached the end of search results.")):E()}function w(o){y.error({title:"Error",message:o,layout:2,position:"topRight",displayMode:"once"})}const n={formSearch:document.querySelector("#search"),inputImgSearch:document.querySelector(".input-img-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let i,s=1,l;const b=15;n.formSearch.addEventListener("submit",async o=>{if(o.preventDefault(),i=o.target.elements.search.value.trim(),!i){n.imgGallery.innerHTML=" ",y.warning({title:"warning",message:" Enter a word for the query, please.",layout:2,position:"topRight",displayMode:"once"});return}S(),p(),s=1;try{const e=await g(i,s);if(l=Math.ceil(e.totalHits/b),l===0){w("Sorry, there are no images matching your search query. Please try again!"),u(),f();return}const t=L(e.hits);n.imgGallery.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}u(),f(),m()});n.loadBtn.addEventListener("click",async o=>{s++,p(),S();try{const e=await g(i,s),t=L(e.hits);n.imgGallery.insertAdjacentHTML("beforeend",t),q()}catch(e){console.log(e)}u(),f()});
//# sourceMappingURL=commonHelpers.js.map
