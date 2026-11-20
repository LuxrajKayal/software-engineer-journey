const STORAGE_KEY = "lux-omni-blog-theme";
function readSavedTheme(){try{const value=localStorage.getItem(STORAGE_KEY);return value==="light"||value==="dark"?value:null;}catch{return null;}}
function saveTheme(value){try{localStorage.setItem(STORAGE_KEY,value);}catch{/* Theme still works for the current page without storage. */}}
function applyTheme(value,persist){
 const theme=value==="light"?"light":"dark";document.documentElement.dataset.theme=theme;
 const button=document.querySelector("[data-theme-toggle]");
 if(button){const dark=theme==="dark";button.setAttribute("aria-label",dark?"Switch to light theme":"Switch to dark theme");button.setAttribute("title",dark?"Switch to light theme":"Switch to dark theme");button.setAttribute("aria-pressed",String(dark));const sun=button.querySelector('[data-theme-icon="sun"]');const moon=button.querySelector('[data-theme-icon="moon"]');if(sun)sun.hidden=!dark;if(moon)moon.hidden=dark;}
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute("content",theme==="dark"?"#171717":"#FFFFFF");if(persist)saveTheme(theme);
}
export function initTheme(){const initial=readSavedTheme()||"dark";applyTheme(initial,false);document.querySelectorAll("[data-theme-toggle]").forEach(button=>button.addEventListener("click",()=>applyTheme(document.documentElement.dataset.theme==="dark"?"light":"dark",true)));}