(this["webpackJsonpproject-vinca"]=this["webpackJsonpproject-vinca"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(22),s=n.n(c),i=(n(62),n(63),n(12)),r=n(34),o=n(54),l=n(55),j=n(8),d="GET_ALL_MEMBERS_REQUEST",h="GET_ALL_MEMBERS_SUCCESS",b="GET_ALL_MEMBERS_FAILURE",m="GET_ONE_MEMBER_SUCCESS",u="GET_ALL_PICTURES_REQUEST",p="GET_ALL_PICTURES_SUCCESS",x="GET_ALL_PICTURES_FAILURE",O="GET_ALL_NEWS_REQUEST",g="GET_ALL_NEWS_SUCCESS",f="GET_ALL_NEWS_FAILURE",v="GET_ALL_PROJECTS_REQUEST",y="GET_ALL_PROJECTS_SUCCESS",N="GET_ALL_PROJECTS_FAILURE",_="GET_ALL_COLLABORATORS_REQUEST",E="GET_ALL_COLLABORATORS_SUCCESS",w="GET_ALL_COLLABORATORS_FAILURE",S={members:[],loading:!1,error:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case h:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,members:t.payload});case m:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,member:t.payload});case b:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,members:[]});default:return e}},C={pictures:[],loading:!1,error:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case p:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,pictures:t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,pictures:[]});default:return e}},T={news:[],loading:!1,error:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case g:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,news:t.payload});case f:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,news:[]});default:return e}},A={projects:[],loading:!1,error:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case y:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,projects:t.payload});case N:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,projects:[]});default:return e}},U={collaborators:[],loading:!1,error:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case E:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,collaborators:t.payload});case w:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,collaborators:[]});default:return e}},F=Object(r.combineReducers)({members:k,galleries:L,news:I,projects:R,collaborators:M});var G=n(11),B=n(9),P=n(81),D=n(82),V=n(83),W=n(17),q=n.n(W),z=n(25),H=n(30),K=n(0),J=function(){return console.log("ddd"),Object(K.jsx)("div",{className:"tilt-flex-container",children:Object(K.jsx)("div",{className:"tilt-container",children:Object(K.jsxs)("div",{className:"tilt-box-wrap",children:[Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("span",{className:"t_over"}),Object(K.jsx)("div",{className:"tilt-box",children:Object(K.jsx)("div",{className:"title-box-img",children:Object(K.jsx)("img",{src:"".concat("/project-vinca","/assets/images/logo/logo.png"),alt:"logo"})})})]})})})},Q=function(){return Object(K.jsx)(P.a,{fluid:!0,className:"home-component",children:Object(K.jsxs)(D.a,{className:"mt-5",children:[Object(K.jsx)(V.a,{xs:12,className:"mb-4",children:Object(K.jsx)("p",{className:"text-center",children:"WELCOME TO COHERENCE PRESENTATION WEBPAGE!"})}),Object(K.jsx)(V.a,{xs:12,className:"mb-4",children:Object(K.jsx)(J,{})})]})})},X=n(84),Y=function(){return Object(K.jsx)("div",{className:"google-map-responsive",children:Object(K.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6738.017513254816!2d20.594040340726146!3d44.760671971813565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a77bd70f1af15%3A0x6e2717a482120a4e!2sVin%C4%8Da%20Nuclear%20Research%20Institute!5e0!3m2!1sen!2srs!4v1623748074236!5m2!1sen!2srs",width:"600",height:"450",allowFullScreen:"",loading:"lazy",title:"Vinca Google Map"})})},Z=function(){return Object(K.jsxs)(P.a,{className:"contact-container",children:[Object(K.jsx)(D.a,{className:"mt-5 mb-5",children:Object(K.jsxs)(V.a,{className:"contact-text",children:[Object(K.jsxs)("p",{children:[Object(K.jsx)("span",{children:"Institution:"})," Vin\u010da Institute of Nuclear Sciences, Laboratory for Atomic Physics"]}),Object(K.jsxs)("p",{children:[Object(K.jsx)("span",{children:Object(K.jsx)(X.a,{src:"".concat("/project-vinca","/assets/images/logo/telephone.png"),rounded:!0,className:"telephone-img-icon"})})," ","+381 11 2455 272"]}),Object(K.jsxs)("p",{children:[Object(K.jsxs)("span",{children:[" ",Object(K.jsx)(X.a,{src:"".concat("/project-vinca","/assets/images/logo/email.png"),rounded:!0,className:"email-img-icon"})]}),"goran79@vin.bg.ac.rs"]}),Object(K.jsxs)("p",{children:[Object(K.jsx)("span",{children:Object(K.jsx)(X.a,{src:"".concat("/project-vinca","/assets/images/logo/house.png"),rounded:!0,className:"house-img-icon"})})," ","Mike Petrovi\u0107a Alasa 12-14, 11351 Belgrade, Serbia"]})]})}),Object(K.jsx)(D.a,{children:Object(K.jsx)(V.a,{children:Object(K.jsx)(Y,{})})})]})},$=function(e){return e.members},ee=function(e){return e.galleries},te=function(e){return e.collaborators},ne=function(e){var t=e.model,n=e.images,a=e.handleClose,c=e.activeIndex,s=e.prevImg,i=e.nextImg;return Object(K.jsxs)("div",{className:t?"model-gallery open-model":"model-gallery",children:[Object(K.jsx)("div",{className:"close_image_container",children:Object(K.jsx)("span",{className:"close_image",onClick:a,children:"\u2716"})}),n.map((function(e,t){return Object(K.jsx)("div",{className:t===c?"model-gallery-img active-model-img":"inactive-model-img",children:Object(K.jsx)("img",{src:"".concat("/project-vinca","/assets/images/galleries/").concat(e.name),alt:"gallery"})},e.id)})),Object(K.jsxs)("div",{className:"slider_arrows",children:[Object(K.jsx)("span",{className:"slide_prev",onClick:s,children:"\u276e"}),Object(K.jsx)("span",{className:"slide_next",onClick:i,children:"\u276f"})]})]})},ae=function(e){var t=e.images,n=Object(a.useState)(!1),c=Object(H.a)(n,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(H.a)(r,2),l=o[0],j=o[1],d=Object(a.useState)(0),h=Object(H.a)(d,2),b=h[0],m=h[1],u=t.length-1;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ne,{model:s,images:t,handleClose:function(){i(!1)},activeIndex:b,imgSorce:l,prevImg:function(){m(b<1?u:b-1)},nextImg:function(){m(b===u?0:b+1)}}),Object(K.jsx)("div",{className:"gallery-all",children:t.map((function(e,t){return Object(K.jsx)("div",{className:"gallery-pics",onClick:function(){return function(e){m(e),i(!0),j(e)}(t)},children:Object(K.jsx)("img",{src:"".concat("/project-vinca","/assets/images/galleries/").concat(e.name),alt:e.name})},e.id)}))})]})},ce=n(87),se=function(e){return Object(K.jsx)(ce.a,{variant:"danger",className:"mt-1 text-center",children:Object(K.jsx)(ce.a.Heading,{children:e.children})})},ie=function(){return Object(K.jsx)("div",{className:"spinerComponent mt-3",children:Object(K.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(K.jsx)("span",{className:"sr-only",children:"Loading..."})})})},re=function(){var e=Object(i.b)(),t=Object(i.c)(ee),n=t.pictures,c=t.loading,s=t.error;return Object(a.useEffect)((function(){e(function(){var e=Object(z.a)(q.a.mark((function e(t){var n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u}),e.prev=1,e.next=4,fetch("".concat("/project-vinca","/db/gallery.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t({type:p,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:x,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),s?Object(K.jsx)(se,{children:Object(K.jsx)("h2",{children:"Something went wrong!"})}):c?Object(K.jsx)(ie,{}):Object(K.jsx)(P.a,{children:Object(K.jsxs)(D.a,{className:"mt-5",children:[Object(K.jsx)(V.a,{xs:12,children:Object(K.jsx)("h3",{className:"text-center",children:"Gallery"})}),Object(K.jsx)(V.a,{xs:12,children:n.images&&n.images.length?Object(K.jsx)(ae,{images:n.images}):""})]})})},oe=function(){return console.log("sss"),Object(K.jsxs)(P.a,{className:"centar-container",children:[Object(K.jsx)(D.a,{className:"mt-5",children:Object(K.jsxs)(V.a,{children:[Object(K.jsxs)("p",{className:"text-justify",children:["Establishment of the COHERENCE Center (Center for light-based research and technologies) stemmed from the need for associates to unite resources, exchange and connect knowledge, skills and experiences and thus raise quality and clearer directions of research, in which light is used. Center COHERENCE is an interdisciplinary research center gathering researchers from different scientific fields: physics, chemistry, photonics, biomedicine and engineering sharing the same interest and goal -",Object(K.jsx)("span",{className:"center-component-goals",children:"achieving excellence in scientific research in physics, chemistry, biomedicine and optobiomedical engineering based on the application of light."})]}),Object(K.jsx)("p",{children:"The COHERENCE Center will achieve its goal by connecting research teams from four institutions:"})]})}),Object(K.jsx)(D.a,{children:Object(K.jsx)(V.a,{children:Object(K.jsx)("div",{className:"centerInstitution",children:Object(K.jsxs)("ul",{style:{listStyleImage:"url(".concat("/project-vinca","/assets/images/logo/play_black.png)")},children:[Object(K.jsx)("li",{children:Object(K.jsxs)("a",{href:"https://www.vin.bg.ac.rs/en/",target:"_blank",rel:"noreferrer",children:["Vin\u010da Institute of Nuclear Sciences, National Institute of the Republic of Serbia"," "]})}),Object(K.jsx)("li",{children:Object(K.jsxs)("a",{href:"https://www.etf.bg.ac.rs/en#gsc.tab=0",target:"_blank",rel:"noreferrer",children:["School of Electrical Engineering, University of Belgrade"," "]})}),Object(K.jsx)("li",{children:Object(K.jsxs)("a",{href:"https://www.ni.ac.rs/en/faculties/faculty-of-sciences-and-mathematics",target:"_blank",rel:"noreferrer",children:["Faculty of Sciences and Mathematics, University of Ni\u0161"," "]})}),Object(K.jsx)("li",{children:Object(K.jsxs)("a",{href:"http://chem.pmf.kg.ac.rs ",target:"_blank",rel:"noreferrer",children:["Department of Chemistry, Faculty of Science, University of Kragujevac"," "]})})]})})})}),Object(K.jsxs)(D.a,{className:"mt-5",children:[Object(K.jsxs)(V.a,{sm:12,md:6,className:"text-justify centerOurMission",children:[Object(K.jsx)("h4",{className:"text-center",children:"OUR MISSION"}),Object(K.jsx)("p",{children:"To connect groups and institutions involved in different aspects of the application of light in scientific fields and disciplines, to improve and accelerate process of innovation and application of research results using comprehensive multidisciplinary approach."})]}),Object(K.jsxs)(V.a,{sm:12,md:6,className:"text-justify centerOurMission",children:[Object(K.jsx)("h4",{className:"text-center",children:"OUR VISION"}),Object(K.jsx)("p",{children:"To become the leading center for the application of light in various areas of scientific work in the region and recognizable in the European research area."})]})]})]})},le=function(e){var t=e.title,n=e.link;return Object(K.jsx)("div",{className:"button-link",children:Object(K.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(K.jsx)("span",{children:t})})})},je=function(){return Object(K.jsxs)(P.a,{children:[Object(K.jsx)(D.a,{className:"mt-5 partnersrow mb-5",children:Object(K.jsxs)(V.a,{xs:12,children:[Object(K.jsx)("h4",{children:"Vin\u010da Institute of Nuclear Sciences, National Institute of the Republic of Serbia"}),Object(K.jsx)("p",{className:"text-justify mt-3 mb-3",children:"Vin\u010da Institute of Nuclear Sciences (INNV) is regarded as Serbia\u2019s leading scientific institute in fundamental and applied research, owing to its size, scientific productivity, international reputation in research, and the quality of its scientific personnel and research facilities. INNV is a member of the University of Belgrade and the scientific staff of the Institute significantly contributes to the process of knowledge exchange in science-education model in Serbia. Over the past seventy years, more than 1000 Ph.D thesis have been made at the Institute. Today, the Institute with 311 researchers and 210 Ph.D. students is the host for 73 national projects and more than 60 international projects classified as EU H2020, IEAE, COST, EUREKA, Erasmus+, Bilateral, as well as other international scientific research collaborations in which the Republic of Serbia is a member."}),Object(K.jsx)("div",{className:"text-center",children:Object(K.jsx)(le,{title:"visit site",link:"https://www.vin.bg.ac.rs/en/"})})]})}),Object(K.jsx)(D.a,{className:"mt-5 partnersrow mb-5",children:Object(K.jsxs)(V.a,{xl:12,children:[Object(K.jsx)("h4",{children:"School of Electrical Engineering, University of Belgrade"}),Object(K.jsx)("p",{className:"text-justify mt-3 mb-3",children:'The School of Electrical Engineering at the University of Belgrade (ETF) was established in 1948. ETF is a top educational and scientific institution in the field of electrical engineering, computer science, photonics and nanomaterials. More than 1,000 students enrol in BA, MS and PhD programmes every year. In particular, ETF group involved in this proposal has provided significant contributions in the field of semiconductor devices and nanostructures. To reach this goal, a specialized Center for nanostructures, nanoelectronics and nonophotonics (3N Center) was opened. The most noticeable achievements of the ETF group are related to the optimization of the optical properties of nanostructures. This group has established a host of numerical simulation techniques for the so-called "quantum engineering" that was applied in the design and optimization of the structural parameters.'}),Object(K.jsx)("div",{className:"text-center",children:Object(K.jsx)(le,{title:"visit site",link:"https://www.etf.bg.ac.rs/en#gsc.tab=0"})})]})}),Object(K.jsx)(D.a,{className:"mt-5 partnersrow mb-5",children:Object(K.jsxs)(V.a,{md:12,children:[Object(K.jsx)("h4",{children:"Faculty of Sciences and Mathematics, University of Ni\u0161"}),Object(K.jsx)("p",{className:"text-justify mt-3 mb-3",children:"The Faculty of Sciences and Mathematics (UNFSM), University of Ni\u0161, has been a credible educational institution for years, involved in both national and international research and innovation projects. UNFSM educates students in the fields of mathematics, computer science, physics, chemistry, biology and ecology, and geography. Over the past five years, the Faculty has participated in 38 national and 18 international projects, as well as in COST actions and bilateral projects. The Faculty is currently involved in 11 international projects (H2020, Erasmus+, COST, bilateral research projects). Also, the Faculty has been involved in European and global programs of academic mobility and exchange at all levels. Furthermore, the Faculty has experience in the coordination of science promotion projects and has been a significant contributor, participant, and coordinator of the European Researchers Night in the previous years."}),Object(K.jsx)("div",{className:"text-center",children:Object(K.jsx)(le,{title:"visit site",link:"https://www.ni.ac.rs/en/faculties/faculty-of-sciences-and-mathematics"})})]})}),Object(K.jsx)(D.a,{className:"mt-5 partnersrow mb-5",children:Object(K.jsxs)(V.a,{md:12,children:[Object(K.jsx)("h4",{children:"Department of Chemistry, Faculty of Science, University of Kragujevac"}),Object(K.jsx)("p",{className:"text-justify mt-3 mb-3",children:"The Department of Chemistry is one of the organizational units of the Faculty of Science, University of Kragujevac. At the Department are organized bachelor, master and doctoral academic studies of chemistry. The Institute has well-equipped scientific research laboratories for inorganic, organic, analytical, physical chemistry, biochemistry and chemistry teaching methodology. About 24 teachers, 4 assistants and 25 researchers, research associates and scholarship holders are engaged in several scientific research and other national and international projects. They publish the results of their research in well-known international scientific journals and cooperate with a large number of institutions in the country and abroad."}),Object(K.jsx)("div",{className:"text-center",children:Object(K.jsx)(le,{title:"visit site",link:"http://chem.pmf.kg.ac.rs"})})]})})]})},de=function(){return Object(K.jsx)(P.a,{children:Object(K.jsx)(D.a,{className:"mt-5",children:Object(K.jsx)(V.a,{children:Object(K.jsx)("p",{children:"project"})})})})},he=n(86),be=n(88),me=n(85),ue=n(19),pe=function(){return Object(K.jsxs)(he.a,{collapseOnSelect:!0,expand:"lg",className:"navbar-component",children:[Object(K.jsx)(he.a.Brand,{href:"/",children:Object(K.jsx)(X.a,{src:"".concat("/project-vinca","/assets/images/logo/logo_temp.png"),rounded:!0,className:"logoPhoton"})}),Object(K.jsx)(he.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(K.jsx)(he.a.Collapse,{children:Object(K.jsxs)(be.a,{children:[Object(K.jsx)(ue.LinkContainer,{to:"/",children:Object(K.jsx)(be.a.Link,{children:"Home"})}),Object(K.jsxs)(me.a,{title:"About",children:[Object(K.jsx)(ue.LinkContainer,{to:"/about/center",children:Object(K.jsx)(me.a.Item,{children:"Center"})}),Object(K.jsx)(ue.LinkContainer,{to:"/about/institutions",children:Object(K.jsx)(me.a.Item,{children:"Partner institutions"})}),Object(K.jsx)(ue.LinkContainer,{to:"/about/collaborators",children:Object(K.jsx)(me.a.Item,{children:"Collaborators"})}),Object(K.jsx)(ue.LinkContainer,{to:"/about/gallery",children:Object(K.jsx)(me.a.Item,{variant:"dark",children:"Gallery"})})]}),Object(K.jsx)(ue.LinkContainer,{to:"/members",children:Object(K.jsx)(be.a.Link,{children:"Members"})}),Object(K.jsxs)(me.a,{title:"Groups",children:[Object(K.jsx)(ue.LinkContainer,{to:"/groups/optobiomedical",children:Object(K.jsx)(me.a.Item,{children:"Opto-biomedical engineering"})}),Object(K.jsx)(ue.LinkContainer,{to:"/groups/biologyandphysics",children:Object(K.jsx)(me.a.Item,{children:"Investigation of complex systems in biology and physics"})}),Object(K.jsx)(ue.LinkContainer,{to:"/groups/photodynamictherapy",children:Object(K.jsx)(me.a.Item,{children:"Photodynamic therapy development"})})]}),Object(K.jsx)(ue.LinkContainer,{to:"/projects",children:Object(K.jsx)(be.a.Link,{children:"Projects"})}),Object(K.jsx)(ue.LinkContainer,{to:"/news",children:Object(K.jsx)(be.a.Link,{children:"News"})}),Object(K.jsx)(ue.LinkContainer,{to:"/contact",children:Object(K.jsx)(be.a.Link,{children:"Contact"})})]})})]})},xe=function(){return Object(K.jsx)("header",{children:Object(K.jsx)(P.a,{fluid:!0,children:Object(K.jsx)(D.a,{children:Object(K.jsx)(pe,{})})})})};var Oe=function(){return Object(K.jsx)("footer",{children:Object(K.jsx)(P.a,{className:"footer-container",children:Object(K.jsxs)(D.a,{children:[Object(K.jsx)(V.a,{xs:12,sm:4,children:Object(K.jsx)("div",{className:"footer-contact",children:Object(K.jsxs)("p",{children:["Mike Petrovi\u0107a Alasa 12-14, 11351 Belgrade, Serbia ",Object(K.jsx)("br",{}),"Tel. +381 11 2455 272 ",Object(K.jsx)("br",{}),"E-mail. goran79@vin.bg.ac.rs"]})})}),Object(K.jsx)(V.a,{xs:12,sm:8,children:Object(K.jsx)("div",{className:"footer-list-container",children:Object(K.jsxs)(D.a,{children:[Object(K.jsxs)(V.a,{sm:12,md:6,className:"footer-list mb-3",children:[Object(K.jsx)("p",{children:"MORE INFORMATION"}),Object(K.jsxs)("ul",{className:"list-group",children:[Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/about/center",children:"Center"})}),Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/about/institutions",children:"Partners"})}),Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/about/collaborators",children:"Collaborators"})}),Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/projects",children:"Projects"})}),Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/news",children:"News"})})]})]}),Object(K.jsxs)(V.a,{sm:12,md:6,className:"footer-list mb-3",children:[Object(K.jsx)("p",{children:"TEAM MEMBERS"}),Object(K.jsxs)("ul",{className:"list-group",children:[Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/members",children:"All members"})}),Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/groups/optobiomedical",children:"Opto-biomedical engineering"})}),Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/groups/biologyandphysics",children:"Investigation of complex systems in biology and physics"})}),Object(K.jsx)("li",{children:Object(K.jsx)(G.Link,{to:"/groups/photodynamictherapy",children:"Photodynamic therapy development"})})]})]})]})})})]})})})},ge=function(){return function(){var e=Object(z.a)(q.a.mark((function e(t){var n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:d}),e.prev=1,e.next=4,fetch("".concat("/project-vinca","/db/teamMembers.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t({type:h,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:b,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},fe=n(89),ve=function(e){var t=e.data,n=e.teamName,a=Object(B.n)().url;if(0===t.length)return Object(K.jsx)("p",{children:"list members cannot be loaded"});var c=t.members.filter((function(e){return e.institution.includes(n)}));return Object(K.jsx)("div",{className:"members-institution-list",children:Object(K.jsx)(fe.a,{variant:"flush",children:c.map((function(e){return Object(K.jsx)(fe.a.Item,{className:"members-institution-list-item",children:Object(K.jsxs)(G.Link,{to:"".concat(a,"/").concat(e.id),style:{textDecoration:"none",color:"#000"},children:[e.academic_title," ",e.name," (",e.job_title,")"," "]})},e.id)}))})})},ye=function(){var e=Object(i.b)(),t=Object(i.c)($),n=t.members,c=t.loading,s=t.error;return Object(a.useEffect)((function(){e(ge())}),[e]),s?Object(K.jsx)(se,{children:Object(K.jsx)("h2",{children:"Something went wrong!"})}):c?Object(K.jsx)(ie,{}):Object(K.jsx)(P.a,{className:"members-container",children:Object(K.jsxs)(D.a,{children:[Object(K.jsxs)(V.a,{xs:12,className:"membersinstitution",children:[Object(K.jsx)("h3",{children:"Vin\u010da Institute of Nuclear Sciences"}),Object(K.jsx)(ve,{data:n,teamName:"Vinca_Institute_of_Nuclear_Sciences"})]}),Object(K.jsxs)(V.a,{xs:12,className:"membersinstitution",children:[Object(K.jsx)("h3",{children:"School of Electrical Engineering, University of Belgrade"}),Object(K.jsx)(ve,{data:n,teamName:"School_of_Electrical_Engineering_University_of_Belgrade"})]}),Object(K.jsxs)(V.a,{xs:12,className:"membersinstitution",children:[Object(K.jsx)("h3",{children:"Faculty of Sciences and Mathematics, University of Ni\u0161"}),Object(K.jsx)(ve,{data:n,teamName:"Faculty_of_Sciences_and_Mathematics_University_of_Nis"})]}),Object(K.jsxs)(V.a,{xs:12,className:"membersinstitution",children:[Object(K.jsx)("h3",{children:"Faculty of Science, Department for Chemistry, University of Kragujevac"}),Object(K.jsx)(ve,{data:n,teamName:"Faculty_of_Science_Department_for_Chemistry_University_of_Kragujevac"})]})]})})},Ne=function(e){var t=e.title,n=e.handleClick;return Object(K.jsx)("div",{className:"button-action",children:Object(K.jsx)("button",{type:"button",onClick:n,children:t})})},_e=function(e){var t=e.data,n=e.handleGoBack;return Object(K.jsxs)("div",{className:"team-member-container",children:[Object(K.jsx)(D.a,{className:"mb-4",children:Object(K.jsx)(V.a,{xs:12,children:Object(K.jsx)("h2",{children:t.name})})}),Object(K.jsxs)(D.a,{children:[Object(K.jsx)(V.a,{xs:12,sm:6,children:Object(K.jsx)("div",{className:"person-img-container",children:Object(K.jsx)(X.a,{className:"person-img",src:"".concat("/project-vinca","/assets/images/personal_image/").concat(t.photo),fluid:!0})})}),Object(K.jsxs)(V.a,{xs:12,sm:6,children:[Object(K.jsx)("h4",{children:t.job_title}),t.tel&&Object(K.jsxs)("p",{children:["Tel: ",t.tel]}),t.fax&&Object(K.jsxs)("p",{children:["Fax: ",t.fax]}),t.email&&Object(K.jsxs)("p",{children:["Email: ",t.email]}),t.personal_url&&Object(K.jsx)("a",{href:"".concat(t.personal_url),target:"_blank",rel:"noreferrer",className:"btn btn-info btn-lg active button-PDF-team-member",role:"button","aria-pressed":"true",children:"personal link"})]})]}),Object(K.jsx)(D.a,{className:"mt-5 mb-5",children:Object(K.jsxs)(V.a,{children:[Object(K.jsx)("h4",{children:"Research Interest"}),Object(K.jsx)(fe.a,{variant:"flush",children:t.research_interest.map((function(e){return Object(K.jsx)(fe.a.Item,{className:"list-group-item list-group-item-action list-group-item-light",children:e},e)}))})]})}),Object(K.jsx)(D.a,{className:"mt-5 mb-5",children:Object(K.jsxs)(V.a,{children:[Object(K.jsx)("h4",{children:"Professional Positions"}),Object(K.jsx)(fe.a,{variant:"flush",children:t.professional_positions.map((function(e){return Object(K.jsx)(fe.a.Item,{className:"list-group-item list-group-item-action list-group-item-light",children:e},e)}))})]})}),Object(K.jsx)(D.a,{className:"mt-5 mb-5",children:Object(K.jsxs)(V.a,{children:[Object(K.jsx)("h4",{children:"Education"}),Object(K.jsx)(fe.a,{variant:"flush",children:t.education.map((function(e){return Object(K.jsx)(fe.a.Item,{className:"list-group-item list-group-item-action list-group-item-light",children:e},e)}))})]})}),Object(K.jsx)(D.a,{children:Object(K.jsx)(V.a,{xs:12,children:Object(K.jsxs)("div",{className:"buttons-for-member",children:[Object(K.jsx)("div",{className:"buttons-items-for-member",children:t.cv&&Object(K.jsx)(le,{title:"resume",link:"".concat("/project-vinca","/assets/pdf/cv/").concat(t.cv)})}),Object(K.jsx)("div",{className:"buttons-items-for-member",children:t.publications&&Object(K.jsx)(le,{title:"publications",link:t.publications})}),Object(K.jsx)("div",{className:"buttons-items-for-member",children:Object(K.jsx)(Ne,{title:"go back",handleClick:n})})]})})})]})},Ee=function(e){var t=e.match.params.memberId,n=Object(B.k)(),c=Object(i.b)(),s=Object(i.c)((function(e){return e.members})),r=s.member,o=s.loading,l=s.error;Object(a.useEffect)((function(){var e;c((e=t,function(){var t=Object(z.a)(q.a.mark((function t(n){var a,c,s;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:d}),t.prev=1,t.next=4,fetch("".concat("/project-vinca","/db/teamMembers.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,s=c.members.find((function(t){return t.id===Number(e)})),n({type:m,payload:s}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),n({type:b,error:t.t0});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()))}),[c]);return l?Object(K.jsx)(se,{children:"Something went wrong!"}):o?Object(K.jsx)(ie,{}):Object(K.jsx)(P.a,{children:r?Object(K.jsx)(_e,{data:r,handleGoBack:function(){return n.goBack()}}):Object(K.jsx)(D.a,{children:Object(K.jsx)(V.a,{children:Object(K.jsx)("h1",{className:"member-not-exist",children:"Member does not exist"})})})})},we=function(){return Object(K.jsx)(P.a,{children:Object(K.jsx)(D.a,{className:"mt-5",children:Object(K.jsx)(V.a,{children:Object(K.jsx)("p",{children:"news"})})})})},Se=function(){return Object(K.jsx)(P.a,{fluid:!0,children:Object(K.jsx)(D.a,{children:Object(K.jsx)(V.a,{className:"pagenotfound",children:Object(K.jsx)("h3",{children:"Page Not Found!"})})})})},ke=function(e){var t=e.data,n=e.teamName;Object(B.n)().url;if(0===t.length)return Object(K.jsx)("p",{children:"list members cannot be loaded"});var a=t.members.filter((function(e){return e.groups.includes(n)&&!e.group_leader.includes(n)})),c=t.members.filter((function(e){return e.group_leader.includes(n)})),s=a.sort((function(e,t){return e.level>t.level?-1:e.level<t.level?1:0}));return Object(K.jsx)("div",{className:"group-list",children:Object(K.jsxs)(fe.a,{variant:"flush",children:[Object(K.jsx)(fe.a.Item,{className:"group-list-item",children:Object(K.jsxs)(G.Link,{to:"/members/".concat(c[0].id),style:{textDecoration:"none",color:"#000"},children:[c[0].academic_title," ",c[0].name," (Group leader)"]})},c[0].id),s.map((function(e,t){return Object(K.jsx)(fe.a.Item,{className:"group-list-item",children:Object(K.jsxs)(G.Link,{to:"/members/".concat(e.id),style:{textDecoration:"none",color:"#000"},children:[e.academic_title," ",e.name]})},e.id)}))]})})},Ce=function(e){var t=e.teamName,n=e.title,c=e.description,s=e.picture,r=Object(i.b)(),o=Object(i.c)($),l=o.members,j=o.loading,d=o.error;return Object(a.useEffect)((function(){r(ge())}),[r]),d?Object(K.jsx)(se,{children:Object(K.jsx)("h2",{children:"Something went wrong!"})}):j?Object(K.jsx)(ie,{}):Object(K.jsxs)(P.a,{className:"groups-component",children:[Object(K.jsx)(D.a,{className:"mt-5 groups-border",children:Object(K.jsxs)(V.a,{xs:12,children:[Object(K.jsx)("h3",{className:"mb-3",children:n}),Object(K.jsx)("p",{className:"mt-3 text-justify",children:c})]})}),Object(K.jsxs)(D.a,{children:[Object(K.jsxs)(V.a,{xs:12,sm:6,className:"groups-picture",children:[Object(K.jsx)(X.a,{src:s,fluid:!0}),Object(K.jsx)("p",{children:n})]}),Object(K.jsx)(V.a,{xs:12,sm:{order:"first"},children:Object(K.jsx)(ke,{data:l,teamName:t})})]})]})},Le=function(){var e="".concat("/project-vinca","/assets/images/galleries/image1.jpg");return Object(K.jsx)(Ce,{teamName:"Group_for_opto_biomedical_engineering",title:"Group for optobiomedical engineering (OBE)",description:"Our primary interest is development of multi-sensor system (polycardiograph) for non-invasive recording of mechanical, acoustic and electrical parameters of cardio vascular signals and the signal analysis to provide early diagnostics of cardiovascular diseases.  The main hypothesis is that any heart dysfunction is followed by simultaneous changes in the electric heart activity, biomechanics of cardiovascular system, in blood pressure in arteries and heart ventricle, blood propagation, synchronization of opening and closing of heart valves etc.  We assume that these changes will reflect on the signals detected and measured by multisensory in real time. We will adapt available and propose new, highly sensitive and efficient, algorithms and methods based on machine and deep learning for signal analysis and early diagnostics of potential heart failure. The close collaboration with clinicians and engineers is inevitable in order to reach the final aim - to provide a new, efficient diagnostic apparatus to clinics.",picture:e})},Te=function(){var e="".concat("/project-vinca","/assets/images/galleries/image1.jpg");return Object(K.jsx)(Ce,{teamName:"Group_for_investigation_of_complex_systems_in_biology_and_physics",title:"Group for investigation of complex phenomena in biological and physical systems (ICP)",description:"We focus on the phenomena and processes driven by light and driving light propagation through different optical and biological media. Both aspects of light, classical and quantum, are investigated regarding the light-matter interaction peculiarities.   Governed by an increasing interest in breaking standard measurement limits, in reaching ultrafast and efficient transfer and coding of information, multi-tasking quantum computers, highly efficient sensors and strong and precise lasers, we attempt to model light propagation through artificial photonic structures: photonic lattices (one-, two- and three dimensional), wave-guide arrays,  networks of ring and helical resonators. This will help to overcome limitations of materials available in nature and construction of easy manageable photonic platforms for investigation of new physical phenomena which can stimulate new breakthroughs in quantum technologies. Two main areas of research will be nonlinear and topological photonics and quantum nanooptics. ",picture:e})},Ie=function(){var e="".concat("/project-vinca","/assets/images/galleries/image2.jpg");return Object(K.jsx)(Ce,{teamName:"Group_for_photodynamic_therapy_development",title:"Group for development of systems for photodynamical therapy (FDT)",description:"The cancer therapy based on light has been of huge interest in bio - medically oriented sciences due to increased efficiencies of phototherapeutic approaches, as well as control of detrimental effects from environment on human health.  Regarding this, the activation of drugs by light of proper characteristics is the most promising procedure for efficient therapy of many diseases in medicine and pharmacy. We focus on development of nanocomposites whose activity is sensitively dependent on the light wavelength and intensity. We are targeting the efficient and sensitive cancer therapies (melanoma, cervical cancer, ovarian cancer and colon cancer), advantageous analytical techniques for detection of biological small mass molecules,   investigation of role of aneorobic microorganisms in recovery of intestinal microflora after antibiotic treatment and application in laser dermatology. Our activity intrinsically involves teams of experts in photonics, biology, chemistry, medicine and signal analysis.",picture:e})},Ae=function(){var e=Object(i.b)(),t=Object(i.c)(te),n=t.collaborators,c=t.error,s=t.loading;return Object(a.useEffect)((function(){e(function(){var e=Object(z.a)(q.a.mark((function e(t){var n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:_}),e.prev=1,e.next=4,fetch("".concat("/project-vinca","/db/collaboratorsDB.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t({type:E,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:w,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),c?Object(K.jsx)(se,{children:Object(K.jsx)("h2",{children:"Something went wrong!"})}):s?Object(K.jsx)(ie,{}):Object(K.jsxs)(P.a,{className:"collaborators",children:[Object(K.jsx)(D.a,{className:"mt-5",children:Object(K.jsx)(V.a,{xs:12,children:Object(K.jsx)("p",{className:"text-justify collaborators-class",children:"The success of the Center's associates is reflected in their ability to establish and nurture long-term collaborations that have resulted in: joint patents and works in peer-reviewed international journals, joint projects, professional training of young researchers in partner institutions, joint organization of international gatherings and other related activities that all contribute long-term sustainability of the Center of Excellence."})})}),Object(K.jsxs)(D.a,{className:"",children:[Object(K.jsxs)(V.a,{xs:12,className:"mb-3 ",children:[" ",Object(K.jsx)("h5",{className:"collaborators-class",children:"List of collaborators:"})]}),Object(K.jsx)(V.a,{xs:12,sm:3}),Object(K.jsxs)(V.a,{xs:12,sm:6,className:"mt-3 mb-3",children:[Object(K.jsx)("h5",{children:"Opto-biomedical engineering"}),Object(K.jsx)("div",{className:"collaboratorsInstitution",children:Object(K.jsx)("ul",{children:n.opto_biomedical_engineering&&n.opto_biomedical_engineering.map((function(e){return Object(K.jsx)("li",{style:{listStyleImage:"url(".concat("/project-vinca","/assets/images/logo/play_black.png)")},children:Object(K.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.name_of_collaborator})},e.id)}))})})]}),Object(K.jsx)(V.a,{xs:12,sm:3}),Object(K.jsx)(V.a,{xs:12,sm:3}),Object(K.jsxs)(V.a,{xs:12,sm:6,className:"mt-3 mb-3",children:[Object(K.jsx)("h5",{children:"Investigation of complex systems in biology and physics"}),Object(K.jsx)("div",{className:"collaboratorsInstitution",children:Object(K.jsx)("ul",{children:n.investigation_of_complex_systems_in_biology_and_physics&&n.investigation_of_complex_systems_in_biology_and_physics.map((function(e){return Object(K.jsx)("li",{style:{listStyleImage:"url(".concat("/project-vinca","/assets/images/logo/play_black.png)")},children:Object(K.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.name_of_collaborator})},e.id)}))})})]}),Object(K.jsx)(V.a,{xs:12,sm:3}),Object(K.jsx)(V.a,{xs:12,sm:3}),Object(K.jsxs)(V.a,{xs:12,sm:6,className:"mt-3 mb-3",children:[Object(K.jsx)("h5",{children:"Photodynamic therapy development"}),Object(K.jsx)("div",{className:"collaboratorsInstitution",children:Object(K.jsx)("ul",{children:n.photodynamic_therapy_development&&n.photodynamic_therapy_development.map((function(e){return Object(K.jsx)("li",{style:{listStyleImage:"url(".concat("/project-vinca","/assets/images/logo/play_black.png)")},children:Object(K.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.name_of_collaborator})},e.id)}))})})]}),Object(K.jsx)(V.a,{xs:12,sm:3})]})]})},Re=function(){return console.log("ddd"),Object(K.jsx)(G.HashRouter,{basename:"/coherence",children:Object(K.jsxs)("div",{children:[Object(K.jsx)(xe,{}),Object(K.jsx)("div",{className:"page-container",children:Object(K.jsxs)(B.g,{children:[Object(K.jsx)(B.d,{path:"/",exact:!0,children:Object(K.jsx)(Q,{})}),Object(K.jsx)(B.d,{path:"/about/center",exact:!0,children:Object(K.jsx)(oe,{})}),Object(K.jsx)(B.d,{path:"/about/institutions",exact:!0,children:Object(K.jsx)(je,{})}),Object(K.jsx)(B.d,{path:"/about/collaborators",exact:!0,children:Object(K.jsx)(Ae,{})}),Object(K.jsx)(B.d,{path:"/about/gallery",exact:!0,children:Object(K.jsx)(re,{})}),Object(K.jsx)(B.d,{exact:!0,path:"/members",children:Object(K.jsx)(ye,{})}),Object(K.jsx)(B.d,{exact:!0,path:"/members/:memberId",component:Ee}),Object(K.jsx)(B.d,{exact:!0,path:"/groups/optobiomedical",children:Object(K.jsx)(Le,{})}),Object(K.jsx)(B.d,{exact:!0,path:"/groups/biologyandphysics",children:Object(K.jsx)(Te,{})}),Object(K.jsx)(B.d,{exact:!0,path:"/groups/photodynamictherapy",children:Object(K.jsx)(Ie,{})}),Object(K.jsx)(B.d,{path:"/projects",exact:!0,children:Object(K.jsx)(de,{})}),Object(K.jsx)(B.d,{path:"/news",exact:!0,children:Object(K.jsx)(we,{})}),Object(K.jsx)(B.d,{path:"/contact",exact:!0,children:Object(K.jsx)(Z,{})}),Object(K.jsx)(B.d,{children:Object(K.jsx)(Se,{})})]})}),Object(K.jsx)(Oe,{})]})})};var Ue,Me=function(){return Object(K.jsx)("div",{className:"main-wraper",children:Object(K.jsx)(Re,{})})},Fe=(n(75),Object(r.createStore)(F,Ue,Object(l.composeWithDevTools)(Object(r.applyMiddleware)(o.a))));s.a.render(Object(K.jsx)(i.a,{store:Fe,children:Object(K.jsx)(Me,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.caddd986.chunk.js.map