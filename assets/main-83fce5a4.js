import{j as e,F as j,u as t,H as f,V as G,a as T,b as E,c as F,d as z,T as C,I as w,e as u,f as B,g as v,r as M,h as R,i as A,k as O,l as _,m as J,B as W,n as H,L,o as V,p as b,O as Z,q as X,R as K,D as Q,s as U,t as q,v as Y,w as $,x as ee,A as ae,y as te,S as se,M as re,z as y,C as ne,U as ie,E as oe,G as d,J as h,K as s,N as le,P as x,Q as ce,W as p,X as de,Y as he,Z as ge,_ as ue}from"./vendor-93da9974.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const me=()=>e.jsxs(j,{pos:"fixed",bottom:"0",zIndex:"2",w:"full",as:"footer",h:"25px",bg:t("gray.200","gray.900"),align:"center",spacing:1,px:2,justifyContent:"space-between",children:[e.jsxs(f,{h:"full",children:[e.jsx(k,{icon:G,label:"main*",labelTooltip:"nabilaba.github.io (Git)",url:"https://github.com/nabilaba/nabilaba.github.io"}),e.jsx(k,{icon:T,labelTooltip:"Fork This",url:"https://github.com/nabilaba/nabilaba.github.io/fork"}),e.jsx(k,{icon:E,label:"0",icon2:F,label2:"0",labelTooltip:"No Problems"}),e.jsx(k,{label:"Git Graph",labelTooltip:"View Git Graph",url:"https://github.com/nabilaba/nabilaba.github.io/commits/main"})]}),e.jsxs(f,{h:"full",children:[e.jsx(k,{label:"Javascript",label2:"React",labelTooltip:"Language Mode"}),e.jsx(k,{icon:z})]})]}),k=({icon:a,icon2:r,label:n,label2:l,labelTooltip:i,url:c})=>e.jsx(C,{label:i,children:e.jsxs(f,{onClick:()=>{c&&window.open(c,"_blank")},color:t("gray.800","gray.400"),spacing:1,align:"center",role:"group",h:"full",fontSize:".75rem",cursor:c?"pointer":"default",w:"max-content",_hover:{bg:t("gray.100","gray.800")},p:1,children:[a&&e.jsx(w,{boxSize:"4",as:a}),n&&e.jsx(u,{children:n}),r&&e.jsx(w,{boxSize:"4",as:r}),l&&e.jsx(u,{children:l})]})}),xe=()=>{const a=B(),r=v(),[n,l]=M.useState(!1),i=({icon:c,label:g,color:N,extension:I})=>e.jsxs(f,{color:a.pathname===`/${g}`?t("gray.700","white"):t("gray.500","gray.400"),bg:a.pathname===`/${g}`?t("gray.100","gray.800"):"none",spacing:3,align:"center",role:"group",h:"full",fontSize:".75rem",cursor:"pointer",w:"max-content",_hover:{color:t("gray.700","white")},px:"4",children:[e.jsxs(f,{as:L,to:`/${g}`,spacing:1,align:"center",h:"full",py:"2",children:[c&&e.jsx(w,{boxSize:"5",as:c,color:N}),g&&e.jsxs(u,{fontStyle:"italic",display:a.pathname===`/${g}`?"block":{base:"none",lg:"block"},children:[g,I]})]}),a.pathname===`/${g}`&&e.jsx(w,{boxSize:"3",as:V,color:t("gray.400","gray.500"),_hover:{color:t("gray.500","gray.400")},onClick:()=>r("/")})]});return e.jsxs(j,{as:"header",align:"center",w:"full",borderBottomWidth:"1px",borderColor:t("inherit","inherit"),bg:t("white","gray.900"),position:"sticky",top:"0",justifyContent:"space-between",children:[e.jsxs(f,{spacing:0,h:"full",children:[e.jsx(i,{icon:R,extension:".js",label:"skills",color:"yellow.500"}),e.jsx(i,{icon:A,extension:".jsx",label:"projects",color:"blue.500"}),e.jsx(i,{icon:O,extension:".sass",label:"educations",color:"pink.500"}),e.jsx(i,{icon:_,extension:".json",label:"certificates",color:"green.500"}),e.jsx(i,{icon:J,extension:".html",label:"experiences",color:"red.500"})]}),e.jsx(f,{spacing:0,h:"full",mr:4,children:e.jsx(w,{boxSize:"3",as:n?W:H,color:t("gray.400","gray.500"),_hover:{color:t("gray.500","gray.400")},cursor:"pointer",onClick:()=>{document.fullscreenElement?(document.exitFullscreen(),l(!1)):(document.documentElement.requestFullscreen(),l(!0))}})})]})},pe=()=>e.jsxs(j,{ml:12,direction:"column",h:"100vh",children:[e.jsx(xe,{}),e.jsx(b,{as:"main",bgColor:t("gray.100","gray.800"),flex:1,p:10,pb:"20",children:e.jsx(Z,{})})]}),je=a=>{const r=v(),n=l=>{const i=t("gray.600","gray.300"),{icon:c,url:g}=l;return e.jsx(j,{as:y,href:g,target:"_blank",align:"center",px:"2",py:"4",cursor:"pointer",fontWeight:"semibold",color:t("gray.500","gray.400"),position:"relative",_after:{content:'""',display:"block",height:"100%",width:"4px",backgroundColor:"red",transform:"scaleX(0)",transformOrigin:"left",transition:"transform 0.3s ease",position:"absolute",left:0},_hover:{color:i,_after:{transform:"scaleX(1)"}},children:c&&e.jsx(w,{mx:"auto",boxSize:"6",as:c})})};return e.jsx(b,{as:"nav",pos:"fixed",top:"0",left:"0",bottom:"0",zIndex:"1",overflowX:"hidden",overflowY:"auto",bg:t("gray.50","gray.700"),children:e.jsxs(X,{h:"full",w:"full",alignItems:"flex-start",justify:"space-between",children:[e.jsxs(b,{w:"full",children:[e.jsx(j,{px:"2",py:"5",align:"center",children:e.jsx(w,{as:K,h:8,w:8,cursor:"pointer",color:t("gray.500","gray.400"),_hover:{color:t("gray.700","gray.200")},onClick:()=>{r("/")}})}),e.jsx(j,{px:"2",align:"center",children:e.jsx(Q,{})}),e.jsxs(j,{direction:"column",as:"nav",fontSize:"md",color:"gray.600","aria-label":"Main Navigation",children:[e.jsx(n,{icon:U,url:"https://t.me/nabilaba"}),e.jsx(n,{icon:q,url:"https://github.com/nabilaba"}),e.jsx(n,{icon:Y,url:"https://www.linkedin.com/in/nabilaba/"}),e.jsx(n,{icon:$,url:"https://wa.me/6283146542084"}),e.jsx(n,{icon:ee,url:"https://instagram.com/nabil_aba"})]})]}),e.jsxs(j,{direction:"column",p:"2",mt:10,justify:"center",alignItems:"center",children:[e.jsx(C,{label:"Resume",placement:"right",children:e.jsx(ae,{size:"sm",name:"Nabil",src:"https://avatars.githubusercontent.com/u/45154878?v=4",cursor:"pointer",onClick:()=>{window.open("/resume.pdf","_blank")}})}),e.jsx(te,{mt:"4",mb:"25",size:"sm",onClick:a.toggleColorMode,variant:"unstyled",icon:a.colorMode==="light"?e.jsx(se,{animation:"rotate 10s linear infinite"}):e.jsx(re,{animation:"scale 1s linear infinite"}),color:t("gray.500","gray.400"),_hover:{color:t("gray.700","gray.200")}})]})]})})},be=()=>{const{colorMode:a,toggleColorMode:r}=ne();return e.jsxs(b,{as:"section",bg:t("gray.50","gray.700"),minH:"100vh",h:"full",w:"full",children:[e.jsx(je,{colorMode:a,toggleColorMode:r}),e.jsx(pe,{}),e.jsx(me,{})]})},o=({children:a})=>e.jsx(ie,{spacing:0,listStylePos:"outside",listStyleType:"circle",ml:9,children:a}),S=({title:a,subtitle:r})=>e.jsxs(oe,{children:[e.jsx("title",{children:a}),e.jsx("meta",{name:"title",property:"og:title",content:a})]}),fe=[{name:"Belajar Dasar Pemrograman Website",url:"https://www.dicoding.com/certificates/GRX5KM5O3Z0M"},{name:"Belajar Dasar Dengan Github",url:"https://www.dicoding.com/certificates/N9ZOEQ6M0XG5"},{name:"Belajar Dasar Google Cloud",url:"https://www.dicoding.com/certificates/0LZ03M960Z65"},{name:"Belajar Dasar Pemrograman Javascript",url:"https://www.dicoding.com/certificates/QLZ91GQW9P5D"},{name:"Belajar Dasar Visualisasi Data",url:"https://www.dicoding.com/certificates/N9ZOEQ636XG5"},{name:"Belajar Membuat Aplikasi Android untuk Pemula",url:"https://www.dicoding.com/certificates/4EXG68EK1ZRL"},{name:"Belajar Prinsip Pemrograman SOLID",url:"https://www.dicoding.com/certificates/QLZ91G8RDP5D"},{name:"Cloud Practioner Essentials (Belajar Dasar AWS Cloud)",url:"https://www.dicoding.com/certificates/0LZ03NMMNZ65"},{name:"Memulai Pemrograman Dengan C",url:"https://www.dicoding.com/certificates/98XWKY6V9XM3"},{name:"Memulai Pemrograman Dengan Dart",url:"https://www.dicoding.com/certificates/QLZ91G2L9P5D"},{name:"Memulai Pemrograman Dengan Python",url:"https://www.dicoding.com/certificates/JLX13J97NP72"},{name:"Meniti Karir Sebagai Software Developer",url:"https://www.dicoding.com/certificates/L4PQ37GM2PO1"},{name:"Pengenalan Data pada Pemrograman (Data 101)",url:"https://www.dicoding.com/certificates/JMZV289DOZN9"},{name:"Pengenalan ke Logika Pemrograman (Programming Logic 101)",url:"https://www.dicoding.com/certificates/07Z65MV5WXQR"}],ye=[{name:"Fundamentals of digital marketing",url:"https://drive.google.com/file/d/1UKDdZUdJre4TGZP4PyCIljS1X4MpHg5O/view?usp=sharing"}],we=[{name:"PusatNgoding",url:"https://pusatngoding.netlify.app/",status:"Done"},{name:"Catatan",url:"https://aplikasicatatan.netlify.app/",status:"Done"},{name:"Parentheses Validation",url:"https://parentheses-validation.netlify.app/",status:"Done"},{name:"Quiz With Trivia",url:"https://qwt.netlify.app/",status:"Done"},{name:"FE - Lagu",url:"https://fe-lagu.vercel.app/",status:"Done"},{name:"Landing Page - the hike",url:"https://landingpage-thehike.vercel.app/",status:"Done"},{name:"NoSleepHeroku",url:"https://nosleepheroku.vercel.app/",status:"Done"}],ke=[{name:"Landing Page - ENDFT",url:"https://endft.vercel.app/",status:"Done"},{name:"Landing Page - Binar Car Rental",url:"https://bcr.vercel.app/",status:"Done"},{name:"Snake Game Advanced",url:"https://snake-game-advanced.netlify.app/",status:"Done"},{name:"Belajar DOM",url:"https://belajar-dom.netlify.app/",status:"Done"},{name:"Belajar HTML Dasar",url:"https://nabilaba.github.io/belajar-html-dasar/",status:"Done"},{name:"Belajar CSS tema Tentang Saya",url:"https://nabilaba.github.io/belajar-css-tema-tentang-saya/",status:"Done"},{name:"Belajar Bootstrap tema Lil Peep Music",url:"https://nabilaba.github.io/belajar-bootstrap-tema-lilpeep-musics",status:"Done"},{name:"Belajar SASS tema Toko Pakaian",url:"https://nabilaba.github.io/belajar-sass-tema-toko-pakaian/",status:"Done"},{name:"Tugas 2 - Fake Certificate",url:"https://nabilaba.github.io/tugas2-fake-certificate/",status:"Done"}],Se=[{name:"N-Grader",url:"https://github.com/nabilaba/N-Grader",status:"Done"},{name:"Mobile App Development Test",url:"https://github.com/nabilaba/Mobile-App-Development-Test",status:"Done"}],ve=[{name:"HelloSchool",url:"http://l200190083pwd.000webhostapp.com/",status:"Done"},{name:"Tugas Praktikum Pemrograman Web",url:"http://l200190083.000webhostapp.com",status:"Done"}],m={getSertificates:a=>{if(a==="Dicoding")return fe;if(a==="GoogleDigitalGarage")return ye},getProjects:a=>a==="reactjs"?we:a==="nolibary"?ke:a==="usingphp"?ve:Se,getStatusColor:a=>{if(a==="Done")return"green.500";if(a==="In Progress")return"yellow.500";if(a==="still bad")return"red.500"}},De=()=>e.jsxs(d,{spacing:5,h:"full",children:[e.jsx(S,{title:"certificates - Nabil Aba"}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Dicoding"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsx(o,{children:m.getSertificates("Dicoding").map((a,r)=>e.jsx(s,{children:e.jsx(y,{target:"_blank",href:a.url,children:a.name})},r))})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Google Digital Garage"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsx(o,{children:m.getSertificates("GoogleDigitalGarage").map((a,r)=>e.jsx(s,{children:e.jsx(y,{target:"_blank",href:a.url,children:a.name})},r))})})]}),Pe=()=>e.jsxs(d,{spacing:5,h:"full",children:[e.jsx(S,{title:"educations - Nabil Aba"}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"My educational background"}),e.jsx(b,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"Universitas Muhammadiyah Surakarta"}),e.jsxs(o,{children:[e.jsx(s,{children:"Information Technology"}),e.jsx(s,{children:"Nov 2019 - Mar 2023"}),e.jsx(s,{children:"IPK : 3.82"})]})]})}),e.jsx(b,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"SMA Negeri 2 Sukoharjo"}),e.jsxs(o,{children:[e.jsx(s,{children:"Language Class"}),e.jsx(s,{children:"2016 - 2019"})]})]})}),e.jsx(b,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"SMP Negeri 1 Grogol"}),e.jsx(o,{children:e.jsx(s,{children:"2013 - 2016"})})]})}),e.jsx(b,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"SD Negeri 2 Tegalmade"}),e.jsx(o,{children:e.jsx(s,{children:"2006 - 2013"})})]})})]}),Ce=()=>{v();const a=({to:r,children:n})=>e.jsxs(u,{as:L,to:r,color:t("gray.600","gray.400"),fontStyle:"italic",w:"fit-content",_after:{content:'""',display:"block",w:"100%",h:"2px",bg:"gray.600",transform:"scaleX(0)",transformOrigin:"right",transition:"transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)"},_hover:{_after:{transform:"scaleX(1)",transformOrigin:"left"}},children:[">>"," ",n]});return e.jsxs(d,{h:"full",children:[e.jsx(S,{title:"Nabil Aba",subtitle:"A personal website"}),e.jsxs(d,{maxW:"xl",children:[e.jsx(h,{fontWeight:"semibold",children:"Hi! I'm Nabil"}),e.jsxs(u,{textAlign:"justify",color:t("gray.600","gray.400"),children:["specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, JavaScript, ES6, CSS. Also often using"," ",e.jsxs(u,{as:"span",color:"blue.500",children:["MERN (MongoDB, ExpressJs, ReactJs, NodeJs) Development"," "]}),"."]})]}),e.jsxs(d,{children:[e.jsx(a,{to:"/skills",children:"skills"}),e.jsx(a,{to:"/projects",children:"projects"}),e.jsx(a,{to:"/educations",children:"educations"}),e.jsx(a,{to:"/certificates",children:"certificates"}),e.jsx(a,{to:"/experiences",children:"experiences"})]})]})},Me=()=>e.jsxs(d,{spacing:5,h:"full",children:[e.jsx(S,{title:"projects - Nabil Aba"}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Using ReactJS"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsx(o,{children:m.getProjects("reactjs").map((a,r)=>e.jsx(s,{children:e.jsxs(u,{color:m.getStatusColor(a.status),children:[e.jsx(y,{target:"_blank",href:a.url,color:t("gray.600","gray.400"),children:a.name})," ","- ",a.status]})},r))})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Without Librarys"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsx(o,{children:m.getProjects("nolibary").map((a,r)=>e.jsx(s,{children:e.jsxs(u,{color:m.getStatusColor(a.status),children:[e.jsx(y,{target:"_blank",href:a.url,color:t("gray.600","gray.400"),children:a.name})," ","- ",a.status]})},r))})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Using PHP"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsx(o,{children:m.getProjects("usingphp").map((a,r)=>e.jsx(s,{children:e.jsxs(u,{color:m.getStatusColor(a.status),children:[e.jsx(y,{target:"_blank",href:a.url,color:t("gray.600","gray.400"),children:a.name})," ","- ",a.status]})},r))})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Others"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsx(o,{children:m.getProjects().map((a,r)=>e.jsx(s,{children:e.jsxs(u,{color:m.getStatusColor(a.status),children:[e.jsx(y,{target:"_blank",href:a.url,color:t("gray.600","gray.400"),children:a.name})," ","- ",a.status]})},r))})})]}),Le=()=>e.jsxs(d,{spacing:5,h:"full",children:[e.jsx(S,{title:"skills - Nabil Aba"}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Technical Skills"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"Web Development with PHP"}),e.jsx(s,{children:"Frontend Engineering"}),e.jsx(s,{children:"Android OS Engineering"}),e.jsx(s,{children:"Decompile Recompile with Apktool"}),e.jsx(s,{children:"Writing Guide"})]})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"Programming Languages"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"In modern times:"}),e.jsxs(o,{children:[e.jsx(s,{children:"Javascript"}),e.jsxs(o,{children:[e.jsx(s,{children:"ES6"}),e.jsx(s,{children:"React.js"})]})]}),e.jsx(s,{children:"In ancient times:"}),e.jsxs(o,{children:[e.jsx(s,{children:"Java"}),e.jsx(s,{children:"PHP"})]})]})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"My Favorite Techs"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"Node.js"}),e.jsx(s,{children:"Github Actions"}),e.jsx(s,{children:"VSCode"})]})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"I've used some CSS librarys"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"Bootstrap"}),e.jsx(s,{children:"Chakra-ui"}),e.jsx(s,{children:"Tailwindcss"}),e.jsx(s,{children:"Sass"})]})}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"I've used some deployment tools"}),e.jsx(d,{color:t("gray.600","gray.400"),children:e.jsxs(o,{children:[e.jsx(s,{children:"Github Pages"}),e.jsx(s,{children:"Netlify"}),e.jsx(s,{children:"Vercel"}),e.jsx(s,{children:"Heroku"})]})})]}),D=[{title:"Frontend Engineering",company:"Ruangguru x Kampus Merdeka - Bootcamp",start:"2022-02",end:"2022-06",description:["Leading and collaborating with group members in making the final assignment, won an award as the top 5 finalists from 80 groups in the final assignment.","Create website with ReactJs Development, get some knowledge related to frontend engineering.","Create a snake game themed website, gain knowledge on how to make games using only HTML, CSS and Javascript.","Making third-party applications in bath Windows and Linux languages to make it more practical in checking development."]},{title:"Cyber Security Analyst",company:"Kementerian Kominfo - Intern",start:"2022-08",end:"2022-12",description:["Collaborate and produce articles with group members on a weekly basis about computer networks and cyber threats on the network; selected as the 50 best apprentices and left for Bali","Create a website to post the results of making articles so that other people can see the results of the group."]},{title:"Full-Stack Website Development",company:"SYNERGY Academy - Bootcamp",start:"2022-08",end:"2023-02",description:["Create a website with stack MERN (MongoDB, ExpressJs, ReactJs, NodeJs) Development; produce frontend and backend websites that can stand on just one hosting/deployment","Practice creating websites with the next js framework and the postgresql database for final project materials and self-study."]},{title:"Staff Accounting",company:"GiNaSTel - Work",start:"2023-06",end:"2023-07",description:["Record and calculate the daily revenue of the approximately 30 carts of Ginastel iced tea products scattered in the city, to produce real financial reports.","Counting and sorting the money from the sale of Soto every week, so as to produce the total sales revenue of Soto as a whole.","Put the tea variant into a 17/18 gram plastic bag up to 1 kilogram, helping the packaging team to complete orders quickly."]}],P=a=>{const r={year:"numeric",month:"short"};return new Date(a).toLocaleDateString("id-ID",r)},Ne=()=>e.jsxs(d,{spacing:5,h:"full",children:[e.jsx(S,{title:"experiences - Nabil Aba"}),e.jsx(h,{color:"blue.500",fontSize:"xl",children:"My experiences"}),e.jsx(d,{spacing:5,color:t("gray.600","gray.400"),children:D==null?void 0:D.sort((a,r)=>new Date(r.end)-new Date(a.end)).map((a,r)=>{var n;return e.jsx(o,{children:e.jsxs(s,{children:[e.jsx(u,{fontWeight:"bold",children:a.title}),e.jsx(u,{children:a.company}),e.jsxs(u,{children:[P(a.start)," -"," ",P(a.end)]}),e.jsx(o,{children:(n=a.description)==null?void 0:n.map((l,i)=>e.jsx(s,{whiteSpace:"pre-wrap",textAlign:"justify",children:l},i))})]})},r)})})]}),Ie=()=>{const a=v();M.useEffect(()=>{document.addEventListener("keydown",r=>{const{key:n,ctrlKey:l}=r;(l&&n==="1"||l&&n==="2"||l&&n==="3"||l&&n==="4"||l&&n==="5"||n==="Escape")&&r.preventDefault(),l&&n==="1"&&a("/skills"),l&&n==="2"&&a("/projects"),l&&n==="3"&&a("/educations"),l&&n==="4"&&a("/certificates"),l&&n==="5"&&a("/experiences"),n==="Escape"&&a("/")})},[])};function Ge(){return Ie(),e.jsxs(le,{children:[e.jsxs(x,{path:"/",element:e.jsx(be,{}),children:[e.jsx(x,{index:!0,element:e.jsx(Ce,{})}),e.jsx(x,{path:"skills",element:e.jsx(Le,{})}),e.jsx(x,{path:"projects",element:e.jsx(Me,{})}),e.jsx(x,{path:"educations",element:e.jsx(Pe,{})}),e.jsx(x,{path:"certificates",element:e.jsx(De,{})}),e.jsx(x,{path:"experiences",element:e.jsx(Ne,{})})]}),e.jsx(x,{path:"*",element:e.jsx(ce,{to:"/"})})]})}const Te={global:a=>({"html *":{transitionProperty:"background-color, border-color",transitionDuration:"200ms",transitionTimingFunction:"linear"},"::-webkit-scrollbar":{width:"14px",height:"14px"},"::-webkit-scrollbar-thumb":{background:p("gray.400","gray.700")(a),borderLeft:p("1px solid gray","1px solid gray")(a),borderRadius:"0px"},"::-webkit-scrollbar-thumb:hover":{background:p("gray.400","gray.700")(a)},"::-webkit-scrollbar-thumb:active":{background:p("gray.400","gray.700")(a)},"::-webkit-scrollbar-track":{background:p("#e6e6e6","gray.600")(a),borderLeft:p("1px solid gray","1px solid gray")(a),borderRadius:"0px"},"::-webkit-scrollbar-track:hover":{background:p("#e6e6e6","gray.600")(a)},"::-webkit-scrollbar-track:active":{background:p("#e6e6e6","gray.600")(a)},"::-webkit-scrollbar-corner":{background:"transparent"}})};const Ee=de({styles:Te,fonts:{body:"Poppins, sans-serif",heading:"Poppins, sans-serif",mono:"Poppins, monospace"},config:{useSystemColorMode:!1,initialColorMode:"dark",disableTransitionOnChange:!1}});he.createRoot(document.getElementById("root")).render(e.jsx(ge,{theme:Ee,children:e.jsx(ue,{children:e.jsx(Ge,{})})}));
