(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(14),c=a.n(n),r=(a(36),a(6)),o=a(7),l=a(10),d=a(9),j=a(20),h=a.n(j),m=(a(37),a(15)),u=a(22),p=a(24),b=a.n(p),f=a(1),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(m.a)(e)),e}return Object(o.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e="data-theme",t=document.body,a="dark"===t.getAttribute(e)?"light":"dark";t.setAttribute(e,a)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var a=i.a.memo((function(){return Object(f.jsx)(u.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,t){return!0}));return Object(f.jsx)("header",{id:"home",style:{height:window.innerHeight-140,display:"block"},children:Object(f.jsx)("div",{className:"row aligner",style:{height:"100%"},children:Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),Object(f.jsx)("br",{}),Object(f.jsx)("h1",{className:"mb-0",children:Object(f.jsx)(u.a,{steps:[t],wrapper:"p"})}),Object(f.jsx)("div",{className:"title-container",children:Object(f.jsx)(a,{})}),Object(f.jsx)(b.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:Object(f.jsx)("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:Object(f.jsx)("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})]})})})})}}]),a}(s.Component),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return Object(f.jsx)("span",{className:"m-4",children:Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)("i",{className:e.class})})},e.name)}));return Object(f.jsx)("footer",{children:Object(f.jsxs)("div",{className:"col-md-12",children:[Object(f.jsx)("div",{className:"social-links",children:e}),Object(f.jsx)("div",{className:"copyright py-4 text-center",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("small",{children:["Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???"]})})})]})})}}]),a}(s.Component),g=a(18),v=a(25),y=a(26),w=a(27),N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,s=this.props.resumeBasicInfo.description;return Object(f.jsx)("section",{id:"about",children:Object(f.jsxs)("div",{className:"col-md-12",children:[Object(f.jsx)("h1",{style:{color:"black"},children:Object(f.jsx)("span",{children:t})}),Object(f.jsxs)("div",{className:"row center mx-auto mb-5",children:[Object(f.jsx)("div",{className:"col-md-4 mb-5 center",children:Object(f.jsx)("div",{className:"polaroid",children:Object(f.jsxs)("span",{style:{cursor:"auto"},children:[Object(f.jsx)("img",{height:"250px",src:e,alt:"Avatar placeholder"}),Object(f.jsx)(g.a,{icon:v.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),Object(f.jsx)(g.a,{icon:y.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),Object(f.jsx)(g.a,{icon:w.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})]})})}),Object(f.jsx)("div",{className:"col-md-8 center",children:Object(f.jsx)("div",{className:"col-md-10",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)("div",{className:"card-header",children:[Object(f.jsx)("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",Object(f.jsx)("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",Object(f.jsx)("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})]}),Object(f.jsxs)("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"},children:[Object(f.jsx)("br",{}),Object(f.jsxs)("span",{className:"wave",children:[a," :) "]}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),s]})]})})})]})]})})}}]),a}(s.Component),k=a(19),I=(a(46),a(21)),S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,t=this.props.resumeExperience.map((function(e,t){var a=e.technologies,s=e.mainTech.map((function(e,t){return Object(f.jsx)(I.a,{pill:!0,className:"main-badge mr-2 mb-2",children:e},t)})),i=a.map((function(e,t){return Object(f.jsx)(I.a,{pill:!0,className:"experience-badge mr-2 mb-2",children:e},t)}));return Object(f.jsxs)(k.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:Object(f.jsx)("i",{className:"fab fa-angular experience-icon"}),children:[Object(f.jsx)("div",{style:{textAlign:"left",marginBottom:"4px"},children:s}),Object(f.jsx)("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"},children:e.title}),Object(f.jsx)("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"},children:e.company}),Object(f.jsx)("div",{style:{textAlign:"left",marginTop:"15px"},children:i})]},t)}));return Object(f.jsxs)("section",{id:"resume",className:"pb-5",children:[Object(f.jsx)("div",{className:"col-md-12 mx-auto",children:Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsx)("h1",{className:"section-title",style:{color:"black"},children:Object(f.jsx)("span",{className:"text-black",style:{textAlign:"center"},children:e})})})}),Object(f.jsx)("div",{className:"col-md-8 mx-auto",children:Object(f.jsxs)(k.VerticalTimeline,{children:[t,Object(f.jsx)(k.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:Object(f.jsx)("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})})]})})]})}}]),a}(s.Component),B=a(4),L=a(53),C=a(28),A=a.n(C),D=a(29),_=a.n(D),$=a(30),T=a.n($),E=(a(47),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,s=this.props.data.description,i=this.props.data.url;if(this.props.data.technologies){var n=e.map((function(e,t){return Object(f.jsx)("li",{className:"list-inline-item mx-3",children:Object(f.jsx)("span",{children:Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)("i",{className:e.class,style:{fontSize:"300%"},children:Object(f.jsx)("p",{className:"text-center",style:{fontSize:"30%"},children:e.name})})})})},t)}));if(this.props.data.images)var c=t.map((function(e,t){return Object(f.jsx)("div",{"data-src":e},t)}))}}return Object(f.jsxs)(L.a,Object(B.a)(Object(B.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside",children:[Object(f.jsx)("span",{onClick:this.props.onHide,className:"modal-close",children:Object(f.jsx)("i",{className:"fas fa-times fa-3x close-icon"})}),Object(f.jsxs)("div",{className:"col-md-12",children:[Object(f.jsxs)("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"},children:[Object(f.jsxs)("div",{className:"slider-tab",children:[Object(f.jsx)("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",Object(f.jsx)("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",Object(f.jsx)("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})]}),Object(f.jsx)(A.a,{cssModule:[_.a,T.a],animation:"scaleOutAnimation",className:"slider-image",children:c})]}),Object(f.jsxs)("div",{className:"col-md-10 mx-auto",children:[Object(f.jsxs)("h3",{style:{padding:"5px 5px 0 5px"},children:[a,i?Object(f.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"link-href",children:Object(f.jsx)("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})}):null]}),Object(f.jsx)("p",{className:"modal-description",children:s}),Object(f.jsx)("div",{className:"col-md-12 text-center",children:Object(f.jsx)("ul",{className:"list-inline mx-auto",children:n})})]})]})]}))}}]),a}(s.Component)),z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={deps:{},detailsModalShow:!1},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map((function(t){return Object(f.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",style:{cursor:"pointer"},children:Object(f.jsx)("span",{className:"portfolio-item d-block",children:Object(f.jsx)("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a},children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:t.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),Object(f.jsx)("span",{className:"project-date",children:t.startDate}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{className:"project-title-settings mt-3",children:t.title})]})})})},t.title)}));return Object(f.jsx)("section",{id:"portfolio",children:Object(f.jsxs)("div",{className:"col-md-12",children:[Object(f.jsx)("h1",{className:"section-title",style:{color:"black"},children:Object(f.jsx)("span",{children:t})}),Object(f.jsx)("div",{className:"col-md-12 mx-auto",children:Object(f.jsx)("div",{className:"row mx-auto",children:a})}),Object(f.jsx)(E,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})]})})}}]),a}(s.Component),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return Object(f.jsx)("li",{className:"list-inline-item mx-3",children:Object(f.jsx)("span",{children:Object(f.jsx)("div",{className:"text-center skills-tile",children:Object(f.jsx)("i",{className:e.class,style:{fontSize:"220%"},children:Object(f.jsx)("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"},children:e.name})})})})},t)}));return Object(f.jsx)("section",{id:"skills",children:Object(f.jsxs)("div",{className:"col-md-12",children:[Object(f.jsx)("div",{className:"col-md-12",children:Object(f.jsx)("h1",{className:"section-title",children:Object(f.jsx)("span",{className:"text-white",children:e})})}),Object(f.jsx)("div",{className:"col-md-12 text-center",children:Object(f.jsx)("ul",{className:"list-inline mx-auto skill-icon",children:t})})]})})}}]),a}(s.Component),W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},s}return Object(o.a)(a,[{key:"applyPickedLanguage",value:function(e,t){this.swapCurrentlyActiveLanguage(t),document.documentElement.lang=e;var a=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(a)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var t=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(t).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){h.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){h.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)(x,{sharedData:this.state.sharedData.basic_info}),Object(f.jsxs)("div",{className:"col-md-12 mx-auto text-center language",children:[Object(f.jsx)("div",{onClick:function(){return e.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)},style:{display:"inline"},children:Object(f.jsx)("span",{className:"iconify language-icon mr-5","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$primaryLanguageIconId})}),Object(f.jsx)("div",{onClick:function(){return e.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId)},style:{display:"inline"},children:Object(f.jsx)("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-poland","data-inline":"false",id:window.$secondaryLanguageIconId})})]}),Object(f.jsx)(N,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),Object(f.jsx)(z,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),Object(f.jsx)(P,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),Object(f.jsx)(S,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),Object(f.jsx)(O,{sharedBasicInfo:this.state.sharedData.basic_info})]})}}]),a}(s.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(49);window.$primaryLanguage="es",window.$secondaryLanguage="en",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",c.a.render(Object(f.jsx)(W,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portafolio-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/portafolio-react","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var s=a.headers.get("content-type");404===a.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[50,1,2]]]);
//# sourceMappingURL=main.ddfee758.chunk.js.map