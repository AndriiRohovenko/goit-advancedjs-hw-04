import{a as u,i as h,S as m}from"./assets/vendor-CjwUT-lV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();u.defaults.baseURL="https://pixabay.com/api/";const b="49355059-ef28fa3d6cd8d2c420ac797e4";async function g(r,t=1,o=15){const n={params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:o}},e=(await u.get("",n)).data;try{return(!e.hits||e.hits.length===0)&&d("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{throw console.error("Error fetching data:",error),error}}function d(r){h.show({title:"",message:r,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const y=document.querySelector(".gallery"),L={captionsData:"alt",captionDelay:250};function f(r,t=!1){if(!r||r.length===0){y.innerHTML="";return}const o=r.map(e=>`
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
  `).join("");t?y.insertAdjacentHTML("beforeend",o):y.innerHTML=o,new m(".gallery a",L).refresh()}const w=document.getElementById("search-form"),a=document.getElementById("loader"),l=document.querySelector(".load-more-button-js"),x=document.querySelector(".gallery");let i=1,_=15,c="";w.addEventListener("submit",T);l.addEventListener("click",q);async function T(r){try{if(r.preventDefault(),i=1,a.style.display="block",c=r.currentTarget.elements.query.value.trim(),!c){d("The request cant be empty, please fill in the input value!"),a.style.display="none";return}r.currentTarget.reset(),x.innerHTML="",l.style.display="none";const t=await g(c,i);a.style.display="none",f(t.hits),l.style.display="inline-block",t.hits.length===0&&(l.style.display="none")}catch(t){console.error(t),d(t.response.data),a.style.display="none",l.style.display="none"}}async function q(r){try{i+=1,r.target.style.display="none",r.target.insertAdjacentElement("beforebegin",a),a.style.display="block";const t=await g(c,i),o=t.totalHits/_;a.style.display="none",i>=o?(r.target.style.display="none",d("We're sorry, but you've reached the end of search results.")):(r.target.style.display="inline-block",f(t.hits,!0))}catch(t){console.error(t)}}
//# sourceMappingURL=index.js.map
