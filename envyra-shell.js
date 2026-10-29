/* ENVYRA shell — navbar, footer, modal de contacto y ENVYRA ID compartidos por todas las páginas.
   Uso en cada página: <link rel="stylesheet" href="envyra-shell.css"> + <script src="envyra-shell.js"></script> en <head>,
   y <envyra-nav></envyra-nav> / <envyra-footer></envyra-footer> donde van la barra y el pie (la barra, fuera del wrapper #s). */
(function(){
"use strict";
if(window.__ENVYRA_SHELL__)return;window.__ENVYRA_SHELL__=true;
var FILE=location.pathname.split('/').pop()||'index.html',HOME=/(^|\/)(index\.html)?$/.test(location.pathname),SELF=HOME?[FILE,'index.html']:[FILE];
var NAV="<nav class=\"ev\" aria-label=\"Principal\"><div class=\"w\"><a class=\"nb-logo\" href=\"index.html#inicio\" aria-label=\"Envyra, inicio\"><b>ENVYRΛ</b></a>\n<div class=\"nv\"><button type=\"button\" class=\"pm\" aria-expanded=\"false\" aria-controls=\"mm\" aria-haspopup=\"true\">Productos <svg viewBox=\"0 0 10 10\" aria-hidden=\"true\"><path d=\"M1 3.5l4 4 4-4\"/></svg></button><a href=\"index.html#partnerships\">Partners</a><a href=\"index.html#proceso\">Proceso</a><button type=\"button\" class=\"pm\" aria-expanded=\"false\" aria-controls=\"mm2\" aria-haspopup=\"true\">Empresa <svg viewBox=\"0 0 10 10\" aria-hidden=\"true\"><path d=\"M1 3.5l4 4 4-4\"/></svg></button></div>\n<div class=\"na\"><button type=\"button\" class=\"tx\" data-contact>Contacto</button><span class=\"sep\" aria-hidden=\"true\"></span><button type=\"button\" class=\"btn account-btn\" id=\"idOpen\">Iniciar sesión</button><button type=\"button\" class=\"btn create-account-btn\" id=\"idCreate\">Crear cuenta</button><button type=\"button\" class=\"btn w1\" data-demo>Solicitar demo</button><button type=\"button\" class=\"nb-burger\" id=\"nbBurger\" aria-expanded=\"false\" aria-controls=\"mob\" aria-label=\"Abrir menú\"><i></i><i></i></button></div></div>\n<div class=\"mm\" id=\"mm\"><div class=\"mw\"><div class=\"mg\"><div><h4 class=\"mono\">Plataforma</h4><a class=\"mi\" href=\"index.html#northunit\"><span><b>NorthUnit <em>Nuevo</em></b><small>CRM con IA para equipos comerciales</small></span></a><div class=\"fd\"><div class=\"fr\"><button type=\"button\" class=\"ft\" aria-expanded=\"false\" aria-label=\"Mostrar componentes de ENVYRA INTELLIGENCE\"><svg class=\"fc\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 6h7l2 2h9v11H3V6z\"/></svg><svg class=\"fo\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 19V6h7l2 2h8v3M3 19l2.5-8H22l-2.5 8H3z\"/></svg></button><a class=\"mi\" href=\"ENVYRAINTELLIGENCE.html\"><span><b>ENVYRA INTELLIGENCE</b><small>Infraestructura de IA: memoria, herramientas y API</small></span></a></div><div class=\"fk\"><div><a href=\"ENVYRAINTELLIGENCE.html#capas\"><b>Capas</b><small>Models, Memory, Tools e Infrastructure</small></a><a href=\"ENVYRAINTELLIGENCE.html#componentes\"><b>A001</b><small>Asistente en español con memoria de caso</small></a><a href=\"ENVYRAINTELLIGENCE.html#componentes\"><b>Memory Case</b><small>Contexto e instrucciones del caso</small></a><a href=\"ENVYRAINTELLIGENCE.html#componentes\"><b>ENVYRA CLOUD</b><small>API para guardar y recuperar la memoria</small></a><a href=\"ENVYRAINTELLIGENCE.html#demo\"><b>Demo interactiva</b><small>Probá A001 simulado</small></a></div></div></div><a class=\"mi\" href=\"envyra-cloud.html\"><span><b>ENVYRA CLOUD <em>En desarrollo</em></b><small>Infraestructura para conectar datos y agentes</small></span></a></div><div><h4 class=\"mono\">Experiencias</h4><a class=\"mi\" href=\"https://envyra23.github.io/MotionLayersEngine-/\" target=\"_blank\" rel=\"noopener\"><span><b>MotionLayers Engine <em>Beta</em></b><small>Interacción sin fricción, solo con una cámara</small></span></a></div><div><h4 class=\"mono\">Marca y movimiento</h4><a class=\"mi\" href=\"https://envyra23.github.io/REACH/\" target=\"_blank\" rel=\"noopener\"><span><b>Envyra Reach</b><small>Estrategia, creatividad y tecnología para marcas</small></span></a><a class=\"mi\" href=\"https://envyra23.github.io/The-Gold-Level/\" target=\"_blank\" rel=\"noopener\"><span><b>The Gold Level</b><small>Temporada de tratos para empresas</small></span></a></div></div><div class=\"mf\"><span>Todo lo que construye Envyra</span><a href=\"index.html#lanzado\">Ver todos los productos →</a></div></div></div><div class=\"mm\" id=\"mm2\"><div class=\"mw\"><div class=\"mg\">\n<div><h4 class=\"mono\">Compañía</h4>\n<a class=\"mi\" href=\"index.html#empresa\"><span><b>Visión</b><small>Qué construimos y cómo pensamos</small></span></a>\n<a class=\"mi\" href=\"index.html#proceso\"><span><b>Proceso</b><small>Cómo trabajamos de punta a punta</small></span></a>\n<a class=\"mi\" href=\"index.html#partnerships\"><span><b>Partnerships</b><small>Quienes ya construyen con Envyra</small></span></a></div>\n<div><h4 class=\"mono\">Colaborar</h4>\n<button type=\"button\" class=\"mi\" data-pt><span><b>Solicitar partnership</b><small>Sumá tu marca al ecosistema</small></span></button>\n<button type=\"button\" class=\"mi\" data-contact><span><b>Contacto</b><small>Contanos qué necesitás</small></span></button></div>\n<div><h4 class=\"mono\">Legal y código</h4>\n<a class=\"mi\" href=\"legal.html\"><span><b>Términos y condiciones</b><small>Condiciones de uso de Envyra</small></span></a>\n<a class=\"mi\" href=\"https://github.com/envyra23\" target=\"_blank\" rel=\"noopener\"><span><b>GitHub</b><small>Repositorios públicos de Envyra</small></span></a></div>\n</div><div class=\"mf\"><span>Elevando ideas al mundo digital</span><a href=\"index.html#partnerships\">Ver partnerships →</a></div></div></div>\n<div class=\"mob\" id=\"mob\" aria-hidden=\"true\">\n<h4 class=\"mono\">Productos</h4>\n<a class=\"mob-l\" href=\"index.html#northunit\">NorthUnit <em>Nuevo</em></a>\n<a class=\"mob-l\" href=\"ENVYRAINTELLIGENCE.html\">ENVYRA INTELLIGENCE</a>\n<a class=\"mob-l\" href=\"envyra-cloud.html\">ENVYRA CLOUD <em>En desarrollo</em></a>\n<a class=\"mob-l\" href=\"https://envyra23.github.io/MotionLayersEngine-/\" target=\"_blank\" rel=\"noopener\">MotionLayers Engine <em>Beta</em></a>\n<a class=\"mob-l\" href=\"https://envyra23.github.io/REACH/\" target=\"_blank\" rel=\"noopener\">Envyra Reach</a>\n<a class=\"mob-l\" href=\"https://envyra23.github.io/The-Gold-Level/\" target=\"_blank\" rel=\"noopener\">The Gold Level</a>\n<h4 class=\"mono\">Empresa</h4>\n<a class=\"mob-l\" href=\"index.html#partnerships\">Partners</a>\n<button type=\"button\" class=\"mob-l\" data-pt>Solicitar partnership</button>\n<a class=\"mob-l\" href=\"index.html#proceso\">Proceso</a>\n<a class=\"mob-l\" href=\"index.html#empresa\">Visión</a>\n<a class=\"mob-l\" href=\"legal.html\">Términos y condiciones</a>\n<div class=\"mob-act\"><button type=\"button\" class=\"btn lg\" data-contact>Contacto</button><button type=\"button\" class=\"btn lg\" id=\"mobCreate\">Crear cuenta</button><button type=\"button\" class=\"btn w1 lg\" data-demo>Solicitar demo</button></div>\n</div>\n</nav>",FOOT="<footer class=\"ev\"><div class=\"w\">\n<div class=\"f1\"><b>ENVYRΛ</b><p>Elevando ideas al mundo digital. Diseñamos y construimos sistemas que ponen a las empresas en movimiento.</p><button type=\"button\" class=\"btn\" data-contact>Contacto</button></div>\n<div><h3>Productos</h3><ul><li><a href=\"index.html#northunit\">NorthUnit</a></li><li><a href=\"ENVYRAINTELLIGENCE.html\">ENVYRA INTELLIGENCE</a></li><li><a href=\"envyra-cloud.html\">ENVYRA CLOUD</a></li><li><a href=\"https://envyra23.github.io/MotionLayersEngine-/\" target=\"_blank\" rel=\"noopener\">MotionLayers Engine</a></li><li><a href=\"https://envyra23.github.io/REACH/\" target=\"_blank\" rel=\"noopener\">Envyra Reach</a></li></ul></div>\n<div><h3>Empresa</h3><ul><li><a href=\"index.html#empresa\">Visión</a></li><li><a href=\"https://envyra23.github.io/The-Gold-Level/\" target=\"_blank\" rel=\"noopener\">The Gold Level</a></li><li><a href=\"index.html#proceso\">Proceso</a></li><li><a href=\"index.html#partnerships\">Partnerships</a></li><li><a href=\"legal.html\">Términos y condiciones</a></li></ul></div>\n<div><h3>Conectar</h3><ul><li><button type=\"button\" data-contact>Contacto</button></li><li><button type=\"button\" data-demo>Demo de NorthUnit</button></li><li><a href=\"https://github.com/envyra23\" target=\"_blank\" rel=\"noopener\">GitHub</a></li></ul></div>\n<div class=\"fb mono\"><span>© <span id=\"yr\">2026</span> Envyra. Todos los derechos reservados.</span><a href=\"#\" data-top>Volver arriba ↑</a></div>\n</div></footer>",IDM="<div class=\"ev id-layer\" id=\"idLayer\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"idTitle\" aria-hidden=\"true\">\n  <div class=\"id-in\">\n    <div class=\"id-top\"><b>ENVYRΛ <span style=\"color:var(--mut);font-weight:400\">ID</span></b><button type=\"button\" class=\"id-x\" id=\"idClose\" aria-label=\"Cerrar\"><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path d=\"M3 3l10 10M13 3L3 13\"/></svg></button></div>\n    <div class=\"id-main\"><div class=\"id-card\">\n      <h2 class=\"id-t\" id=\"idTitle\"></h2>\n      <p class=\"id-copy\" id=\"idCopy\"></p>\n      <form class=\"id-form\" id=\"idForm\">\n        <label id=\"idNameRow\"><span>Nombre</span><input id=\"idName\" type=\"text\" autocomplete=\"name\" placeholder=\"Tu nombre\"></label>\n        <label id=\"idEmailRow\"><span>Email</span><input id=\"idEmail\" type=\"email\" autocomplete=\"email\" placeholder=\"tu@email.com\"></label>\n        <label id=\"idPassRow\"><span>Contraseña</span><span class=\"id-pw\"><input id=\"idPassword\" type=\"password\" minlength=\"8\" autocomplete=\"current-password\" placeholder=\"Mínimo 8 caracteres\"><button type=\"button\" id=\"idEye\" aria-label=\"Mostrar contraseña\">Ver</button></span></label>\n        <button type=\"submit\" class=\"btn w1 id-submit\" id=\"idSubmit\"></button>\n      </form>\n      <div id=\"idSocial\"><div class=\"id-row\" id=\"idForgotRow\"><button type=\"button\" id=\"idForgot\">¿Olvidaste tu contraseña?</button></div><div class=\"id-sep\">o</div><button type=\"button\" class=\"btn id-ghost\" id=\"idGoogle\">Continuar con Google</button></div>\n      <div id=\"idSent\" hidden><button type=\"button\" class=\"btn id-ghost\" id=\"idResend\">Reenviar correo</button></div>\n      <div id=\"idAccount\" hidden>\n        <form id=\"idProfileForm\" class=\"ac\">\n          <section class=\"ac-sec\"><h3 class=\"mono\">Cuenta</h3>\n            <label class=\"ac-row\"><span>Nombre</span><input id=\"idProfileName\" type=\"text\" autocomplete=\"name\" maxlength=\"100\" required placeholder=\"Tu nombre\"></label>\n            <div class=\"ac-row\"><span>Correo</span><b id=\"idAccountEmail\"></b></div>\n            <div class=\"ac-row\"><span>Estado</span><b><em id=\"idEmailVerification\"></em><button type=\"button\" class=\"ac-link\" id=\"idVerifyResend\" hidden>Reenviar correo</button></b></div>\n            <div class=\"ac-row\"><span>Miembro desde</span><b id=\"idMemberSince\">—</b></div>\n          </section>\n          <section class=\"ac-sec\"><h3 class=\"mono\">Ecosistema ENVYRA</h3>\n            <div class=\"ac-row\"><span>ENVYRA CLOUD</span><i class=\"ac-badge\">En desarrollo</i></div>\n            <div class=\"ac-row\"><span>Acceso anticipado</span><b id=\"idCloudState\">—</b></div>\n            <div class=\"ac-act\"><button type=\"button\" class=\"btn ac-btn\" id=\"idCloudReq\" hidden>Solicitar acceso →</button></div>\n            <div class=\"ac-row\"><span>ENVYRA INTELLIGENCE</span><i class=\"ac-badge\">En desarrollo</i></div>\n            <div class=\"ac-row\"><span>Acceso</span><b>Próximamente</b></div>\n          </section>\n          <section class=\"ac-sec\"><h3 class=\"mono\">Preferencias</h3>\n            <label class=\"ac-row\"><span>Idioma</span><select id=\"idLanguage\"><option value=\"es\">Español</option><option value=\"en\">English</option></select></label>\n            <label class=\"ac-row\"><span>Novedades</span><span class=\"ac-sw\"><b id=\"idMarketingText\">Desactivadas</b><input id=\"idMarketing\" type=\"checkbox\" role=\"switch\"><i></i></span></label>\n          </section>\n        </form>\n        <div class=\"ac-actions\"><button type=\"submit\" form=\"idProfileForm\" class=\"btn w1 id-submit\" id=\"idSaveProfile\" disabled>Guardar cambios</button><button type=\"button\" class=\"btn id-ghost\" id=\"idSignOut\">Cerrar sesión</button></div>\n      </div>\n      <p class=\"id-status\" id=\"idStatus\" role=\"status\" aria-live=\"polite\"></p>\n      <p class=\"id-sw\" id=\"idSwRow\"><span id=\"idSwText\"></span> <button type=\"button\" id=\"idSwitch\"></button></p>\n    </div></div>\n  </div>\n</div>",CT="<div class=\"ev\" id=\"ct\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"ct-t\">\n<button type=\"button\" id=\"cc\" class=\"mono\">Cerrar ✕</button>\n<form id=\"cf\" action=\"https://formspree.io/f/mgopwaer\" method=\"POST\">\n<span class=\"mono\">Contacto</span><h2 id=\"ct-t\">Danos una señal.</h2>\n<label><span class=\"mono\">¿Cómo te llamas?</span><input type=\"text\" name=\"name\" required autocomplete=\"name\" placeholder=\"Tu nombre\"></label>\n<label><span class=\"mono\">Email de contacto</span><input type=\"email\" name=\"email\" required autocomplete=\"email\" placeholder=\"tu@email.com\"></label>\n<label><span class=\"mono\">Cuéntanos tu idea</span><textarea name=\"message\" rows=\"2\" placeholder=\"Breve descripción...\"></textarea></label>\n<button type=\"submit\" class=\"btn w1 lg\">Enviar</button><div id=\"st\" role=\"status\" aria-live=\"polite\"></div>\n</form></div>";
function localize(h){SELF.forEach(function(n){h=h.split('href="'+n+'#').join('href="#')});return h}
function mark(s){[].forEach.call(s.querySelectorAll('a[href]'),function(a){if(a.getAttribute('href')===FILE)a.setAttribute('aria-current','page')})}
function initNav(root){
var b=document.body;
/* Carpeta desplegable (ENVYRA INTELLIGENCE) */
root.querySelectorAll('.fd .ft').forEach(function(t){t.addEventListener('click',function(){var f=t.closest('.fd'),o=!f.classList.contains('on');f.classList.toggle('on',o);t.setAttribute('aria-expanded',o)})});
/* Menú de productos */
var nv=root.querySelector('nav.ev'),mt=null,pms=[].slice.call(root.querySelectorAll('.pm')),mps=pms.map(function(b){return document.getElementById(b.getAttribute('aria-controls'))}),mob=document.getElementById('mob'),bg=document.getElementById('nbBurger');
function sw(i){pms.forEach(function(b,k){var on=k===i;b.setAttribute('aria-expanded',on);mps[k].classList.toggle('on',on)})}
function mb(o){mob.classList.toggle('on',o);mob.setAttribute('aria-hidden',!o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú');if(o){var c=document.getElementById('idCreate'),m=document.getElementById('mobCreate');m.style.display=c&&c.style.display==='none'?'none':''}}
function mo(o){if(!o){sw(-1);mb(false)}}
pms.forEach(function(b,k){b.addEventListener('click',function(){sw(b.getAttribute('aria-expanded')==='true'?-1:k)})});
bg.addEventListener('click',function(){mb(!mob.classList.contains('on'))});
document.getElementById('mobCreate').addEventListener('click',function(){mb(false);document.getElementById('idCreate').click()});
if(matchMedia('(hover:hover) and (pointer:fine)').matches){pms.forEach(function(b,k){b.addEventListener('mouseenter',function(){clearTimeout(mt);sw(k)})});[].forEach.call(document.querySelectorAll('.nv>a'),function(a){a.addEventListener('mouseenter',function(){sw(-1)})});nv.addEventListener('mouseenter',function(){clearTimeout(mt)});nv.addEventListener('mouseleave',function(){mt=setTimeout(function(){sw(-1)},150)})}
document.addEventListener('click',function(e){if(!nv.contains(e.target))mo(false)});
addEventListener('keydown',function(e){if(e.key==='Escape')mo(false)});
addEventListener('resize',function(){if(innerWidth>900)mb(false)});
nv.querySelectorAll('.mm a,.mob a').forEach(function(a){a.addEventListener('click',function(){mo(false)})});
/* Contacto / demo NorthUnit (Formspree) */
var ct=document.getElementById('ct'),cf=document.getElementById('cf'),st=document.getElementById('st'),ti=document.getElementById('ct-t'),msg=cf.querySelector('textarea'),last=null,tm=null;
var T0=ti.textContent,P0=msg.placeholder;
function lead(on){cf.querySelectorAll('input[data-lead]').forEach(function(i){i.remove()});if(!on)return;
 [['producto','NorthUnit'],['_subject','Solicitud de demo · NorthUnit']].forEach(function(p){var i=document.createElement('input');i.type='hidden';i.name=p[0];i.value=p[1];i.setAttribute('data-lead','');cf.appendChild(i)})}
function openCt(isDemo,from){clearTimeout(tm);mo(false);last=from;lead(isDemo);st.textContent='';
 ti.textContent=isDemo?'Solicita tu demo de NorthUnit.':T0;msg.placeholder=isDemo?'Cuéntanos cómo vende tu equipo...':P0;
 ct.classList.add('on');b.style.overflow='hidden';setTimeout(function(){cf.querySelector('input').focus()},250)}
function closeCt(){if(!ct.classList.contains('on'))return;ct.classList.remove('on');b.style.overflow='';if(last)last.focus();tm=setTimeout(function(){lead(false);ti.textContent=T0;msg.placeholder=P0},450)}
document.addEventListener('click',function(ev){var e=ev.target.closest&&ev.target.closest('[data-contact],[data-demo]');if(e){openCt(e.hasAttribute('data-demo'),e);return}
 var p=ev.target.closest&&ev.target.closest('[data-pt]');if(p&&!document.getElementById('pa'))location.href='index.html#partnerships'});

document.getElementById('cc').addEventListener('click',closeCt);
addEventListener('keydown',function(e){if(e.key==='Escape')closeCt()});
cf.addEventListener('submit',function(e){e.preventDefault();st.textContent='Enviando...';
 fetch(cf.action,{method:cf.method,body:new FormData(cf),headers:{'Accept':'application/json'}}).then(function(res){
  if(res.ok){st.textContent='Gracias. Nos pondremos en contacto pronto.';cf.reset();setTimeout(closeCt,2500)}else st.textContent='Hubo un problema al enviar. Intenta de nuevo.'
 }).catch(function(){st.textContent='Error de conexión. Intenta de nuevo.'})});
}
function initAuth(){
(function(){
  const URL = "https://dgoemosdyuprdkxrivsc.supabase.co";
  const KEY = "sb_publishable_WG_aQUPxLpdoduCA6o73gg_YsXuFsZL";
  const $ = id => document.getElementById(id);
  const layer = $("idLayer"), openBtn = $("idOpen"), createBtn = $("idCreate");
  if(!layer || !openBtn || !createBtn) return;
  const client = window.supabase?.createClient ? window.supabase.createClient(URL, KEY, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}}) : null;
  const SITE_URL = "https://envyraweb.com";
  const PAGE_PATH = location.origin === "null" ? "/" + location.pathname.split("/").pop() : location.pathname;
  const redirect = SITE_URL + (PAGE_PATH === "/index.html" ? "/" : PAGE_PATH);
  const fromEmail = /type=(signup|email|magiclink)/.test(location.hash);
  const V = {
    login:  {t:"Inicia sesión en Envyra", copy:"Una sola cuenta para todo el ecosistema.", btn:"Iniciar sesión", f:["email","pass"], social:1, sw:["¿Aún no tienes cuenta?","Crear cuenta","signup"]},
    signup: {t:"Crea tu cuenta", copy:"Un solo acceso a los productos de Envyra.", btn:"Crear cuenta", f:["name","email","pass"], social:1, sw:["¿Ya tienes cuenta?","Iniciar sesión","login"]},
    forgot: {t:"Recupera tu contraseña", copy:"Te enviamos un enlace para crear una nueva.", btn:"Enviar enlace", f:["email"], sw:["","Volver a iniciar sesión","login"]},
    reset:  {t:"Nueva contraseña", copy:"Elige una de al menos 8 caracteres.", btn:"Guardar contraseña", f:["pass"]},
    sent:   {t:"Revisa tu correo", copy:"Enviamos un enlace de confirmación. Ábrelo para activar tu cuenta.", f:[], sent:1, sw:["","Volver a iniciar sesión","login"]},
    account:{t:"Mi cuenta", copy:"Tu ENVYRA ID y tu acceso al ecosistema.", f:[], account:1}
  };
  let view = "login", session = null, pending = "", prevFocus = null, profile = null, profileUserId = null;
  const subs = []; let autoClose = false;

  function status(m, k){ const s = $("idStatus"); s.textContent = m || ""; s.dataset.kind = k || ""; }
  function friendly(e){
    const m = (e && e.message || "").toLowerCase();
    if(m.includes("invalid login")) return "Email o contraseña incorrectos.";
    if(m.includes("already registered")) return "Ya existe una cuenta con ese email. Inicia sesión.";
    if(m.includes("at least")) return "La contraseña debe tener al menos 8 caracteres.";
    if(m.includes("rate limit") || m.includes("too many")) return "Demasiados intentos. Espera unos minutos y vuelve a probar.";
    if(m.includes("invalid") && m.includes("email")) return "Ese email no es válido.";
    if(m.includes("failed to fetch") || m.includes("network")) return "Sin conexión con ENVYRA ID. Revisa tu internet.";
    if(m.includes("same password")) return "La nueva contraseña debe ser distinta a la anterior.";
    return (e && e.message) || "No se pudo completar la operación. Intenta de nuevo.";
  }
  function setView(v){
    view = v; const c = V[v], f = c.f;
    $("idTitle").textContent = c.t;
    $("idCopy").textContent = c.copy;
    [["name","idNameRow","idName"],["email","idEmailRow","idEmail"],["pass","idPassRow","idPassword"]].forEach(([k,row,inp]) => {
      $(row).hidden = !f.includes(k); $(inp).required = f.includes(k);
    });
    $("idForm").hidden = !c.btn;
    $("idSubmit").textContent = c.btn || "";
    $("idPassword").autocomplete = v === "login" ? "current-password" : "new-password";
    $("idSocial").hidden = !c.social; $("idForgotRow").hidden = v !== "login";
    $("idSent").hidden = !c.sent; $("idAccount").hidden = !c.account; layer.classList.toggle("acc", !!c.account);
    $("idSwRow").hidden = !c.sw;
    if(c.sw){ $("idSwText").textContent = c.sw[0]; $("idSwitch").textContent = c.sw[1]; $("idSwitch").dataset.go = c.sw[2]; }
    $("idPassword").type = "password"; $("idEye").textContent = "Ver";
    status("", "");
  }
  function render(s){
    session = s || null; const u = session?.user || null;
    setTimeout(() => subs.forEach(f => f(session)), 0);
    openBtn.textContent = u ? "Mi cuenta" : "Iniciar sesión";
    createBtn.style.display = u ? "none" : "";
    $("idAccountEmail").textContent = u ? (u.email || "") : "";
    $("idEmailVerification").textContent = u ? (u.email_confirmed_at ? "Verificado ✓" : "Pendiente") : ""; $("idVerifyResend").hidden = !u || !!u.email_confirmed_at;
    if(u && view !== "reset") {
      if(view !== "account") setView("account");
      if(profileUserId !== u.id){ loadProfile(u); loadCloud(u); }
    } else if(!u && view === "account") {
      profile = null; profileUserId = null; cloud = null; setView("login");
    }
  }
  let cloud = null;
  const MES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  function setMember(data){
    const d = new Date((data && data.created_at) || session?.user?.created_at || "");
    $("idMemberSince").textContent = isNaN(d) ? "ENVYRA ID" : MES[d.getMonth()] + " " + d.getFullYear();
  }
  function syncDirty(){
    const m = $("idMarketing").checked; $("idMarketingText").textContent = m ? "Activadas" : "Desactivadas";
    const dirty = !!profile && ($("idProfileName").value.trim() !== (profile.full_name || "") || $("idLanguage").value !== (profile.preferred_language || "es") || m !== Boolean(profile.marketing_emails));
    $("idSaveProfile").disabled = !dirty;
  }
  function paintCloud(){
    const st = $("idCloudState"), btn = $("idCloudReq");
    if(cloud === "load"){ st.textContent = "Comprobando…"; btn.hidden = true; }
    else if(cloud === "error"){ st.textContent = "No se pudo comprobar"; btn.textContent = "Reintentar"; btn.hidden = false; }
    else if(cloud){ st.textContent = cloud.status === "approved" ? "Aprobado ✓" : "Solicitado"; btn.hidden = true; }
    else { st.textContent = "No solicitado"; btn.textContent = "Solicitar acceso →"; btn.hidden = false; }
  }
  async function loadCloud(user){
    if(!client || !user) return;
    cloud = "load"; paintCloud();
    const {data, error} = await client.from("cloud_waitlist").select("status, created_at").eq("user_id", user.id).maybeSingle();
    if(!session?.user || session.user.id !== user.id) return;
    if(error){ console.error("ENVYRA ID cloud:", error); cloud = "error"; } else cloud = data || false;
    paintCloud();
  }
  async function requestCloud(){
    if(!client || !session?.user) return offline();
    if(cloud === "error") return loadCloud(session.user);
    const b = $("idCloudReq"); b.disabled = true; b.textContent = "Enviando…"; status("", "");
    const {error} = await client.from("cloud_waitlist").insert({user_id:session.user.id, status:"pending"});
    b.disabled = false;
    if(error && !/duplicate|unique/i.test(error.message || "")){ console.error("ENVYRA ID cloud:", error); status("No se pudo registrar tu solicitud. Intenta de nuevo en unos minutos.", "error"); paintCloud(); return; }
    await loadCloud(session.user); status("Solicitud registrada. Te avisaremos cuando haya novedades.", "success");
  }
  async function loadProfile(user){
    if(!client || !user) return;
    profileUserId = user.id;
    status("Cargando tu perfil…", "");
    try {
      let {data, error} = await client.from("profiles").select("id, full_name, created_at, updated_at, avatar_url, preferred_language, marketing_emails").eq("id", user.id).maybeSingle();
      if(error) throw error;
      if(!data){
        const fallbackName = (user.user_metadata?.full_name || user.user_metadata?.name || (user.email || "").split("@")[0] || "Usuario").slice(0,100);
        const result = await client.from("profiles").upsert({id:user.id, full_name:fallbackName, preferred_language:"es", marketing_emails:false}).select("id, full_name, created_at, updated_at, avatar_url, preferred_language, marketing_emails").single();
        if(result.error) throw result.error;
        data = result.data;
      }
      if(!session?.user || session.user.id !== user.id) return;
      profile = data;
      $("idProfileName").value = data.full_name || user.user_metadata?.full_name || "";
      $("idLanguage").value = data.preferred_language || "es";
      $("idMarketing").checked = Boolean(data.marketing_emails); syncDirty();
      setMember(data);
      status("", "");
    } catch(err) {
      status("No pudimos cargar tu perfil. Revisa la conexión y los permisos de profiles en Supabase.", "error");
      console.error("ENVYRA ID profile load:", err);
    }
  }
  function focusFirst(){
    const vis = [...layer.querySelectorAll(".id-card input")].find(i => !i.closest("[hidden]"));
    (view === "account" ? $("idClose") : (vis || $("idClose"))).focus();
  }
  function show(){
    prevFocus = document.activeElement; layer.classList.add("on"); layer.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden"; setTimeout(focusFirst, 350);
  }
  function hide(){
    autoClose = false;
    layer.classList.remove("on"); layer.setAttribute("aria-hidden","true"); document.body.style.overflow = "";
    if(prevFocus?.focus) prevFocus.focus();
  }
  function offline(){ status("No se pudo cargar ENVYRA ID. Recarga la página e intenta de nuevo.", "error"); }

  openBtn.addEventListener("click", () => { if(!session?.user) setView("login"); show(); });
  createBtn.addEventListener("click", () => { setView("signup"); show(); });
  $("idClose").addEventListener("click", hide);
  $("idSwitch").addEventListener("click", e => setView(e.currentTarget.dataset.go));
  $("idForgot").addEventListener("click", () => setView("forgot"));
  $("idEye").addEventListener("click", () => { const p = $("idPassword"), on = p.type === "password"; p.type = on ? "text" : "password"; $("idEye").textContent = on ? "Ocultar" : "Ver"; });
  document.addEventListener("keydown", e => {
    if(!layer.classList.contains("on")) return;
    if(e.key === "Escape") return hide();
    if(e.key === "Tab"){
      const f = [...layer.querySelectorAll("button,input,select,a[href]")].filter(x => !x.disabled && !x.closest("[hidden]"));
      if(!f.length) return; const a = f[0], z = f[f.length-1];
      if(e.shiftKey && document.activeElement === a){ e.preventDefault(); z.focus(); }
      else if(!e.shiftKey && document.activeElement === z){ e.preventDefault(); a.focus(); }
    }
  });

  $("idForm").addEventListener("submit", async e => {
    e.preventDefault();
    if(!client) return offline();
    const email = $("idEmail").value.trim(), password = $("idPassword").value, name = $("idName").value.trim();
    const btn = $("idSubmit"), label = btn.textContent;
    btn.disabled = true; btn.textContent = "Un momento…"; status("Conectando con ENVYRA ID…", "");
    try{
      if(view === "signup"){
        if(password.length < 8) throw {message:"at least 8"};
        const {data, error} = await client.auth.signUp({email, password, options:{data:{full_name:name}, emailRedirectTo:redirect}});
        if(error) throw error;
        if(data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) throw {message:"already registered"};
        if(data.session){ render(data.session); status("Cuenta creada. Ya estás dentro.", "success"); if(autoClose) hide(); }
        else { pending = email; setView("sent"); status("Correo enviado a " + email + ".", "success"); }
      } else if(view === "login"){
        const {data, error} = await client.auth.signInWithPassword({email, password});
        if(error){
          if((error.message || "").toLowerCase().includes("not confirmed")){ pending = email; setView("sent"); status("Aún no confirmaste tu correo.", "error"); return; }
          throw error;
        }
        render(data.session); status("Sesión iniciada.", "success"); if(autoClose) hide();
      } else if(view === "forgot"){
        const {error} = await client.auth.resetPasswordForEmail(email, {redirectTo:redirect});
        if(error) throw error;
        status("Si el email tiene cuenta, recibirás un enlace en unos minutos.", "success");
      } else if(view === "reset"){
        const {data, error} = await client.auth.updateUser({password});
        if(error) throw error;
        view = "login"; render(session || {user:data.user}); status("Contraseña actualizada.", "success");
      }
    }catch(err){ status(friendly(err), "error"); }
    finally{ btn.disabled = false; if(!btn.closest("[hidden]")) btn.textContent = label; }
  });

  $("idResend").addEventListener("click", async () => {
    if(!client) return offline();
    const b = $("idResend"); b.disabled = true; status("Reenviando…", "");
    const {error} = await client.auth.resend({type:"signup", email:pending, options:{emailRedirectTo:redirect}});
    b.disabled = false; status(error ? friendly(error) : "Correo reenviado. Revisa también el spam.", error ? "error" : "success");
  });
  $("idGoogle").addEventListener("click", async () => {
    if(!client) return offline();
    status("Redirigiendo a Google…", "");
    const {error} = await client.auth.signInWithOAuth({provider:"google", options:{redirectTo:redirect}});
    if(error) status(friendly(error), "error");
  });
  $("idProfileForm").addEventListener("submit", async e => {
    e.preventDefault();
    if(!client || !session?.user) return offline();
    const name = $("idProfileName").value.trim();
    if(!name) return status("Escribe tu nombre para guardar el perfil.", "error");
    const btn = $("idSaveProfile"), label = btn.textContent;
    btn.disabled = true; btn.textContent = "Guardando…";
    status("Guardando cambios…", "");
    try {
      const payload = {id:session.user.id, full_name:name, preferred_language:$("idLanguage").value, marketing_emails:$("idMarketing").checked, updated_at:new Date().toISOString()};
      const {data, error} = await client.from("profiles").upsert(payload, {onConflict:"id"}).select("id, full_name, created_at, updated_at, avatar_url, preferred_language, marketing_emails").single();
      if(error) throw error;
      profile = data;
      setMember(data);
      status("Perfil actualizado.", "success");
    } catch(err) {
      console.error("ENVYRA ID profile save:", err);
      status("No se pudieron guardar los cambios. Revisa las políticas RLS de profiles en Supabase.", "error");
    } finally { btn.textContent = label; syncDirty(); }
  });

  $("idSignOut").addEventListener("click", async () => {
    if(!client) return offline();
    const b = $("idSignOut"); b.disabled = true; status("Cerrando sesión…", "");
    const {error} = await client.auth.signOut(); b.disabled = false;
    if(error) return status(friendly(error), "error");
    render(null); setView("login"); status("Sesión cerrada.", "success");
  });

  $("idProfileForm").addEventListener("input", syncDirty);
  $("idProfileForm").addEventListener("change", syncDirty);
  $("idCloudReq").addEventListener("click", requestCloud);
  $("idVerifyResend").addEventListener("click", async () => {
    if(!client || !session?.user?.email) return offline();
    const {error} = await client.auth.resend({type:"signup", email:session.user.email, options:{emailRedirectTo:redirect}});
    status(error ? friendly(error) : "Correo de verificación reenviado.", error ? "error" : "success");
  });
  window.ENVYRA_ID = {
    client,
    session: () => session,
    open(v, o){ autoClose = !!(o && o.closeOnAuth); if(!session?.user) setView(v || "login"); show(); },
    onChange(f){ subs.push(f); f(session); },
    refreshCloud(){ if(session?.user) loadCloud(session.user); }
  };
  setView("login");
  if(client){
    client.auth.getSession().then(({data}) => {
      render(data.session);
      if(fromEmail && data.session){ show(); status("Correo confirmado. Ya estás dentro.", "success"); }
    }).catch(() => render(null));
    client.auth.onAuthStateChange((ev, s) => {
      if(ev === "PASSWORD_RECOVERY"){ session = s; setView("reset"); show(); }
      else setTimeout(() => render(s), 0);
    });
  }
})();
}
function define(tag,build){if(!window.customElements||customElements.get(tag))return;customElements.define(tag,class extends HTMLElement{connectedCallback(){if(this._r)return;this._r=1;build(this)}})}
define('envyra-nav',function(h){
 h.innerHTML=localize(NAV)+localize(IDM)+CT;mark(h);
 if(FILE==='ENVYRAINTELLIGENCE.html'){var f=h.querySelector('.fd'),t=f&&f.querySelector('.ft');if(f){f.classList.add('on');t.setAttribute('aria-expanded','true')}}
 initNav(h);initAuth()});
define('envyra-footer',function(h){
 h.innerHTML=localize(FOOT);mark(h);var y=h.querySelector('#yr');if(y)y.textContent=new Date().getFullYear();
 var t=h.querySelector('[data-top]');if(t)t.addEventListener('click',function(e){e.preventDefault();scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})})});
})();
