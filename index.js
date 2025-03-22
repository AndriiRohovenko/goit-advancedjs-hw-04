import{a as u,i as m,S as h}from"./assets/vendor-CjwUT-lV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";const b="49355059-ef28fa3d6cd8d2c420ac797e4";async function g(r,t=1,a=15){const n={params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}},e=(await u.get("",n)).data.hits;try{return(!e||e.length===0)&&y("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{throw console.error("Error fetching data:",error),error}}function y(r){m.show({title:"",message:r,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const p=document.querySelector(".gallery"),L={captionsData:"alt",captionDelay:250};function f(r,t=!1){if(!r||r.length===0){p.innerHTML="";return}const a=r.map(e=>`
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
  `).join("");t?p.insertAdjacentHTML("beforeend",a):p.innerHTML=a,new h(".gallery a",L).refresh()}const w=document.getElementById("search-form"),s=document.getElementById("loader"),l=document.querySelector(".load-more-button-js"),x=document.querySelector(".gallery");let c=1,i="";w.addEventListener("submit",_);l.addEventListener("click",T);async function _(r){try{if(r.preventDefault(),c=1,s.style.display="block",i=r.currentTarget.elements.query.value.trim(),!i){y("The request cant be empty, please fill in the input value!"),s.style.display="none";return}r.currentTarget.reset(),x.innerHTML="",l.style.display="none";const t=await g(i,c);s.style.display="none",f(t),l.style.display="inline-block",t.length===0&&(l.style.display="none")}catch(t){console.error(t),y(t.response.data),s.style.display="none",l.style.display="none"}}async function T(r){try{c+=1,r.target.style.display="none",r.target.insertAdjacentElement("beforebegin",s),s.style.display="block";const t=await g(i,c);s.style.display="none",r.target.style.display="inline-block",f(t,!0)}catch(t){console.error(t)}}
//# sourceMappingURL=index.js.map
