import{a as g,i as h,S as b}from"./assets/vendor-CjwUT-lV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const y of o.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&n(y)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();g.defaults.baseURL="https://pixabay.com/api/";const w="49355059-ef28fa3d6cd8d2c420ac797e4";async function u(r,t=1,s=15){const n={params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:s}},e=(await g.get("",n)).data;try{return(!e.hits||e.hits.length===0)&&d("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{throw console.error("Error fetching data:",error),error}}function d(r){h.show({title:"",message:r,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const p=document.querySelector(".gallery"),L={captionsData:"alt",captionDelay:250};function f(r,t=!1){if(!r||r.length===0){p.innerHTML="";return}const s=r.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${e.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${e.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${e.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${e.downloads}</span></p>
      </div>
    </li>
  `).join("");t?p.insertAdjacentHTML("beforeend",s):p.innerHTML=s,new b(".gallery a",L).refresh()}const x=document.getElementById("search-form"),a=document.getElementById("loader"),l=document.querySelector(".load-more-button-js"),_=document.querySelector(".gallery");let i=1,q=15,c="";x.addEventListener("submit",E);l.addEventListener("click",m);async function E(r){try{if(r.preventDefault(),i=1,a.style.display="block",c=r.currentTarget.elements.query.value.trim(),!c){d("The request cant be empty, please fill in the input value!"),a.style.display="none";return}r.currentTarget.reset(),_.innerHTML="",l.style.display="none";const t=await u(c,i);a.style.display="none",f(t.hits),l.style.display="inline-block",t.hits.length===0&&(l.style.display="none")}catch(t){console.error(t),d(t.response.data),a.style.display="none",l.style.display="none"}}async function m(r){try{i+=1,r.target.style.display="none",r.target.insertAdjacentElement("beforebegin",a),a.style.display="block";const t=await u(c,i),s=t.totalHits/q;if(a.style.display="none",i>=s)r.target.style.display="none",d("We're sorry, but you've reached the end of search results."),l.removeEventListener("click",m);else{r.target.style.display="inline-block",f(t.hits,!0);const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:o,behavior:"smooth"})}}catch(t){console.error(t)}}
//# sourceMappingURL=index.js.map
