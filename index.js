import{a as f,i as b,S as w}from"./assets/vendor-CjwUT-lV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();f.defaults.baseURL="https://pixabay.com/api/";const L="49355059-ef28fa3d6cd8d2c420ac797e4";async function h(r,t=1,a=15){const s={params:{key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a}},e=(await f.get("",s)).data;try{return(!e.hits||e.hits.length===0)&&d("❌ Sorry, there are no images matching your search query. Please try again!"),e}catch{throw console.error("Error fetching data:",error),error}}function d(r){b.show({title:"",message:r,backgroundColor:"#FF5B61",titleColor:"white",messageColor:"white",position:"topRight"})}const y=document.querySelector(".gallery"),q={captions:!0,captionsData:"alt",captionDelay:250};let u=null;function g(r,t=!1){if(!r||r.length===0){y.innerHTML="";return}const a=r.map(s=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img
          class="gallery-image"
          src="${s.webformatURL}"
          alt="${s.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${s.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${s.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${s.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${s.downloads}</span></p>
      </div>
    </li>
  `).join("");t?y.insertAdjacentHTML("beforeend",a):y.innerHTML=a,u?u.refresh():u=new w(".gallery a",q)}const S=document.getElementById("search-form"),n=document.querySelector(".loader"),l=document.querySelector(".load-more-button-js"),_=document.querySelector(".gallery");let i=1,x=15,c="";S.addEventListener("submit",T);l.addEventListener("click",m);async function T(r){try{if(r.preventDefault(),i=1,n.style.display="block",c=r.currentTarget.elements.query.value.trim(),!c){d("The request cant be empty, please fill in the input value!"),n.style.display="none";return}r.currentTarget.reset(),_.innerHTML="",l.style.display="none";const t=await h(c,i);n.style.display="none",g(t.hits),l.style.display="inline-block",t.hits.length===0&&(l.style.display="none")}catch(t){console.error(t),d(t.response.data),n.style.display="none",l.style.display="none"}}async function m(r){try{i+=1,r.target.style.display="none",r.target.insertAdjacentElement("beforebegin",n),n.style.display="block";const t=await h(c,i),a=t.totalHits/x;if(n.style.display="none",i===a)r.target.style.display="none",g(t.hits,!0),d("We're sorry, but you've reached the end of search results."),l.removeEventListener("click",m);else{r.target.style.display="inline-block",g(t.hits,!0);const o=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:o,behavior:"smooth"})}}catch(t){console.error(t)}}
//# sourceMappingURL=index.js.map
