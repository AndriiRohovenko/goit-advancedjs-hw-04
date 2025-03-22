import{a as p,i as d,S as f}from"./assets/vendor-CjwUT-lV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();p.defaults.baseURL="https://pixabay.com/api/";const g="49355059-ef28fa3d6cd8d2c420ac797e4";async function y(t,s=1,n=15){const r={params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:n}},e=(await p.get("",r)).data.hits;try{return(!e||e.length===0)&&u("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{console.error("Error fetching data:",error)}}function u(t){d.show({title:"",message:t,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const c=document.querySelector(".gallery"),m={captionsData:"alt",captionDelay:250};function h(t){if(!t||t.length===0){c.innerHTML="";return}const s=t.map(r=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img
          class="gallery-image"
          src="${r.webformatURL}"
          alt="${r.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${r.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${r.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${r.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${r.downloads}</span></p>
      </div>
    </li>
  `).join("");c.innerHTML=s,new f(".gallery a",m).refresh()}const b=document.getElementById("search-form");b.addEventListener("submit",L);const a=document.getElementById("loader"),l=document.querySelector(".load-more-button-js");function L(t){t.preventDefault(),a.style.display="block";const s=t.currentTarget.elements.query.value;if(!s){u("The request cant be empty, please fill in the input value!"),a.style.display="none";return}t.currentTarget.reset(),y(s).then(n=>{a.style.display="none",h(n),l.style.display="inline-block",n.length===0&&(l.style.display="none")}).catch(n=>{console.log(n),a.style.display="none",l.style.display="none"})}
//# sourceMappingURL=index.js.map
