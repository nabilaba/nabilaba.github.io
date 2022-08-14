import{j as n,F as f,u as t,H as k,a as e,V as I,b as N,c as G,d as F,e as E,T as P,I as S,f as w,g as A,h as L,r as M,i as z,k as T,l as R,m as B,n as O,B as H,o as W,L as _,p as V,q as m,O as Z,s as J,R as U,D as X,t as K,G as Q,v as $,w as q,x as Y,A as ee,y as ae,M as re,S as ne,z as v,C as te,U as ie,E as oe,J as h,K as g,N as r,P as le,Q as ce,W as p,X as se,Y as b,Z as de,_ as he,$ as ge,a0 as ue}from"./vendor.f69da953.js";const me=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerpolicy&&(d.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?d.credentials="include":l.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=o(l);fetch(l.href,d)}};me();const pe=()=>n(f,{pos:"fixed",bottom:"0",zIndex:"2",w:"full",as:"footer",h:"25px",bg:t("gray.200","gray.900"),align:"center",spacing:1,px:2,justifyContent:"space-between",children:[n(k,{h:"full",children:[e(x,{icon:I,label:"main*",labelTooltip:"nabilaba.github.io (Git)",url:"https://github.com/nabilaba/nabilaba.github.io"}),e(x,{icon:N,labelTooltip:"Fork This",url:"https://github.com/nabilaba/nabilaba.github.io/fork"}),e(x,{icon:G,label:"0",icon2:F,label2:"0",labelTooltip:"No Problems"}),e(x,{label:"Git Graph",labelTooltip:"View Git Graph",url:"https://github.com/nabilaba/nabilaba.github.io/commits/main"})]}),n(k,{h:"full",children:[e(x,{label:"Javascript",label2:"React",labelTooltip:"Language Mode"}),e(x,{icon:E})]})]}),x=({icon:a,icon2:i,label:o,label2:s,labelTooltip:l,url:d})=>e(P,{label:l,children:n(k,{onClick:()=>{d&&window.open(d,"_blank")},color:t("gray.800","gray.400"),spacing:1,align:"center",role:"group",h:"full",fontSize:".75rem",cursor:d?"pointer":"default",w:"max-content",_hover:{bg:t("gray.100","gray.800")},p:1,children:[a&&e(S,{boxSize:"4",as:a}),o&&e(w,{children:o}),i&&e(S,{boxSize:"4",as:i}),s&&e(w,{children:s})]})}),be=()=>{const a=A(),i=L(),[o,s]=M.exports.useState(!1),l=({icon:d,label:u,color:C,extension:j})=>n(k,{color:a.pathname===`/${u}`?t("gray.700","white"):t("gray.500","gray.400"),bg:a.pathname===`/${u}`?t("gray.100","gray.800"):"none",spacing:3,align:"center",role:"group",h:"full",fontSize:".75rem",cursor:"pointer",w:"max-content",borderRightWidth:2,borderRightColor:t("gray.50","gray.800"),_hover:{color:t("gray.700","white")},px:"4",children:[n(k,{as:_,to:`/${u}`,spacing:1,align:"center",h:"full",py:"2",children:[d&&e(S,{boxSize:"5",as:d,color:C}),u&&n(w,{fontStyle:"italic",display:a.pathname===`/${u}`?"block":{base:"none",lg:"block"},children:[u,j]})]}),a.pathname===`/${u}`&&e(S,{boxSize:"3",as:V,color:t("gray.400","gray.500"),_hover:{color:t("gray.500","gray.400")},onClick:()=>i("/")})]});return n(f,{as:"header",align:"center",w:"full",borderColor:t("inherit","gray.700"),bg:t("white","gray.900"),position:"sticky",top:"0",justifyContent:"space-between",children:[n(k,{spacing:0,h:"full",children:[e(l,{icon:z,extension:".js",label:"skills",color:"yellow.500"}),e(l,{icon:T,extension:".jsx",label:"projects",color:"blue.500"}),e(l,{icon:R,extension:".sass",label:"educations",color:"pink.500"}),e(l,{icon:B,extension:".json",label:"certificates",color:"green.500"}),e(l,{icon:O,extension:".html",label:"experiences",color:"red.500"})]}),e(k,{spacing:0,h:"full",mr:4,children:e(S,{boxSize:"3",as:o?H:W,color:t("gray.400","gray.500"),_hover:{color:t("gray.500","gray.400")},cursor:"pointer",onClick:()=>{document.fullscreenElement?(document.exitFullscreen(),s(!1)):(document.documentElement.requestFullscreen(),s(!0))}})})]})},ye=()=>n(f,{ml:12,direction:"column",h:"100vh",children:[e(be,{}),e(m,{as:"main",bgColor:t("gray.100","gray.800"),flex:1,p:10,pb:"20",children:e(Z,{})})]}),fe=a=>{const i=L(),o=s=>{const l=t("gray.600","gray.300"),{icon:d,url:u}=s;return e(f,{as:v,href:u,target:"_blank",align:"center",px:"2",py:"4",cursor:"pointer",role:"group",fontWeight:"semibold",transition:".15s ease",color:t("gray.500","gray.400"),_hover:{color:t("gray.700","gray.200")},children:d&&e(S,{mx:"auto",boxSize:"6",_groupHover:{color:l},as:d})})};return e(m,{as:"nav",pos:"fixed",top:"0",left:"0",bottom:"0",pb:25,zIndex:"1",overflowX:"hidden",overflowY:"auto",bg:t("gray.50","gray.700"),children:n(J,{h:"full",w:"full",alignItems:"flex-start",justify:"space-between",children:[n(m,{w:"full",children:[e(f,{px:"2",py:"5",align:"center",children:e(S,{as:U,h:8,w:8,cursor:"pointer",color:t("gray.500","gray.400"),_hover:{color:t("gray.700","gray.200")},onClick:()=>{i("/")}})}),e(f,{px:"2",align:"center",children:e(X,{})}),n(f,{direction:"column",as:"nav",fontSize:"md",color:"gray.600","aria-label":"Main Navigation",children:[e(o,{icon:K,url:"https://t.me/nabilaba"}),e(o,{icon:Q,url:"https://github.com/nabilaba"}),e(o,{icon:$,url:"https://www.linkedin.com/in/nabilaba/"}),e(o,{icon:q,url:"https://wa.me/6283146542084"}),e(o,{icon:Y,url:"https://instagram.com/nabil_aba"})]})]}),n(f,{direction:"column",p:"2",mt:10,justify:"center",alignItems:"center",children:[e(P,{label:"Resume",placement:"right",children:e(ee,{size:"sm",name:"Nabil",src:"https://avatars.githubusercontent.com/u/45154878?v=4",cursor:"pointer",onClick:()=>{window.open("/resume.pdf","_blank")}})}),e(P,{label:"DarkMode",placement:"right",children:e(ae,{mt:"4",size:"sm",onClick:a.toggleColorMode,variant:"unstyled",icon:a.colorMode==="light"?e(re,{}):e(ne,{}),color:t("gray.500","gray.400"),_hover:{color:t("gray.700","gray.200")}})})]})]})})},we=()=>{const{colorMode:a,toggleColorMode:i}=te();return n(m,{as:"section",bg:t("gray.50","gray.700"),minH:"100vh",children:[e(fe,{colorMode:a,toggleColorMode:i}),e(ye,{}),e(pe,{})]})},c=({children:a})=>e(ie,{spacing:0,listStylePos:"outside",listStyleType:"square",ml:9,children:a}),D=({title:a,subtitle:i})=>n(oe,{children:[e("title",{children:a}),e("meta",{name:"title",property:"og:title",content:a})]}),ke=[{name:"Belajar Dasar Pemrograman Website",url:"https://www.dicoding.com/certificates/GRX5KM5O3Z0M"},{name:"Belajar Dasar Dengan Github",url:"https://www.dicoding.com/certificates/N9ZOEQ6M0XG5"},{name:"Belajar Dasar Google Cloud",url:"https://www.dicoding.com/certificates/0LZ03M960Z65"},{name:"Belajar Dasar Pemrograman Javascript",url:"https://www.dicoding.com/certificates/QLZ91GQW9P5D"},{name:"Belajar Dasar Visualisasi Data",url:"https://www.dicoding.com/certificates/N9ZOEQ636XG5"},{name:"Belajar Membuat Aplikasi Android untuk Pemula",url:"https://www.dicoding.com/certificates/4EXG68EK1ZRL"},{name:"Belajar Prinsip Pemrograman SOLID",url:"https://www.dicoding.com/certificates/QLZ91G8RDP5D"},{name:"Cloud Practioner Essentials (Belajar Dasar AWS Cloud)",url:"https://www.dicoding.com/certificates/0LZ03NMMNZ65"},{name:"Memulai Pemrograman Dengan C",url:"https://www.dicoding.com/certificates/98XWKY6V9XM3"},{name:"Memulai Pemrograman Dengan Dart",url:"https://www.dicoding.com/certificates/QLZ91G2L9P5D"},{name:"Memulai Pemrograman Dengan Python",url:"https://www.dicoding.com/certificates/JLX13J97NP72"},{name:"Meniti Karir Sebagai Software Developer",url:"https://www.dicoding.com/certificates/L4PQ37GM2PO1"},{name:"Pengenalan Data pada Pemrograman (Data 101)",url:"https://www.dicoding.com/certificates/JMZV289DOZN9"},{name:"Pengenalan ke Logika Pemrograman (Programming Logic 101)",url:"https://www.dicoding.com/certificates/07Z65MV5WXQR"}],Se=[{name:"Fundamentals of digital marketing",url:"https://drive.google.com/file/d/1UKDdZUdJre4TGZP4PyCIljS1X4MpHg5O/view?usp=sharing"}],xe=[{name:"PusatNgoding",url:"https://pusatngoding.netlify.app/",status:"Done"},{name:"Parentheses Validation",url:"https://parentheses-validation.netlify.app/",status:"Done"},{name:"Quiz With Trivia",url:"https://qwt.netlify.app/",status:"Done"},{name:"FE - Lagu",url:"https://fe-lagu.vercel.app/",status:"Done"},{name:"NoSleepHeroku",url:"https://nosleepheroku.vercel.app/",status:"Done"},{name:"Pangkas",url:"https://pangkas.vercel.app/",status:"In Progress"},{name:"Habis Dibagi",url:"https://habis-dibagi.netlify.app/",status:"still bad"}],ve=[{name:"Snake Game Advanced",url:"https://snake-game-advanced.netlify.app/",status:"Done"},{name:"Belajar DOM",url:"https://belajar-dom.netlify.app/",status:"Done"},{name:"Belajar HTML Dasar",url:"https://nabilaba.github.io/belajar-html-dasar/",status:"Done"},{name:"Belajar Bootstrap tema Lil Peep Music",url:"https://nabilaba.github.io/belajar-bootstrap-tema-lilpeep-musics",status:"Done"},{name:"Belajar SASS tema Toko Pakaian",url:"https://nabilaba.github.io/belajar-sass-tema-toko-pakaian/",status:"Done"}],De=[{name:"N-Grader",url:"https://github.com/nabilaba/N-Grader",status:"Done"},{name:"Mobile App Development Test",url:"https://github.com/nabilaba/Mobile-App-Development-Test",status:"Done"}],y={getSertificates:a=>{if(a==="Dicoding")return ke;if(a==="GoogleDigitalGarage")return Se},getProjects:a=>a==="reactjs"?xe:a==="nolibary"?ve:De,getStatusColor:a=>{if(a==="Done")return"green.500";if(a==="In Progress")return"yellow.500";if(a==="still bad")return"red.500"}},Pe=()=>n(h,{spacing:5,h:"full",children:[e(D,{title:"certificates - Nabil Aba"}),e(g,{color:"blue.500",fontSize:"xl",children:"Dicoding"}),e(h,{color:t("gray.600","gray.400"),children:e(c,{children:y.getSertificates("Dicoding").map((a,i)=>e(r,{children:e(v,{target:"_blank",href:a.url,children:a.name})},i))})}),e(g,{color:"blue.500",fontSize:"xl",children:"Google Digital Garage"}),e(h,{color:t("gray.600","gray.400"),children:e(c,{children:y.getSertificates("GoogleDigitalGarage").map((a,i)=>e(r,{children:e(v,{target:"_blank",href:a.url,children:a.name})},i))})})]}),Le=()=>n(h,{spacing:5,h:"full",children:[e(D,{title:"educations - Nabil Aba"}),e(g,{color:"blue.500",fontSize:"xl",children:"My educational background"}),e(m,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"Universitas Muhammadiyah Surakarta"}),n(c,{children:[e(r,{children:"Information Technology"}),e(r,{children:"2019 - Now"}),e(r,{children:"IPK : 3.8"})]})]})}),e(m,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"SMA Negeri 2 Sukoharjo"}),n(c,{children:[e(r,{children:"Language Class"}),e(r,{children:"2016 - 2019"})]})]})}),e(m,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"SMP Negeri 1 Grogol"}),e(c,{children:e(r,{children:"2013 - 2016"})})]})}),e(m,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"SD Negeri 2 Tegalmade"}),e(c,{children:e(r,{children:"2006 - 2013"})})]})})]}),Me=()=>n(h,{alignItems:"center",justifyContent:"center",h:"full",children:[e(D,{title:"Nabil Aba",subtitle:"A personal website"}),n(h,{textAlign:"center",children:[e(g,{fontWeight:"semibold",children:"Hi! I'm Nabil"}),e(g,{fontWeight:"normal",color:"gray.500",fontSize:"xl",children:e(le,{strings:["I'm a Calon Frontend Engineering","I'm a Android Engineering maybe :D","Maybe Backend Engineering too :D","Want to be Fullstack Engineering"],typeSpeed:50,backSpeed:25,backDelay:1500,loop:!0,smartBackspace:!0})})]})]}),Ce=()=>n(h,{spacing:5,h:"full",children:[e(D,{title:"projects - Nabil Aba"}),e(g,{color:"blue.500",fontSize:"xl",children:"Using ReactJS"}),e(h,{color:t("gray.600","gray.400"),children:e(c,{children:y.getProjects("reactjs").map((a,i)=>e(r,{children:n(w,{color:y.getStatusColor(a.status),children:[e(v,{target:"_blank",href:a.url,color:t("gray.600","gray.400"),children:a.name})," ","- ",a.status]})},i))})}),e(g,{color:"blue.500",fontSize:"xl",children:"Without Librarys"}),e(h,{color:t("gray.600","gray.400"),children:e(c,{children:y.getProjects("nolibary").map((a,i)=>e(r,{children:n(w,{color:y.getStatusColor(a.status),children:[e(v,{target:"_blank",href:a.url,color:t("gray.600","gray.400"),children:a.name})," ","- ",a.status]})},i))})}),e(g,{color:"blue.500",fontSize:"xl",children:"Others"}),e(h,{color:t("gray.600","gray.400"),children:e(c,{children:y.getProjects().map((a,i)=>e(r,{children:n(w,{color:y.getStatusColor(a.status),children:[e(v,{target:"_blank",href:a.url,color:t("gray.600","gray.400"),children:a.name})," ","- ",a.status]})},i))})})]}),je=()=>n(h,{spacing:5,h:"full",children:[e(D,{title:"skills - Nabil Aba"}),e(g,{color:"blue.500",fontSize:"xl",children:"Technical Skills"}),e(h,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"Web Development with PHP"}),e(r,{children:"Frontend Engineering"}),e(r,{children:"Android OS Engineering"}),e(r,{children:"Decompile Recompile with Apktool"}),e(r,{children:"Writing Guide"})]})}),e(g,{color:"blue.500",fontSize:"xl",children:"Programming Languages"}),e(h,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"In modern times:"}),n(c,{children:[e(r,{children:"Javascript"}),n(c,{children:[e(r,{children:"ES6"}),e(r,{children:"React.js"})]})]}),e(r,{children:"In ancient times:"}),n(c,{children:[e(r,{children:"Java"}),e(r,{children:"PHP"})]})]})}),e(g,{color:"blue.500",fontSize:"xl",children:"My Favorite Techs"}),e(h,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"Node.js"}),e(r,{children:"Github Actions"}),e(r,{children:"VSCode"})]})}),e(g,{color:"blue.500",fontSize:"xl",children:"I've used some CSS librarys"}),e(h,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"Bootstrap"}),e(r,{children:"Chakra-ui"}),e(r,{children:"Tailwindcss"}),e(r,{children:"Sass"})]})}),e(g,{color:"blue.500",fontSize:"xl",children:"I've used some deployment tools"}),e(h,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"Github Pages"}),e(r,{children:"Netlify"}),e(r,{children:"Vercel"}),e(r,{children:"Heroku"})]})})]}),Ie=()=>n(h,{spacing:5,h:"full",children:[e(D,{title:"experiences - Nabil Aba"}),e(g,{color:"blue.500",fontSize:"xl",children:"My experiences"}),e(m,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"Frontend Engineering Student at Ruangguru from February 2022 to July 2022"}),e(w,{as:"p",children:"I have been selected for TOP 5 Finalist as Frontend Engineering in the Final Project and my final grade is 4.0. So this is what i have learned during my time at Ruangguru:"}),n(c,{children:[e(r,{children:"Learn how to make a simple website using HTML and CSS"}),e(r,{children:"Learn about basics of javascript programming like algorithms, variable, comparison, looping, array, function, object, error handling, callback, async, and promise"}),e(r,{children:"Learn about javascript es6 like variables, arrow function, filter, map, order, reduce, spread syntax, destructing, and for of"}),e(r,{children:"Learn data-structure like array, hashmap, linkedlist, queue, recursion, set, and stack"}),e(r,{children:"Learn how to setup ReactJS using webpack, create-react-app, and vitejs"}),e(r,{children:"Learn how to using ChakraUI as library for frontend"}),e(r,{children:"Learn how to handle events in ReactJS"}),e(r,{children:"Learn about using useState, useEffect and useRef"}),e(r,{children:"Learn how to make Single Page Application using react router dom"}),e(r,{children:"Learn state management like redux tools using zustand"}),e(r,{children:"Learn state props and children props"}),e(r,{children:"Learn fetching data from API using fetch and axios"}),e(r,{children:"Learn about how to build simple CRUD API using express"}),e(r,{children:"Learn about how to build login auth using bearer token"}),e(r,{children:"Learn about how to commit and push to github"}),e(r,{children:"Learn about how to deploy static website using github pages, netlify, vercel and surge"}),e(r,{children:"Learn about how to deploy to heroku for database and server"})]})]})}),e(m,{color:t("gray.600","gray.400"),children:n(c,{children:[e(r,{children:"Features Maker and User Experience Designer at AncientOS from May 2021"}),e(w,{as:"p",children:"I have been working on this project for a long time. In this team is like family for me. What i have done is:"}),n(c,{children:[e(r,{children:"New look for Settings homepage application"}),e(r,{children:"New method for random color in expanded statusbar"}),e(r,{children:"Make battery landscape in statusbar"}),e(r,{children:"And many more... You can check it on AncientOS telegram channel"})]})]})})]}),Ne=()=>{const a=L();M.exports.useEffect(()=>{document.addEventListener("keydown",i=>{const{key:o,ctrlKey:s}=i;(s&&o==="1"||s&&o==="2"||s&&o==="3"||s&&o==="4"||s&&o==="5"||o==="Escape")&&i.preventDefault(),s&&o==="1"&&a("/skills"),s&&o==="2"&&a("/projects"),s&&o==="3"&&a("/educations"),s&&o==="4"&&a("/certificates"),s&&o==="5"&&a("/experiences"),o==="Escape"&&a("/")})},[])};function Ge(){return Ne(),n(ce,{children:[n(p,{path:"/",element:e(we,{}),children:[e(p,{index:!0,element:e(Me,{})}),e(p,{path:"skills",element:e(je,{})}),e(p,{path:"projects",element:e(Ce,{})}),e(p,{path:"educations",element:e(Le,{})}),e(p,{path:"certificates",element:e(Pe,{})}),e(p,{path:"experiences",element:e(Ie,{})})]}),e(p,{path:"*",element:e(se,{to:"/"})})]})}const Fe={global:a=>({"::-webkit-scrollbar":{width:"14px",height:"14px"},"::-webkit-scrollbar-thumb":{background:b("gray.400","gray.700")(a),borderLeft:b("1px solid gray","1px solid gray")(a),borderRadius:"0px"},"::-webkit-scrollbar-thumb:hover":{background:b("gray.400","gray.700")(a)},"::-webkit-scrollbar-thumb:active":{background:b("gray.400","gray.700")(a)},"::-webkit-scrollbar-track":{background:b("#e6e6e6","gray.600")(a),borderLeft:b("1px solid gray","1px solid gray")(a),borderRadius:"0px"},"::-webkit-scrollbar-track:hover":{background:b("#e6e6e6","gray.600")(a)},"::-webkit-scrollbar-track:active":{background:b("#e6e6e6","gray.600")(a)},"::-webkit-scrollbar-corner":{background:"transparent"}})};const Ee=de({styles:Fe,fonts:{body:"Ubuntu Mono, system-ui, sans-serif",heading:"Ubuntu Mono, system-ui, sans-serif",monospace:"Menlo, monospace"},config:{useSystemColorMode:!1,initialColorMode:"dark"}});he.createRoot(document.getElementById("root")).render(e(ge,{theme:Ee,children:e(ue,{children:e(Ge,{})})}));
