import{a as d,i as m,S as h}from"./assets/vendor-CjwUT-lV.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();d.defaults.baseURL="https://pixabay.com/api/";const b="49355059-ef28fa3d6cd8d2c420ac797e4";async function f(t,r=1,s=15){const n={params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s}},e=(await d.get("",n)).data.hits;try{return(!e||e.length===0)&&g("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{throw console.error("Error fetching data:",error),error}}function g(t){m.show({title:"",message:t,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const u=document.querySelector(".gallery"),L={captionsData:"alt",captionDelay:250};function y(t,r=!1){if(!t||t.length===0){u.innerHTML="";return}const s=t.map(e=>`
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
  `).join("");r?u.insertAdjacentHTML("beforeend",s):u.innerHTML=s,new h(".gallery a",L).refresh()}const w=document.getElementById("search-form"),a=document.getElementById("loader"),i=document.querySelector(".load-more-button-js");let c=1,l="";w.addEventListener("submit",x);i.addEventListener("click",_);function x(t){if(t.preventDefault(),c=1,a.style.display="block",l=t.currentTarget.elements.query.value.trim(),!l){g("The request cant be empty, please fill in the input value!"),a.style.display="none";return}t.currentTarget.reset(),f(l,c).then(r=>{a.style.display="none",y(r),i.style.display="inline-block",r.length===0&&(i.style.display="none")}).catch(r=>{console.error(r),a.style.display="none",i.style.display="none"})}function _(){c+=1,f(l,c).then(t=>{console.log(t),y(t,!0)}).catch(t=>console.error(t))}
//# sourceMappingURL=index.js.map
