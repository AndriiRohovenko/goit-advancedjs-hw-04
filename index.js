import{a as u,i as m,S as h}from"./assets/vendor-CjwUT-lV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();u.defaults.baseURL="https://pixabay.com/api/";const b="49355059-ef28fa3d6cd8d2c420ac797e4";async function f(t,o=1,s=15){const a={params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:s}},e=(await u.get("",a)).data.hits;try{return(!e||e.length===0)&&g("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{throw console.error("Error fetching data:",error),error}}function g(t){m.show({title:"",message:t,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const d=document.querySelector(".gallery"),w={captionsData:"alt",captionDelay:250};function y(t,o=!1){if(!t||t.length===0){d.innerHTML="";return}const s=t.map(e=>`
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
  `).join("");o?d.insertAdjacentHTML("beforeend",s):d.innerHTML=s,new h(".gallery a",w).refresh()}const L=document.getElementById("search-form"),n=document.getElementById("loader"),i=document.querySelector(".load-more-button-js");let c=1,l="";L.addEventListener("submit",x);i.addEventListener("click",_);async function x(t){if(t.preventDefault(),c=1,n.style.display="block",l=t.currentTarget.elements.query.value.trim(),!l){g("The request cant be empty, please fill in the input value!"),n.style.display="none";return}t.currentTarget.reset();const o=await f(l,c);try{n.style.display="none",y(o),i.style.display="inline-block",o.length===0&&(i.style.display="none")}catch(s){console.error(s),n.style.display="none",i.style.display="none"}}async function _(){try{c+=1;const t=await f(l,c);y(t,!0)}catch(t){console.error(t)}}
//# sourceMappingURL=index.js.map
