/* Lead form posts natively to admin-post.php (see functions.php). */
const nav=document.getElementById('nav');if(nav){const f=()=>nav.classList.toggle('solid',scrollY>40);addEventListener('scroll',()=>requestAnimationFrame(f),{passive:true});requestAnimationFrame(f);}
const run=el=>{const to=+el.dataset.to,pre=el.dataset.pre||'',suf=el.dataset.suf||'';let t0;const step=t=>{t0??=t;const p=Math.min((t-t0)/1600,1);el.textContent=pre+Math.round(to*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
const SHOT=location.hash==='#shot';const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(!SHOT)e.target.querySelectorAll('.count').forEach(run);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
if(SHOT){document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('in');el.querySelectorAll('.count').forEach(c=>c.textContent=(c.dataset.pre||'')+c.dataset.to+(c.dataset.suf||''))})}
/* Mortgage calculator */
document.querySelectorAll('.stellar-calc').forEach(c=>{const g=n=>parseFloat(c.querySelector('[name='+n+']').value)||0,f=v=>'$'+Math.round(v).toLocaleString('en-US');const calc=()=>{const price=g('price'),down=price*g('down')/100,loan=Math.max(price-down,0),r=g('rate')/1200,n=g('years')*12;const pi=n?(r?loan*r/(1-Math.pow(1+r,-n)):loan/n):0;const ti=(g('tax')/100*price+g('ins'))/12;c.querySelector('.out-total').textContent=f(pi+ti);c.querySelector('.out-pi').textContent=f(pi);c.querySelector('.out-ti').textContent=f(ti);c.querySelector('.out-loan').textContent=f(loan);c.querySelector('.out-down').textContent=f(down)};c.addEventListener('input',calc);calc()});
/* Mobile menu: backdrop, escape, scroll lock (overflow set in CSS) */
const bg=document.querySelector('.burger');
const closeNav=()=>{document.body.classList.remove('navopen');bg&&bg.setAttribute('aria-expanded','false')};
bg&&bg.addEventListener('click',()=>{const o=document.body.classList.toggle('navopen');bg.setAttribute('aria-expanded',String(o));if(!o)closeNav()});
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',closeNav));
const backdrop=document.getElementById('navbackdrop');
backdrop&&backdrop.addEventListener('click',closeNav);
addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});
/* v3.4 Home value: two step form, UTM and source capture */
(()=>{const K=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid','fbclid'],q=new URLSearchParams(location.search);let st={};try{st=JSON.parse(sessionStorage.getItem('stellar_src')||'{}')}catch(e){}
K.forEach(k=>{if(q.get(k))st[k]=q.get(k)});if(!st.landing_page)st.landing_page=location.href.split('#')[0];if(!st.referrer&&document.referrer&&!document.referrer.startsWith(location.origin))st.referrer=document.referrer;try{sessionStorage.setItem('stellar_src',JSON.stringify(st))}catch(e){}
document.querySelectorAll('.hvform').forEach(f=>{f.classList.add('js');f.querySelectorAll('[data-track]').forEach(i=>{const k=i.dataset.track;i.value=k==='source_page'?location.href.split('#')[0]:(st[k]||'')});
const s2=f.querySelector('.hvs2'),a=f.querySelector('[name=address]'),err=f.querySelector('.hverr'),lab=f.querySelector('.hvaddr');s2.disabled=true;
const go=()=>{const v=a.value.trim();if(v.length<5){err.hidden=false;a.setAttribute('aria-invalid','true');a.focus();return}err.hidden=true;a.removeAttribute('aria-invalid');lab.textContent='Home value for: '+v;f.classList.add('step2');s2.disabled=false;f.querySelector('[name=name]').focus()};
f.addEventListener('submit',e=>{if(!f.classList.contains('step2')){e.preventDefault();go();return}if(!f.checkValidity()){e.preventDefault();f.reportValidity()}});
f.querySelector('.hvback').addEventListener('click',()=>{f.classList.remove('step2');s2.disabled=true;a.focus()})})})();
/* Sell page banner, dismissible */
(()=>{const b=document.querySelector('.sbanner');if(!b)return;let off=false;try{off=localStorage.getItem('stellar_sbanner')==='off'}catch(e){}if(off)return;const n=document.querySelector('.nav'),pos=()=>{if(n)b.style.top=(n.getBoundingClientRect().bottom+10)+'px'};b.hidden=false;pos();addEventListener('resize',pos);addEventListener('scroll',()=>requestAnimationFrame(pos),{passive:true});b.querySelector('.sbx').addEventListener('click',()=>{b.hidden=true;try{localStorage.setItem('stellar_sbanner','off')}catch(e){}})})();

/* v3.9 Review cards: Read more toggle, shown only when the quote is clamped */
(()=>{document.querySelectorAll('.rvcard').forEach(c=>{const q=c.querySelector('.rvq'),p=q&&q.querySelector('p'),b=c.querySelector('.rvmore');if(!p||!b)return;const chk=()=>{if(!q.classList.contains('open'))b.hidden=p.scrollHeight<=p.clientHeight+2};chk();addEventListener('resize',chk);b.addEventListener('click',()=>{const o=q.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'Show less':'Read more'})})})();
