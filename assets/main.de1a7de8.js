import{j as n,F as y,u as i,H as S,a as e,V as M,b as C,c as I,d as j,e as N,T as P,I as v,f,g as G,h as L,i as A,k as z,l as R,m as T,n as F,L as E,o as B,B as u,O,p as H,R as W,D as Z,q as J,G as V,r as _,s as U,t as X,A as Q,v as K,M as $,S as q,w as x,x as Y,U as ee,y as ae,z as c,C as h,E as a,J as re,K as ne,N as m,P as ie,Q as p,W as te,X as oe,Y as le,Z as ce}from"./vendor.e6931d8c.js";const se=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const w of d.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&g(w)}).observe(document,{childList:!0,subtree:!0});function s(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerpolicy&&(d.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?d.credentials="include":t.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function g(t){if(t.ep)return;t.ep=!0;const d=s(t);fetch(t.href,d)}};se();const de=()=>n(y,{pos:"fixed",bottom:"0",zIndex:"2",w:"full",as:"footer",h:"25px",bg:i("gray.200","gray.900"),align:"center",spacing:1,px:2,justifyContent:"space-between",children:[n(S,{h:"full",children:[e(k,{icon:M,label:"main*",labelTooltip:"nabilaba.github.io (Git)"}),e(k,{icon:C}),e(k,{icon:I,label:"0",icon2:j,label2:"0",labelTooltip:"No Problems"}),e(k,{label:"Git Graph"})]}),n(S,{h:"full",children:[e(k,{label:"Javascript",label2:"React",labelTooltip:"Language Mode"}),e(k,{icon:N})]})]}),k=({icon:r,icon2:l,label:s,label2:g,labelTooltip:t})=>e(P,{label:t,children:n(S,{color:i("gray.800","gray.400"),spacing:1,align:"center",role:"group",h:"full",fontSize:".75rem",cursor:"pointer",w:"max-content",_hover:{bg:i("gray.100","gray.800")},p:1,children:[r&&e(v,{boxSize:"4",as:r}),s&&e(f,{children:s}),l&&e(v,{boxSize:"4",as:l}),g&&e(f,{children:g})]})}),he=()=>{const r=G(),l=L(),s=({icon:g,label:t,color:d,extension:w})=>n(S,{color:r.pathname===`/${t}`?i("gray.700","white"):i("gray.500","gray.400"),bg:r.pathname===`/${t}`?i("gray.100","gray.800"):"none",spacing:3,align:"center",role:"group",h:"full",fontSize:".75rem",cursor:"pointer",w:"max-content",borderRightWidth:2,borderRightColor:i("gray.50","gray.800"),_hover:{color:i("gray.700","white")},px:"4",children:[n(S,{as:E,to:`/${t}`,spacing:1,align:"center",h:"full",py:"2",children:[g&&e(v,{boxSize:"5",as:g,color:d}),t&&n(f,{display:r.pathname===`/${t}`?"block":{base:"none",lg:"block"},children:[t,w]})]}),r.pathname===`/${t}`&&e(v,{boxSize:"3",as:B,color:i("gray.400","gray.500"),_hover:{color:i("gray.500","gray.400")},onClick:()=>l("/")})]});return e(y,{as:"header",align:"center",w:"full",borderColor:i("inherit","gray.700"),bg:i("white","gray.900"),position:"sticky",top:"0",children:n(S,{spacing:0,h:"full",children:[e(s,{icon:A,extension:".js",label:"skills",color:"yellow.500"}),e(s,{icon:z,extension:".jsx",label:"projects",color:"blue.500"}),e(s,{icon:R,extension:".sass",label:"educations",color:"pink.500"}),e(s,{icon:T,extension:".json",label:"certificates",color:"green.500"}),e(s,{icon:F,extension:".html",label:"experiences",color:"red.500"})]})})},ge=()=>n(y,{ml:{base:12,md:12},transition:".3s ease",direction:"column",h:"100vh",children:[e(he,{}),e(u,{as:"main",bgColor:i("gray.100","gray.800"),flex:1,p:10,pb:"20",children:e(O,{})})]}),ue=r=>{const l=L(),s=g=>{const t=i("gray.600","gray.300"),{icon:d,url:w}=g;return e(y,{as:x,href:w,target:"_blank",align:"center",px:"2",py:"4",cursor:"pointer",role:"group",fontWeight:"semibold",transition:".15s ease",color:i("gray.500","gray.400"),_hover:{color:i("gray.700","gray.200")},children:d&&e(v,{mx:"auto",boxSize:"6",_groupHover:{color:t},as:d})})};return e(u,{as:"nav",pos:"fixed",top:"0",left:"0",pb:25,zIndex:"1",h:"full",overflowX:"hidden",overflowY:"auto",bg:i("gray.50","gray.700"),children:n(H,{h:"full",w:"full",alignItems:"flex-start",justify:"space-between",children:[n(u,{w:"full",children:[e(y,{px:"2",py:"5",align:"center",children:e(v,{as:W,h:8,w:8,cursor:"pointer",color:i("gray.500","gray.400"),_hover:{color:i("gray.700","gray.200")},onClick:()=>{l("/")}})}),e(y,{px:"2",align:"center",children:e(Z,{})}),n(y,{direction:"column",as:"nav",fontSize:"md",color:"gray.600","aria-label":"Main Navigation",children:[e(s,{icon:J,url:"https://t.me/nabilaba"}),e(s,{icon:V,url:"https://github.com/nabilaba"}),e(s,{icon:_,url:"https://www.linkedin.com/in/nabilaba/"}),e(s,{icon:U,url:"https://wa.me/6283146542084"}),e(s,{icon:X,url:"https://instagram.com/nabil_aba"})]})]}),n(y,{direction:"column",p:"2",mt:10,justify:"center",alignItems:"center",children:[e(Q,{size:"sm",name:"Nabil",src:"https://avatars.githubusercontent.com/u/45154878?v=4"}),e(P,{label:"DarkMode",placement:"right",gutter:0,children:e(K,{mt:"4",size:"sm",onClick:r.toggleColorMode,variant:"unstyled",icon:r.colorMode==="light"?e($,{}):e(q,{}),color:i("gray.500","gray.400"),_hover:{color:i("gray.700","gray.200")}})})]})]})})},me=()=>{const{colorMode:r,toggleColorMode:l}=Y();return n(u,{as:"section",bg:i("gray.50","gray.700"),minH:"100vh",children:[e(ue,{colorMode:r,toggleColorMode:l}),e(ge,{}),e(de,{})]})},o=({children:r})=>e(ee,{spacing:0,listStylePos:"outside",listStyleType:"square",ml:9,children:r}),D=({title:r,subtitle:l})=>n(ae,{children:[e("title",{children:r}),e("meta",{name:"title",property:"og:title",content:r})]}),pe=[{name:"Belajar Dasar Pemrograman Website",url:"https://www.dicoding.com/certificates/GRX5KM5O3Z0M"},{name:"Belajar Dasar Dengan Github",url:"https://www.dicoding.com/certificates/N9ZOEQ6M0XG5"},{name:"Belajar Dasar Google Cloud",url:"https://www.dicoding.com/certificates/0LZ03M960Z65"},{name:"Belajar Dasar Pemrograman Javascript",url:"https://www.dicoding.com/certificates/QLZ91GQW9P5D"},{name:"Belajar Dasar Visualisasi Data",url:"https://www.dicoding.com/certificates/N9ZOEQ636XG5"},{name:"Belajar Membuat Aplikasi Android untuk Pemula",url:"https://www.dicoding.com/certificates/4EXG68EK1ZRL"},{name:"Belajar Prinsip Pemrograman SOLID",url:"https://www.dicoding.com/certificates/QLZ91G8RDP5D"},{name:"Cloud Practioner Essentials (Belajar Dasar AWS Cloud)",url:"https://www.dicoding.com/certificates/0LZ03NMMNZ65"},{name:"Memulai Pemrograman Dengan C",url:"https://www.dicoding.com/certificates/98XWKY6V9XM3"},{name:"Memulai Pemrograman Dengan Dart",url:"https://www.dicoding.com/certificates/QLZ91G2L9P5D"},{name:"Memulai Pemrograman Dengan Python",url:"https://www.dicoding.com/certificates/JLX13J97NP72"},{name:"Meniti Karir Sebagai Software Developer",url:"https://www.dicoding.com/certificates/L4PQ37GM2PO1"},{name:"Pengenalan Data pada Pemrograman (Data 101)",url:"https://www.dicoding.com/certificates/JMZV289DOZN9"},{name:"Pengenalan ke Logika Pemrograman (Programming Logic 101)",url:"https://www.dicoding.com/certificates/07Z65MV5WXQR"}],be=[{name:"Fundamentals of digital marketing",url:"https://drive.google.com/file/d/1UKDdZUdJre4TGZP4PyCIljS1X4MpHg5O/view?usp=sharing"}],ye=[{name:"PusatNgoding",url:"https://pusatngoding.netlify.app/",status:"Done"},{name:"Parentheses Validation",url:"https://parentheses-validation.netlify.app/",status:"Done"},{name:"Quiz With Trivia",url:"https://qwt.netlify.app/",status:"Done"},{name:"NoSleepHeroku",url:"https://nosleepheroku.vercel.app/",status:"Done"},{name:"Pangkas",url:"https://pangkas.vercel.app/",status:"In Progress"},{name:"Habis Dibagi",url:"https://habis-dibagi.netlify.app/",status:"still bad"}],fe=[{name:"Snake Game Advanced",url:"https://snake-game-advanced.netlify.app/",status:"Done"},{name:"Belajar DOM",url:"https://belajar-dom.netlify.app/",status:"Done"},{name:"Belajar HTML Dasar",url:"https://nabilaba.github.io/belajar-html-dasar/",status:"Done"},{name:"Belajar Bootstrap tema Lil Peep Music",url:"https://nabilaba.github.io/belajar-bootstrap-tema-lilpeep-musics",status:"Done"},{name:"Belajar SASS tema Toko Pakaian",url:"https://nabilaba.github.io/belajar-sass-tema-toko-pakaian/",status:"Done"}],we=[{name:"N-Grader",url:"https://github.com/nabilaba/N-Grader",status:"Done"},{name:"Mobile App Development Test",url:"https://github.com/nabilaba/Mobile-App-Development-Test",status:"Done"}],b={getSertificates:r=>{if(r==="Dicoding")return pe;if(r==="GoogleDigitalGarage")return be},getProjects:r=>r==="reactjs"?ye:r==="nolibary"?fe:we,getStatusColor:r=>{if(r==="Done")return"green.500";if(r==="In Progress")return"yellow.500";if(r==="still bad")return"red.500"}},ke=()=>n(c,{spacing:5,h:"full",children:[e(D,{title:"certificates - Nabil Aba"}),e(h,{color:"blue.500",fontSize:"xl",children:"Dicoding"}),e(c,{color:i("gray.600","gray.400"),children:e(o,{children:b.getSertificates("Dicoding").map((r,l)=>e(a,{children:e(x,{target:"_blank",href:r.url,children:r.name})},l))})}),e(h,{color:"blue.500",fontSize:"xl",children:"Google Digital Garage"}),e(c,{color:i("gray.600","gray.400"),children:e(o,{children:b.getSertificates("GoogleDigitalGarage").map((r,l)=>e(a,{children:e(x,{target:"_blank",href:r.url,children:r.name})},l))})})]}),Se=()=>n(c,{spacing:5,h:"full",children:[e(D,{title:"educations - Nabil Aba"}),e(h,{color:"blue.500",fontSize:"xl",children:"My educational background"}),e(u,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"Universitas Muhammadiyah Surakarta"}),n(o,{children:[e(a,{children:"Information Technology"}),e(a,{children:"2019 - Now"}),e(a,{children:"IPK : 3.8"})]})]})}),e(u,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"SMA Negeri 2 Sukoharjo"}),n(o,{children:[e(a,{children:"Language Class"}),e(a,{children:"2016 - 2019"})]})]})}),e(u,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"SMP Negeri 1 Grogol"}),e(o,{children:e(a,{children:"2013 - 2016"})})]})}),e(u,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"SD Negeri 2 Tegalmade"}),e(o,{children:e(a,{children:"2006 - 2013"})})]})})]}),xe=()=>n(c,{alignItems:"center",justifyContent:"center",h:"full",children:[e(D,{title:"Nabil Aba",subtitle:"A personal website"}),n(c,{textAlign:"center",children:[e(h,{fontWeight:"semibold",children:"Hi! I'm Nabil"}),e(h,{fontWeight:"normal",color:"gray.500",fontSize:"xl",children:e(re,{strings:["I'm a Calon Frontend Engineering","I'm a Android Engineering maybe :D","Maybe Backend Engineering too :D","Want to be Fullstack Engineering"],typeSpeed:50,backSpeed:25,backDelay:1500,loop:!0,smartBackspace:!0})})]})]}),ve=()=>n(c,{spacing:5,h:"full",children:[e(D,{title:"projects - Nabil Aba"}),e(h,{color:"blue.500",fontSize:"xl",children:"Using ReactJS"}),e(c,{color:i("gray.600","gray.400"),children:e(o,{children:b.getProjects("reactjs").map((r,l)=>e(a,{children:n(f,{color:b.getStatusColor(r.status),children:[e(x,{target:"_blank",href:r.url,color:i("gray.600","gray.400"),children:r.name})," ","- ",r.status]})},l))})}),e(h,{color:"blue.500",fontSize:"xl",children:"Without Librarys"}),e(c,{color:i("gray.600","gray.400"),children:e(o,{children:b.getProjects("nolibary").map((r,l)=>e(a,{children:n(f,{color:b.getStatusColor(r.status),children:[e(x,{target:"_blank",href:r.url,color:i("gray.600","gray.400"),children:r.name})," ","- ",r.status]})},l))})}),e(h,{color:"blue.500",fontSize:"xl",children:"Others"}),e(c,{color:i("gray.600","gray.400"),children:e(o,{children:b.getProjects().map((r,l)=>e(a,{children:n(f,{color:b.getStatusColor(r.status),children:[e(x,{target:"_blank",href:r.url,color:i("gray.600","gray.400"),children:r.name})," ","- ",r.status]})},l))})})]}),De=()=>n(c,{spacing:5,h:"full",children:[e(D,{title:"skills - Nabil Aba"}),e(h,{color:"blue.500",fontSize:"xl",children:"Technical Skills"}),e(c,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"Web Development with PHP"}),e(a,{children:"Frontend Engineering"}),e(a,{children:"Android OS Engineering"}),e(a,{children:"Decompile Recompile with Apktool"}),e(a,{children:"Writing Guide"})]})}),e(h,{color:"blue.500",fontSize:"xl",children:"Programming Languages"}),e(c,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"In modern times:"}),n(o,{children:[e(a,{children:"Javascript"}),n(o,{children:[e(a,{children:"ES6"}),e(a,{children:"React.js"})]})]}),e(a,{children:"In ancient times:"}),n(o,{children:[e(a,{children:"Java"}),e(a,{children:"PHP"})]})]})}),e(h,{color:"blue.500",fontSize:"xl",children:"My Favorite Techs"}),e(c,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"Node.js"}),e(a,{children:"Github Actions"}),e(a,{children:"VSCode"})]})}),e(h,{color:"blue.500",fontSize:"xl",children:"I've used some CSS librarys"}),e(c,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"Bootstrap"}),e(a,{children:"Chakra-ui"}),e(a,{children:"Tailwindcss"}),e(a,{children:"Sass"})]})}),e(h,{color:"blue.500",fontSize:"xl",children:"I've used some deployment tools"}),e(c,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"Github Pages"}),e(a,{children:"Netlify"}),e(a,{children:"Vercel"}),e(a,{children:"Heroku"})]})})]}),Pe=()=>n(c,{spacing:5,h:"full",children:[e(D,{title:"experiences - Nabil Aba"}),e(h,{color:"blue.500",fontSize:"xl",children:"My experiences"}),e(u,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"Frontend Engineering Student at Ruangguru from February 2022 to July 2022"}),e(f,{as:"p",children:"I have been selected for TOP 5 Finalist as Frontend Engineering in the Final Project and my final grade is 4.0. So this is what i have learned during my time at Ruangguru:"}),n(o,{children:[e(a,{children:"Learn how to make a simple website using HTML and CSS"}),e(a,{children:"Learn about basics of javascript programming like algorithms, variable, comparison, looping, array, function, object, error handling, callback, async, and promise"}),e(a,{children:"Learn about javascript es6 like variables, arrow function, filter, map, order, reduce, spread syntax, destructing, and for of"}),e(a,{children:"Learn data-structure like array, hashmap, linkedlist, queue, recursion, set, and stack"}),e(a,{children:"Learn how to setup ReactJS using webpack, create-react-app, and vitejs"}),e(a,{children:"Learn how to using ChakraUI as library for frontend"}),e(a,{children:"Learn how to handle events in ReactJS"}),e(a,{children:"Learn about using useState, useEffect and useRef"}),e(a,{children:"Learn how to make Single Page Application using react router dom"}),e(a,{children:"Learn state management like redux tools using zustand"}),e(a,{children:"Learn state props and children props"}),e(a,{children:"Learn fetching data from API using fetch and axios"}),e(a,{children:"Learn about how to build simple CRUD API using express"}),e(a,{children:"Learn about how to build login auth using bearer token"}),e(a,{children:"Learn about how to commit and push to github"}),e(a,{children:"Learn about how to deploy static website using github pages, netlify, vercel and surge"}),e(a,{children:"Learn about how to deploy to heroku for database and server"})]})]})}),e(u,{color:i("gray.600","gray.400"),children:n(o,{children:[e(a,{children:"Features Maker and User Experience Designer at AncientOS from May 2022"}),e(f,{as:"p",children:"I have been working on this project for a long time. In this team is like family for me. What i have done is:"}),n(o,{children:[e(a,{children:"New look for Settings homepage application"}),e(a,{children:"New method for random color in expanded statusbar"}),e(a,{children:"Make battery landscape in statusbar"}),e(a,{children:"And many more... You can check it on AncientOS telegram channel"})]})]})})]});function Le(){return n(ne,{children:[n(m,{path:"/",element:e(me,{}),children:[e(m,{index:!0,element:e(xe,{})}),e(m,{path:"skills",element:e(De,{})}),e(m,{path:"projects",element:e(ve,{})}),e(m,{path:"educations",element:e(Se,{})}),e(m,{path:"certificates",element:e(ke,{})}),e(m,{path:"experiences",element:e(Pe,{})})]}),e(m,{path:"*",element:e(ie,{to:"/"})})]})}const Me={global:r=>({"::-webkit-scrollbar":{width:"14px",height:"14px"},"::-webkit-scrollbar-thumb":{background:p("gray.400","gray.700")(r),borderLeft:p("1px solid gray","1px solid gray")(r),borderRadius:"0px"},"::-webkit-scrollbar-thumb:hover":{background:p("gray.400","gray.700")(r)},"::-webkit-scrollbar-thumb:active":{background:p("gray.400","gray.700")(r)},"::-webkit-scrollbar-track":{background:p("#e6e6e6","gray.600")(r),borderLeft:p("1px solid gray","1px solid gray")(r),borderRadius:"0px"},"::-webkit-scrollbar-track:hover":{background:p("#e6e6e6","gray.600")(r)},"::-webkit-scrollbar-track:active":{background:p("#e6e6e6","gray.600")(r)},"::-webkit-scrollbar-corner":{background:"transparent"}})};const Ce=te({styles:Me,fonts:{body:"Ubuntu Mono, system-ui, sans-serif",heading:"Ubuntu Mono, system-ui, sans-serif",monospace:"Menlo, monospace"},config:{useSystemColorMode:!1,initialColorMode:"dark"}});oe.createRoot(document.getElementById("root")).render(e(le,{theme:Ce,children:e(ce,{children:e(Le,{})})}));
