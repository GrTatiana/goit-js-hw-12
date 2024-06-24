import{a as m,S as v,i as y}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&f(p)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();m.defaults.baseURL="https://pixabay.com";async function g(o,e){const r={key:"44418874-6a40f19281481af9f7a412a08",q:o,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:b,order:"popular"};return(await m.get("/api/",{params:r})).data}let E=new v(".gallery li",{captionsData:"alt",captionDelay:250});function L(o){const e=o.map(r=>`<li class="gallery-item"
      <a class="gallery-link" href="${r.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags} " />
          <div class="image-info">
               <p>LIKES: ${r.likes}</p>
                    <p>VIEWS: ${r.views}</p>
                    <p>COMMENTS: ${r.comments}</p>
                    <p>DOWNLOADS: ${r.downloads}</p>
                </div>
            </a>
            </li>
        `).join("");n.imgGallery.insertAdjacentHTML("beforeend",e),E.refresh()}function S(){n.loader.classList.remove("hidden")}function l(){n.loader.classList.add("hidden")}function i(){n.formSearch.reset()}function q(){n.loadBtn.classList.remove("hidden")}function d(){n.loadBtn.classList.add("hidden")}function B(){const e=n.imgGallery.children[0].getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function h(){s>=u?(d(),u&&w("We're sorry, but you've reached the end of search results.")):q()}function w(o){y.error({title:"Error",message:o,layout:2,position:"topRight",displayMode:"once"})}const n={formSearch:document.querySelector("#search"),inputImgSearch:document.querySelector(".input-img-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let c,s=1,u;const b=15;n.formSearch.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.search.value.trim(),n.imgGallery.innerHTML="",c===""){d(),y.warning({title:"warning",message:" Enter a word for the query, please.",layout:2,position:"topRight",displayMode:"once"}),l(),i();return}S(),d(),s=1;try{const e=await g(c,s);if(u=Math.ceil(e.totalHits/b),u===0){w("Sorry, there are no images matching your search query. Please try again!"),l(),i(),h();return}const r=L(e.hits);i()}catch(e){console.log(e)}l(),h(),i()});n.loadBtn.addEventListener("click",async o=>{s++,d(),S();try{const e=await g(c,s),r=L(e.hits);B()}catch(e){console.log(e)}l(),h()});
//# sourceMappingURL=commonHelpers.js.map
