(this["webpackJsonpproject-vinca"]=this["webpackJsonpproject-vinca"]||[]).push([[0],{63:function(e,t,r){},64:function(e,t,r){},77:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(22),i=r.n(c),a=(r(63),r(64),r(14)),s=r(34),l=r(54),o=r(55),j=r(15),h="GET_ALL_MEMBERS_REQUEST",d="GET_ALL_MEMBERS_SUCCESS",b="GET_ALL_MEMBERS_FAILURE",x="GET_ONE_MEMBER_SUCCESS",m="GET_ALL_PICTURES_REQUEST",u="GET_ALL_PICTURES_SUCCESS",O="GET_ALL_PICTURES_FAILURE",f={members:[],loading:!1,error:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case d:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,members:t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,member:t.payload});case b:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,members:[]});default:return e}},g={pictures:[],loading:!1,error:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null});case u:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,pictures:t.payload});case O:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.error,pictures:[]});default:return e}},w=Object(s.combineReducers)({members:p,galleries:v});var y=r(21),_=r(8),N=r(87),k=r(89),E=r(86),S=r(20),C=r(0),I=function(){return Object(C.jsxs)(N.a,{expand:"lg",children:[Object(C.jsx)(N.a.Brand,{href:"/",children:"COHERENCE"}),Object(C.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsx)(N.a.Collapse,{id:"basic-navbar-nav",children:Object(C.jsxs)(k.a,{className:"mr-auto",children:[Object(C.jsx)(S.LinkContainer,{to:"/",children:Object(C.jsx)(k.a.Link,{children:"Home"})}),Object(C.jsxs)(E.a,{title:"About",id:"basic-nav-dropdown",children:[Object(C.jsx)(S.LinkContainer,{to:"/about/center",children:Object(C.jsx)(E.a.Item,{children:"Center"})}),Object(C.jsx)(S.LinkContainer,{to:"/about/institutions",children:Object(C.jsx)(E.a.Item,{children:"Partner institutions"})}),Object(C.jsx)(S.LinkContainer,{to:"/about/collaborators",children:Object(C.jsx)(E.a.Item,{children:"Collaborators"})}),Object(C.jsx)(S.LinkContainer,{to:"/about/gallery",children:Object(C.jsx)(E.a.Item,{variant:"dark",children:"Gallery"})})]}),Object(C.jsx)(S.LinkContainer,{to:"/members",children:Object(C.jsx)(k.a.Link,{children:"Members"})}),Object(C.jsx)(S.LinkContainer,{to:"/groups",children:Object(C.jsx)(k.a.Link,{children:"Groups"})}),Object(C.jsx)(S.LinkContainer,{to:"/projects",children:Object(C.jsx)(k.a.Link,{children:"Projects"})}),Object(C.jsx)(S.LinkContainer,{to:"/news",children:Object(C.jsx)(k.a.Link,{children:"News"})}),Object(C.jsx)(S.LinkContainer,{to:"/contact",children:Object(C.jsx)(k.a.Link,{children:"Contact"})})]})})]})},U=r(82),T=r(83),L=r(84),M=r(19),F=r.n(M),A=r(31),B=r(29),R=function(){return Object(C.jsx)(U.a,{fluid:!0,children:Object(C.jsx)(T.a,{children:Object(C.jsx)(L.a,{className:"homeComponent",children:Object(C.jsx)("h1",{children:"WELCOME TO COHERENCE PRESENTATION WEBPAGE!"})})})})},P=function(){return Object(C.jsx)(U.a,{children:Object(C.jsx)(T.a,{className:"mt-5",children:Object(C.jsx)(L.a,{children:Object(C.jsx)("p",{children:"Contact"})})})})},G=function(e){return e.members},z=function(e){return e.galleries},D=function(e){var t=e.model,r=e.images,n=e.handleClose,c=e.activeIndex,i=e.prevImg,a=e.nextImg;return Object(C.jsxs)("div",{className:t?"model-gallery open-model":"model-gallery",children:[Object(C.jsx)("div",{className:"close_image_container",children:Object(C.jsx)("span",{className:"close_image",onClick:n,children:"\u2716"})}),r.map((function(e,t){return Object(C.jsx)("div",{className:t===c?"model-gallery-img active-model-img":"inactive-model-img",children:Object(C.jsx)("img",{src:"".concat("/project-vinca","/assets/images/galleries/").concat(e.name),alt:"gallery"})},e.id)})),Object(C.jsxs)("div",{className:"slider_arrows",children:[Object(C.jsx)("span",{className:"slide_prev",onClick:i,children:"\u276e"}),Object(C.jsx)("span",{className:"slide_next",onClick:a,children:"\u276f"})]})]})},H=function(e){var t=e.images,r=Object(n.useState)(!1),c=Object(B.a)(r,2),i=c[0],a=c[1],s=Object(n.useState)(""),l=Object(B.a)(s,2),o=l[0],j=l[1],h=Object(n.useState)(0),d=Object(B.a)(h,2),b=d[0],x=d[1],m=t.length-1;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(D,{model:i,images:t,handleClose:function(){a(!1)},activeIndex:b,imgSorce:o,prevImg:function(){x(b<1?m:b-1)},nextImg:function(){x(b===m?0:b+1)}}),Object(C.jsx)("div",{className:"gallery-all",children:t.map((function(e,t){return Object(C.jsx)("div",{className:"gallery-pics",onClick:function(){return function(e){x(e),a(!0),j(e)}(t)},children:Object(C.jsx)("img",{src:"".concat("/project-vinca","/assets/images/galleries/").concat(e.name),alt:e.name})},e.id)}))})]})},V=r(88),K=function(e){return Object(C.jsx)(V.a,{variant:"danger",className:"mt-1 text-center",children:Object(C.jsx)(V.a.Heading,{children:e.children})})},q=function(){return Object(C.jsx)("div",{className:"spinerComponent mt-3",children:Object(C.jsx)("div",{className:"spinner-border text-success",role:"status",children:Object(C.jsx)("span",{className:"sr-only",children:"Loading..."})})})},Q=function(){var e=Object(a.b)(),t=Object(a.c)(z),r=t.pictures,c=t.loading,i=t.error;return Object(n.useEffect)((function(){e(function(){var e=Object(A.a)(F.a.mark((function e(t){var r,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.prev=1,e.next=4,fetch("".concat("/project-vinca","/db/gallery.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,t({type:u,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:O,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),i?Object(C.jsx)(K,{children:Object(C.jsx)("h2",{children:"Something went wrong!"})}):c?Object(C.jsx)(q,{}):Object(C.jsx)(U.a,{children:Object(C.jsx)(T.a,{children:Object(C.jsx)(L.a,{children:r.images&&r.images.length?Object(C.jsx)(H,{images:r.images}):""})})})},W=function(){return Object(C.jsxs)(U.a,{children:[Object(C.jsx)(T.a,{className:"mt-5",children:Object(C.jsxs)(L.a,{children:[Object(C.jsxs)("p",{className:"text-justify",children:["Establishment of the COHERENCE Center (Center for light-based research and technologies) stemmed from the need for associates to unite resources, exchange and connect knowledge, skills and experiences and thus raise quality and clearer directions of research, in which light is used. Center COHERENCE is an interdisciplinary research center gathering researchers from different scientific fields: physics, chemistry, photonics, biomedicine and engineering sharing the same interest and goal",Object(C.jsx)("span",{className:"centerComponentGoals",children:"- achieving excellence in scientific research in physics, chemistry, biomedicine and optobiomedical engineering based on the application of light."})]}),Object(C.jsx)("p",{children:"The COHERENCE Center will achieve its goal by connecting research teams from four institutions:"})]})}),Object(C.jsx)(T.a,{children:Object(C.jsx)(L.a,{children:Object(C.jsx)("div",{className:"centerInstitution",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsxs)("a",{href:"https://www.vin.bg.ac.rs/en/",target:"_blank",rel:"noreferrer",children:["Vin\u010da Institute of Nuclear Sciences, National Institute of the Republic of Serbia"," "]})}),Object(C.jsx)("li",{children:Object(C.jsxs)("a",{href:"https://www.etf.bg.ac.rs/en#gsc.tab=0",target:"_blank",rel:"noreferrer",children:["School of Electrical Engineering, University of Belgrade"," "]})}),Object(C.jsx)("li",{children:Object(C.jsxs)("a",{href:"https://www.ni.ac.rs/en/faculties/faculty-of-sciences-and-mathematics",target:"_blank",rel:"noreferrer",children:["Faculty of Sciences and Mathematics, University of Ni\u0161"," "]})}),Object(C.jsx)("li",{children:Object(C.jsxs)("a",{href:"http://chem.pmf.kg.ac.rs ",target:"_blank",rel:"noreferrer",children:["Department of Chemistry, Faculty of Science, University of Kragujevac"," "]})})]})})})}),Object(C.jsxs)(T.a,{className:"mt-5",children:[Object(C.jsxs)(L.a,{xs:12,className:"text-justify centerOurMission",children:[Object(C.jsx)("span",{children:"OUR MISSION"}),": to connect groups and institutions involved in different aspects of the application of light in scientific fields and disciplines, to improve and accelerate process of innovation and application of research results using comprehensive multidisciplinary approach."]}),Object(C.jsxs)(L.a,{xs:12,className:"text-justify centerOurMission",children:[Object(C.jsx)("span",{children:"OUR VISION"}),": to become the leading center for the application of light in various areas of scientific work in the region and recognizable in the European research area."]})]})]})},J=function(){return Object(C.jsxs)(U.a,{children:[Object(C.jsx)(T.a,{className:"mt-5 partnersrow mb-5",children:Object(C.jsxs)(L.a,{xs:12,children:[Object(C.jsx)("h4",{children:"Vin\u010da Institute of Nuclear Sciences, National Institute of the Republic of Serbia"}),Object(C.jsx)("p",{className:"text-justify mt-3 mb-3",children:"Vin\u010da Institute of Nuclear Sciences (INNV) is regarded as Serbia\u2019s leading scientific institute in fundamental and applied research, owing to its size, scientific productivity, international reputation in research, and the quality of its scientific personnel and research facilities. INNV is a member of the University of Belgrade and the scientific staff of the Institute significantly contributes to the process of knowledge exchange in science-education model in Serbia. Over the past seventy years, more than 1000 Ph.D thesis have been made at the Institute. Today, the Institute with 311 researchers and 210 Ph.D. students is the host for 73 national projects and more than 60 international projects classified as EU H2020, IEAE, COST, EUREKA, Erasmus+, Bilateral, as well as other international scientific research collaborations in which the Republic of Serbia is a member."}),Object(C.jsx)("div",{className:"text-center",children:Object(C.jsx)("a",{href:"https://www.vin.bg.ac.rs/en/",target:"_blank",rel:"noreferrer",className:"btn btn-outline-info",children:"VISIT SITE"})})]})}),Object(C.jsx)(T.a,{className:"mt-5 partnersrow mb-5",children:Object(C.jsxs)(L.a,{xl:12,children:[Object(C.jsx)("h4",{children:"School of Electrical Engineering, University of Belgrade"}),Object(C.jsx)("p",{className:"text-justify mt-3 mb-3",children:'The School of Electrical Engineering at the University of Belgrade (ETF) was established in 1948. ETF is a top educational and scientific institution in the field of electrical engineering, computer science, photonics and nanomaterials. More than 1,000 students enrol in BA, MS and PhD programmes every year. In particular, ETF group involved in this proposal has provided significant contributions in the field of semiconductor devices and nanostructures. To reach this goal, a specialized Center for nanostructures, nanoelectronics and nonophotonics (3N Center) was opened. The most noticeable achievements of the ETF group are related to the optimization of the optical properties of nanostructures. This group has established a host of numerical simulation techniques for the so-called "quantum engineering" that was applied in the design and optimization of the structural parameters.'}),Object(C.jsx)("div",{className:"text-center",children:Object(C.jsx)("a",{href:"https://www.etf.bg.ac.rs/en#gsc.tab=0",target:"_blank",rel:"noreferrer",className:"btn btn-outline-info",children:"VISIT SITE"})})]})}),Object(C.jsx)(T.a,{className:"mt-5 partnersrow mb-5",children:Object(C.jsxs)(L.a,{md:12,children:[Object(C.jsx)("h4",{children:"Faculty of Sciences and Mathematics, University of Ni\u0161"}),Object(C.jsx)("p",{className:"text-justify mt-3 mb-3",children:"The Faculty of Sciences and Mathematics (UNFSM), University of Ni\u0161, has been a credible educational institution for years, involved in both national and international research and innovation projects. UNFSM educates students in the fields of mathematics, computer science, physics, chemistry, biology and ecology, and geography. Over the past five years, the Faculty has participated in 38 national and 18 international projects, as well as in COST actions and bilateral projects. The Faculty is currently involved in 11 international projects (H2020, Erasmus+, COST, bilateral research projects). Also, the Faculty has been involved in European and global programs of academic mobility and exchange at all levels. Furthermore, the Faculty has experience in the coordination of science promotion projects and has been a significant contributor, participant, and coordinator of the European Researchers Night in the previous years."}),Object(C.jsx)("div",{className:"text-center",children:Object(C.jsx)("a",{href:"https://www.ni.ac.rs/en/faculties/faculty-of-sciences-and-mathematics",target:"_blank",rel:"noreferrer",className:"btn btn-outline-info",children:"VISIT SITE"})})]})}),Object(C.jsx)(T.a,{className:"mt-5 partnersrow mb-5",children:Object(C.jsxs)(L.a,{md:12,children:[Object(C.jsx)("h4",{children:"Department of Chemistry, Faculty of Science, University of Kragujevac"}),Object(C.jsx)("p",{className:"text-justify mt-3 mb-3",children:"The Department of Chemistry is one of the organizational units of the Faculty of Science, University of Kragujevac. At the Department are organized bachelor, master and doctoral academic studies of chemistry. The Institute has well-equipped scientific research laboratories for inorganic, organic, analytical, physical chemistry, biochemistry and chemistry teaching methodology. About 24 teachers, 4 assistants and 25 researchers, research associates and scholarship holders are engaged in several scientific research and other national and international projects. They publish the results of their research in well-known international scientific journals and cooperate with a large number of institutions in the country and abroad."}),Object(C.jsx)("div",{className:"text-center",children:Object(C.jsx)("a",{href:"http://chem.pmf.kg.ac.rs",target:"_blank",rel:"noreferrer",className:"btn btn-outline-info",children:"VISIT SITE"})})]})})]})},X=function(){return Object(C.jsx)(U.a,{children:Object(C.jsx)(T.a,{className:"mt-5",children:Object(C.jsx)(L.a,{children:Object(C.jsx)("p",{children:"project"})})})})},Y=r(85),Z=function(){return Object(C.jsx)("header",{children:Object(C.jsx)(U.a,{children:Object(C.jsx)(T.a,{children:Object(C.jsx)(L.a,{xs:6,md:4,children:Object(C.jsx)(Y.a,{src:"".concat("/project-vinca","/assets/images/logo/logo.png"),rounded:!0,className:"logoPhoton"})})})})})};var $=function(){return Object(C.jsx)("footer",{children:Object(C.jsx)(U.a,{children:Object(C.jsx)(T.a,{children:Object(C.jsx)(L.a,{xs:12,children:Object(C.jsx)("p",{children:"footer"})})})})})},ee=function(){return function(){var e=Object(A.a)(F.a.mark((function e(t){var r,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h}),e.prev=1,e.next=4,fetch("".concat("/project-vinca","/db/teamMembers.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,t({type:d,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:b,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},te=r(90),re=function(e){var t=e.data,r=e.teamName,n=Object(_.n)().url;if(0===t.length)return Object(C.jsx)("p",{children:"list members cannot be loaded"});var c=t.members.filter((function(e){return e.institution.includes(r)}));return Object(C.jsx)("div",{className:"members-institution-list",children:Object(C.jsx)(te.a,{variant:"flush",children:c.map((function(e){return Object(C.jsx)(te.a.Item,{className:"members-institution-list-item",children:Object(C.jsxs)(y.Link,{to:"".concat(n,"/").concat(e.id),style:{textDecoration:"none",color:"#000"},children:[e.academic_title," ",e.name," (",e.job_title,")"]})},e.id)}))})})},ne=function(){var e=Object(a.b)(),t=Object(a.c)(G),r=t.members,c=t.loading,i=t.error;return Object(n.useEffect)((function(){e(ee())}),[e]),i?Object(C.jsx)(K,{children:Object(C.jsx)("h2",{children:"Something went wrong!"})}):c?Object(C.jsx)(q,{}):Object(C.jsx)(U.a,{children:Object(C.jsxs)(T.a,{children:[Object(C.jsxs)(L.a,{xs:12,className:"membersinstitution",children:[Object(C.jsx)("h3",{children:"Vin\u010da Institute of Nuclear Sciences"}),Object(C.jsx)(re,{data:r,teamName:"Vinca_Institute_of_Nuclear_Sciences"})]}),Object(C.jsxs)(L.a,{xs:12,className:"membersinstitution",children:[Object(C.jsx)("h3",{children:"School of Electrical Engineering, University of Belgrade"}),Object(C.jsx)(re,{data:r,teamName:"School_of_Electrical_Engineering_University_of_Belgrade"})]}),Object(C.jsxs)(L.a,{xs:12,className:"membersinstitution",children:[Object(C.jsx)("h3",{children:"Faculty of Sciences and Mathematics, University of Ni\u0161"}),Object(C.jsx)(re,{data:r,teamName:"Faculty_of_Sciences_and_Mathematics_University_of_Nis"})]}),Object(C.jsxs)(L.a,{xs:12,className:"membersinstitution",children:[Object(C.jsx)("h3",{children:"Faculty of Science, Department for Chemistry, University of Kragujevac"}),Object(C.jsx)(re,{data:r,teamName:"Faculty_of_Science_Department_for_Chemistry_University_of_Kragujevac"})]})]})})},ce=r(58),ie=function(e){var t=e.data,r=e.handleGoBack;return Object(C.jsxs)("div",{className:"teamMemberContainer",children:[Object(C.jsx)(T.a,{className:"mb-4",children:Object(C.jsx)(L.a,{xs:12,children:Object(C.jsx)("h2",{children:t.name})})}),Object(C.jsxs)(T.a,{children:[Object(C.jsx)(L.a,{xs:12,sm:6,children:Object(C.jsx)("div",{className:"personImg_container",children:Object(C.jsx)(Y.a,{className:"personImg",src:"".concat("/project-vinca","/assets/images/personal_image/").concat(t.photo)})})}),Object(C.jsxs)(L.a,{xs:12,sm:6,children:[Object(C.jsx)("h4",{children:t.job_title}),t.tel&&Object(C.jsxs)("p",{children:["Tel: ",t.tel]}),t.fax&&Object(C.jsxs)("p",{children:["Fax: ",t.fax]}),t.email&&Object(C.jsxs)("p",{children:["Email: ",t.email]}),t.personal_url&&Object(C.jsx)("a",{href:"".concat(t.personal_url),target:"_blank",rel:"noreferrer",className:"btn btn-info btn-lg active buttonPDFTeamMember",role:"button","aria-pressed":"true",children:"personal link"})]})]}),Object(C.jsx)(T.a,{className:"mt-5 mb-5",children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)("h4",{children:"Research Interest"}),Object(C.jsx)(te.a,{variant:"flush",children:t.research_interest.map((function(e){return Object(C.jsx)(te.a.Item,{className:"list-group-item list-group-item-action list-group-item-light",children:e},e)}))})]})}),Object(C.jsx)(T.a,{className:"mt-5 mb-5",children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)("h4",{children:"Professional Positions"}),Object(C.jsx)(te.a,{variant:"flush",children:t.professional_positions.map((function(e){return Object(C.jsx)(te.a.Item,{className:"list-group-item list-group-item-action list-group-item-light",children:e},e)}))})]})}),Object(C.jsx)(T.a,{className:"mt-5 mb-5",children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)("h4",{children:"Education"}),Object(C.jsx)(te.a,{variant:"flush",children:t.education.map((function(e){return Object(C.jsx)(te.a.Item,{className:"list-group-item list-group-item-action list-group-item-light",children:e},e)}))})]})}),Object(C.jsx)(T.a,{children:Object(C.jsxs)(L.a,{xs:6,children:[t.cv&&Object(C.jsx)("a",{href:"".concat("/project-vinca","/assets/pdf/cv/").concat(t.cv),className:"btn btn-info btn-lg buttonPDFTeamMember",role:"button","aria-pressed":"true",target:"_blank",rel:"noreferrer",children:"resume"}),t.publications&&Object(C.jsx)("a",{href:t.publications,className:"btn btn-info btn-lg buttonPDFTeamMember",role:"button","aria-pressed":"true",target:"_blank",rel:"noreferrer",children:"publications"}),Object(C.jsx)(ce.a,{variant:"info",onClick:r,size:"lg",className:"buttonPDFTeamMember",children:"go back"})]})})]})},ae=function(e){var t=e.match.params.memberId,r=Object(_.k)(),c=Object(a.b)(),i=Object(a.c)((function(e){return e.members})),s=i.member,l=i.loading,o=i.error;Object(n.useEffect)((function(){var e;c((e=t,function(){var t=Object(A.a)(F.a.mark((function t(r){var n,c,i;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:h}),t.prev=1,t.next=4,fetch("".concat("/project-vinca","/db/teamMembers.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,i=c.members.find((function(t){return t.id===Number(e)})),r({type:x,payload:i}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),r({type:b,error:t.t0});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()))}),[c]);return o?Object(C.jsx)(K,{children:"Something went wrong!"}):l?Object(C.jsx)(q,{}):Object(C.jsx)(U.a,{children:s?Object(C.jsx)(ie,{data:s,handleGoBack:function(){return r.goBack()}}):Object(C.jsx)(T.a,{children:Object(C.jsx)(L.a,{children:Object(C.jsx)("h1",{className:"memberNotExist",children:"Member does not exist"})})})})},se=function(){return Object(C.jsx)(U.a,{children:Object(C.jsx)(T.a,{className:"mt-5",children:Object(C.jsx)(L.a,{children:Object(C.jsx)("p",{children:"news"})})})})},le=function(){return Object(C.jsx)(U.a,{fluid:!0,children:Object(C.jsx)(T.a,{children:Object(C.jsx)(L.a,{className:"pagenotfound",children:Object(C.jsx)("h3",{children:"Page Not Found!"})})})})},oe=function(e){var t=e.data,r=e.teamName;Object(_.n)().url;if(0===t.length)return Object(C.jsx)("p",{children:"list members cannot be loaded"});var n=t.members.filter((function(e){return e.groups.includes(r)&&!e.group_leader.includes(r)})),c=t.members.filter((function(e){return e.group_leader.includes(r)})),i=n.sort((function(e,t){return e.level>t.level?-1:e.level<t.level?1:0}));return Object(C.jsx)("div",{className:"mt-3 mb-3 group-list",children:Object(C.jsxs)(te.a,{children:[Object(C.jsx)(te.a.Item,{className:"group-list-item",children:Object(C.jsxs)(y.Link,{to:"/members/".concat(c[0].id),style:{textDecoration:"none",color:"#000"},children:[c[0].academic_title," ",c[0].name," (Group leader)"]})},c[0].id),i.map((function(e,t){return Object(C.jsx)(te.a.Item,{className:"group-list-item",children:Object(C.jsxs)(y.Link,{to:"/members/".concat(e.id),style:{textDecoration:"none",color:"#000"},children:[e.academic_title," ",e.name]})},e.id)}))]})})},je=function(){var e=Object(a.b)(),t=Object(a.c)(G),r=t.members,c=t.loading,i=t.error;return Object(n.useEffect)((function(){e(ee())}),[e]),i?Object(C.jsx)(K,{children:Object(C.jsx)("h2",{children:"Something went wrong!"})}):c?Object(C.jsx)(q,{}):Object(C.jsx)(U.a,{children:Object(C.jsxs)(T.a,{children:[Object(C.jsx)(L.a,{sm:6,xs:12,className:"mt-5",children:Object(C.jsx)(T.a,{children:Object(C.jsxs)(L.a,{xs:12,className:"",children:[Object(C.jsx)("h3",{children:"Group for opto-biomedical engineering"}),Object(C.jsx)("p",{children:"description"}),Object(C.jsx)(oe,{data:r,teamName:"Group_for_opto_biomedical_engineering"})]})})}),Object(C.jsx)(L.a,{sm:6,xs:12,className:"mt-5",children:Object(C.jsx)(T.a,{children:Object(C.jsxs)(L.a,{xs:12,className:"",children:[Object(C.jsx)("h3",{children:"Group for investigation of complex systems in biology and physics"}),Object(C.jsx)("p",{children:"description"}),Object(C.jsx)(oe,{data:r,teamName:"Group_for_investigation_of_complex_systems_in_biology_and_physics"})]})})}),Object(C.jsx)(L.a,{sm:6,xs:12,className:"mt-5",children:Object(C.jsx)(T.a,{children:Object(C.jsxs)(L.a,{xs:12,className:"",children:[Object(C.jsx)("h3",{children:"Group for photodynamic therapy development "}),Object(C.jsx)("p",{children:"description"}),Object(C.jsx)(oe,{data:r,teamName:"Group_for_photodynamic_therapy_development"})]})})})]})})},he=function(){return Object(C.jsxs)(U.a,{children:[Object(C.jsx)(T.a,{className:"mt-5",children:Object(C.jsx)(L.a,{xs:12,children:Object(C.jsx)("p",{className:"text-justify",children:"The success of the Center's associates is reflected in their ability to establish and nurture long-term collaborations that have resulted in: joint patents and works in peer-reviewed international journals, joint projects, professional training of young researchers in partner institutions, joint organization of international gatherings and other related activities that all contribute long-term sustainability of the Center of Excellence."})})}),Object(C.jsxs)(T.a,{className:"",children:[Object(C.jsxs)(L.a,{xs:12,className:"mb-3",children:[" ",Object(C.jsx)("h5",{children:"List of collaborators:"})]}),Object(C.jsx)(L.a,{xs:12,sm:3}),Object(C.jsxs)(L.a,{xs:12,sm:6,className:"mt-3 mb-3",children:[Object(C.jsx)("h5",{children:"Opto-biomedical engineering"}),Object(C.jsx)("div",{className:"collaboratorsInstitution",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.aston.ac.uk/",target:"_blank",rel:"noreferrer",children:"Aston University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://lens.unifi.it/",target:"_blank",rel:"noreferrer",children:"LENS"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.brescia.edu/",target:"_blank",rel:"noreferrer",children:"Brescia University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.dtu.dk/english",target:"_blank",rel:"noreferrer",children:"Technical University of Denmark - DTU"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://med.bg.ac.rs/",target:"_blank",rel:"noreferrer",children:"Univerzitet u Beogradu, Medicinski fakultet"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://www.itn.sanu.ac.rs/",target:"_blank",rel:"noreferrer",children:"SANU"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.ikvbd.com/",target:"_blank",rel:"noreferrer",children:"KBC"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.fau.eu/",target:"_blank",rel:"noreferrer",children:"Friedrich-Alexander-Universit\xe4t Erlangen-N\xfcrnberg"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.bidmc.org/",target:"_blank",rel:"noreferrer",children:"Beth Israel Deaconess Medical Center | Harvard Medical School"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://www.kcs.ac.rs/",target:"_blank",rel:"noreferrer",children:"University Clinical Center of Serbia, Belgrade"})})]})})]}),Object(C.jsx)(L.a,{xs:12,sm:3}),Object(C.jsx)(L.a,{xs:12,sm:3}),Object(C.jsxs)(L.a,{xs:12,sm:6,className:"mt-3 mb-3",children:[Object(C.jsx)("h5",{children:"Investigation of complex systems in biology and physics"}),Object(C.jsx)("div",{className:"collaboratorsInstitution",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.ibs.re.kr/eng.do",target:"_blank",rel:"noreferrer",children:"Institute for Basic Science"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://www.leeds.ac.uk/",target:"_blank",rel:"noreferrer",children:"University of Leeds"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://english.tau.ac.il/",target:"_blank",rel:"noreferrer",children:"Tel Aviv University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://en.uoc.gr/",target:"_blank",rel:"noreferrer",children:"University of Crete"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.uni-rostock.de/en/",target:"_blank",rel:"noreferrer",children:"University of Rostock"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.uchile.cl/english",target:"_blank",rel:"noreferrer",children:"Universidad de Chile"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://liu.se/en",target:"_blank",rel:"noreferrer",children:"Link\xf6ping University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://lens.unifi.it/",target:"_blank",rel:"noreferrer",children:"LENS"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.aston.ac.uk/",target:"_blank",rel:"noreferrer",children:"Aston University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.hsu-hh.de/en/",target:"_blank",rel:"noreferrer",children:"Helmut Schmidt University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://en.sdu.edu.cn/",target:"_blank",rel:"noreferrer",children:"Shandong University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.qatar.tamu.edu/",target:"_blank",rel:"noreferrer",children:"Texas A&M University at Qata"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://www.ipb.ac.rs/en/",target:"_blank",rel:"noreferrer",children:"Institute of Physics"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.umb.edu/",target:"_blank",rel:"noreferrer",children:"University of Massachusetts Boston"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://www.tf.ni.ac.rs/",target:"_blank",rel:"noreferrer",children:"Technical Faculty, Leskovac"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.ni.ac.rs/en/",target:"_blank",rel:"noreferrer",children:"Faculty of Electronics, Nis"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://english.nsu.ru/",target:"_blank",rel:"noreferrer",children:"Novosibirsk State University (NSU)"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.csem.ch/Home",target:"_blank",rel:"noreferrer",children:"CSEM SA"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://ipmras.ru/en/index",target:"_blank",rel:"noreferrer",children:"Institute for Physics of Microstructures RAS"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://en.iyte.edu.tr/",target:"_blank",rel:"noreferrer",children:"\u0130zmir Institute of Technology"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.quantumlah.org/",target:"_blank",rel:"noreferrer",children:"Centre for Quantum Technologies: CQT"})})]})})]}),Object(C.jsx)(L.a,{xs:12,sm:3}),Object(C.jsx)(L.a,{xs:12,sm:3}),Object(C.jsxs)(L.a,{xs:12,sm:6,className:"mt-3 mb-3",children:[Object(C.jsx)("h5",{children:"Photodynamic therapy development"}),Object(C.jsx)("div",{className:"collaboratorsInstitution",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.uni-leipzig.de/en/",target:"_blank",rel:"noreferrer",children:"Universit\xe4t Leipzig"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.uma.es/?set_language=en#gsc.tab=0",target:"_blank",rel:"noreferrer",children:"University of Malaga"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.fudan.edu.cn/en/",target:"_blank",rel:"noreferrer",children:"Fudan University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.uma.pt/en/",target:"_blank",rel:"noreferrer",children:"Universidade da Madeira"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.cells.es/en/about/welcome",target:"_blank",rel:"noreferrer",children:"ALBA Synchrotron"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.meduniwien.ac.at/web/",target:"_blank",rel:"noreferrer",children:"MedUni Wien"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.ffh.bg.ac.rs/en/",target:"_blank",rel:"noreferrer",children:"Faculty of Physical Chemistry, Belgrade"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.kc-kg.rs/",target:"_blank",rel:"noreferrer",children:"Clinical Center Kragujevac"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://www.izjzkg.rs/",target:"_blank",rel:"noreferrer",children:"Institute of Public Health Kragujevac"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.fau.eu/",target:"_blank",rel:"noreferrer",children:"Friedrich-Alexander-Universit\xe4t Erlangen-N\xfcrnberg"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://uninp.edu.rs/",target:"_blank",rel:"noreferrer",children:"University of Novi Pazar, Novi Pazar"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.tu-braunschweig.de/",target:"_blank",rel:"noreferrer",children:"Technische Universit\xe4t Braunschweig"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"http://www.itn.sanu.ac.rs/",target:"_blank",rel:"noreferrer",children:"SANU"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://en.uj.edu.pl/en_GB/start",target:"_blank",rel:"noreferrer",children:"Jagiellonian University"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://ihtm.bg.ac.rs/rs/",target:"_blank",rel:"noreferrer",children:"Institute of Chemistry, Technology and Metallurgy Belgrade"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.chem.bg.ac.rs/index-en.html",target:"_blank",rel:"noreferrer",children:"Faculty of Chemistry, Belgrade"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.irb.hr/",target:"_blank",rel:"noreferrer",children:"Institut Ru\u0111er Bo\u0161kovi\u0107"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.avcr.cz/en/",target:"_blank",rel:"noreferrer",children:"Czech Academy of Sciences, Prague, Czech Republic"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.unifi.it/changelang-eng.html",target:"_blank",rel:"noreferrer",children:"University of Florence, Florence, Italy"})})]})})]}),Object(C.jsx)(L.a,{xs:12,sm:3})]})]})},de=function(){return Object(C.jsx)(y.BrowserRouter,{basename:"/coherence",children:Object(C.jsxs)("div",{children:[Object(C.jsx)(Z,{}),Object(C.jsx)(I,{}),Object(C.jsx)("div",{className:"page-container",children:Object(C.jsxs)(_.g,{children:[Object(C.jsx)(_.d,{path:"/",exact:!0,children:Object(C.jsx)(R,{})}),Object(C.jsx)(_.d,{path:"/about/center",exact:!0,children:Object(C.jsx)(W,{})}),Object(C.jsx)(_.d,{path:"/about/institutions",exact:!0,children:Object(C.jsx)(J,{})}),Object(C.jsx)(_.d,{path:"/about/collaborators",exact:!0,children:Object(C.jsx)(he,{})}),Object(C.jsx)(_.d,{path:"/about/gallery",exact:!0,children:Object(C.jsx)(Q,{})}),Object(C.jsx)(_.d,{exact:!0,path:"/members",children:Object(C.jsx)(ne,{})}),Object(C.jsx)(_.d,{exact:!0,path:"/members/:memberId",component:ae}),Object(C.jsx)(_.d,{exact:!0,path:"/groups",children:Object(C.jsx)(je,{})}),Object(C.jsx)(_.d,{path:"/projects",exact:!0,children:Object(C.jsx)(X,{})}),Object(C.jsx)(_.d,{path:"/news",exact:!0,children:Object(C.jsx)(se,{})}),Object(C.jsx)(_.d,{path:"/contact",exact:!0,children:Object(C.jsx)(P,{})}),Object(C.jsx)(_.d,{children:Object(C.jsx)(le,{})})]})}),Object(C.jsx)($,{})]})})};var be,xe=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(de,{})})},me=(r(76),Object(s.createStore)(w,be,Object(o.composeWithDevTools)(Object(s.applyMiddleware)(l.a))));i.a.render(Object(C.jsx)(a.a,{store:me,children:Object(C.jsx)(xe,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.656f387c.chunk.js.map