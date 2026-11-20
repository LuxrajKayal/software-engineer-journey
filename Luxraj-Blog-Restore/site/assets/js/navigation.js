function closeOne(item,focus){const button=item.querySelector("[data-dropdown-toggle]");const menu=item.querySelector(".nav-dropdown");if(!button||!menu)return;button.setAttribute("aria-expanded","false");menu.hidden=true;item.classList.remove("is-open");if(focus)button.focus();}
function closeMenus(except){document.querySelectorAll(".nav-item.is-open").forEach(item=>{if(item!==except)closeOne(item,false);});}
function markCurrent(){const path=location.pathname.replace(/\/+$/,"");document.querySelectorAll("[data-nav-parent],[data-nav-category]").forEach(link=>{const target=new URL(link.href,location.href).pathname.replace(/\/+$/,"");if(target===path){link.setAttribute("aria-current","page");const item=link.closest(".nav-item");if(item)item.classList.add("is-active");if(link.hasAttribute("data-nav-category"))item?.classList.add("has-current-child");}});const parent=document.body.dataset.parentSection;if(parent)document.querySelector('[data-nav-group="'+parent+'"]')?.classList.add("is-active");}
function syncPrimaryNavigation(){
 const techItem=document.querySelector('.nav-item[data-nav-group="tech"]');
 if(!techItem)return;
 const techLink=techItem.querySelector('[data-nav-parent="tech"]');
 const techToggle=techItem.querySelector("[data-dropdown-toggle]");
 if(techLink){techLink.textContent="Tech News";techLink.setAttribute("aria-label","Tech News");}
 if(techToggle){techToggle.setAttribute("aria-label","Open Tech News categories");techToggle.setAttribute("title","Open Tech News categories");}
 const techMenu=techItem.querySelector(".nav-dropdown");
 if(techMenu)techMenu.setAttribute("aria-label","Tech News categories");
 if(document.querySelector('.nav-item[data-nav-group="engineering"]'))return;
 if(!techLink||!techToggle||!techMenu)return;
 const root=document.body.dataset.siteRoot||"";
 const engineeringItem=document.createElement("div");
 engineeringItem.className="nav-item";
 engineeringItem.dataset.navGroup="engineering";
 const engineeringLink=document.createElement("a");
 engineeringLink.className="nav-link";
 engineeringLink.href=root+"categories/engineering/engineering-index.html";
 engineeringLink.dataset.navParent="engineering";
 engineeringLink.textContent="Engineering";
 const toggle=techToggle.cloneNode(true);
 toggle.setAttribute("aria-expanded","false");
 toggle.setAttribute("aria-controls","dropdown-engineering");
 toggle.setAttribute("aria-label","Open Engineering categories");
 toggle.setAttribute("title","Open Engineering categories");
 const menu=techMenu.cloneNode(false);
 menu.id="dropdown-engineering";menu.setAttribute("aria-label","Engineering categories");menu.hidden=true;
 const categories=[
  ["Electrical Engineering","categories/engineering/electrical/electrical-engineering-index.html","engineering-electrical"],
  ["Mechanical Engineering","categories/engineering/mechanical/mechanical-engineering-index.html","engineering-mechanical"],
  ["Labs","categories/engineering/labs/engineering-labs-index.html","engineering-labs"],
  ["Drone Technology","categories/engineering/drone-technology/drone-technology-index.html","engineering-drone-technology"]
 ];
 categories.forEach(([label,path,key])=>{const li=document.createElement("li");const link=document.createElement("a");link.href=root+path;link.dataset.navCategory=key;link.textContent=label;li.append(link);menu.append(li);});
 engineeringItem.append(engineeringLink,toggle,menu);techItem.after(engineeringItem);
}
export function initNavigation(){
 syncPrimaryNavigation();
 const nav=document.querySelector("[data-main-nav]");const mobile=document.querySelector("[data-mobile-nav-toggle]");
 document.querySelectorAll("[data-dropdown-toggle]").forEach(button=>{const item=button.closest(".nav-item");const menu=item?.querySelector(".nav-dropdown");if(!item||!menu)return;
 button.addEventListener("click",()=>{const open=button.getAttribute("aria-expanded")!=="true";closeMenus(item);button.setAttribute("aria-expanded",String(open));menu.hidden=!open;item.classList.toggle("is-open",open);});
 button.addEventListener("keydown",event=>{if(event.key==="ArrowDown"){event.preventDefault();closeMenus(item);button.setAttribute("aria-expanded","true");menu.hidden=false;item.classList.add("is-open");menu.querySelector("a")?.focus();}});
 });
 if(mobile&&nav)mobile.addEventListener("click",()=>{const open=mobile.getAttribute("aria-expanded")!=="true";mobile.setAttribute("aria-expanded",String(open));mobile.setAttribute("aria-label",open?"Close navigation":"Open navigation");mobile.setAttribute("title",open?"Close navigation":"Open navigation");nav.classList.toggle("is-open",open);});
 document.addEventListener("click",event=>{if(!event.target.closest(".site-header"))closeMenus(null);});
 document.addEventListener("keydown",event=>{if(event.key==="Escape"){const item=document.querySelector(".nav-item.is-open");if(item)closeOne(item,true);if(nav?.classList.contains("is-open")&&mobile){nav.classList.remove("is-open");mobile.setAttribute("aria-expanded","false");mobile.setAttribute("aria-label","Open navigation");mobile.setAttribute("title","Open navigation");mobile.focus();}}});
 markCurrent();
}