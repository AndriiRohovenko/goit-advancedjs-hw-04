import{a as f,i as b,S as w}from"./assets/vendor-CjwUT-lV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();f.defaults.baseURL="https://pixabay.com/api/";const L="49355059-ef28fa3d6cd8d2c420ac797e4";async function m(r,t=1,a=15){const o={params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}},e=(await f.get("",o)).data;try{return(!e.hits||e.hits.length===0)&&d("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{throw console.error("Error fetching data:",error),error}}function d(r){b.show({title:"",message:r,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const y=document.querySelector(".gallery"),_={captions:!0,captionsData:"alt",captionDelay:250};let u=null;function g(r,t=!1){if(!r||r.length===0){y.innerHTML="";return}const a=r.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}"
          alt="${o.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${o.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${o.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${o.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${o.downloads}</span></p>
      </div>
    </li>
  `).join("");t?y.insertAdjacentHTML("beforeend",a):y.innerHTML=a,u?u.refresh():u=new w(".gallery a",_)}const q=document.getElementById("search-form"),n=document.getElementById("loader"),l=document.querySelector(".load-more-button-js"),x=document.querySelector(".gallery");let i=1,E=15,c="";q.addEventListener("submit",S);l.addEventListener("click",h);async function S(r){try{if(r.preventDefault(),i=1,n.style.display="block",c=r.currentTarget.elements.query.value.trim(),!c){d("The request cant be empty, please fill in the input value!"),n.style.display="none";return}r.currentTarget.reset(),x.innerHTML="",l.style.display="none";const t=await m(c,i);n.style.display="none",g(t.hits),l.style.display="inline-block",t.hits.length===0&&(l.style.display="none")}catch(t){console.error(t),d(t.response.data),n.style.display="none",l.style.display="none"}}async function h(r){try{i+=1,r.target.style.display="none",r.target.insertAdjacentElement("beforebegin",n),n.style.display="block";const t=await m(c,i),a=t.totalHits/E;if(n.style.display="none",i===a)r.target.style.display="none",g(t.hits,!0),d("We're sorry, but you've reached the end of search results."),l.removeEventListener("click",h);else{r.target.style.display="inline-block",g(t.hits,!0);const s=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:s,behavior:"smooth"})}}catch(t){console.error(t)}}
//# sourceMappingURL=index.js.map
