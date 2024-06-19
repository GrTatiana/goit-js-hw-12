import{S as l,i as c}from"./assets/vendor-6dd0bf06.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function d(n){const o="https://pixabay.com",a="/api/",r=new URLSearchParams({key:"44418874-6a40f19281481af9f7a412a08",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${a}?${r}`;return fetch(e).then(t=>t.json()).catch(t=>{})}function u(n){const o=i.imgGallery,a=n.map(r=>`<a class="gallery-link" href="${r.largeImageURL}">
  <li class="gallery-item">
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
        `).join("");o.innerHTML=a,new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function m(){i.loader.classList.remove("hidden")}function f(){i.loader.classList.add("hidden")}const i={formSearch:document.querySelector("#search"),inputImgSearch:document.querySelector(".input-img-search"),imgGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.formSearch.addEventListener("submit",n=>{n.preventDefault();const o=i.inputImgSearch.value.trim();o===""&&(i.imgGallery.innerHTML=" ",c.warning({title:"warning",message:" Enter a word for the query, please.",position:"center",displayMode:"once",maxWidth:500,imageWidth:600})),m();const a=d(o);a.length!==0&&a.then(r=>u(r.hits)),a.catch(r=>{c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",displayMode:"once",maxWidth:500,imageWidth:600})}),a.finally(()=>{f(),i.formSearch.reset()})});
//# sourceMappingURL=commonHelpers.js.map
