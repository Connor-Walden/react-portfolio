(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{21:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(15),s=a.n(r),o=(a(21),a(9)),c=a(2),l=a(0);var d=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Connor Walden"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(o.b,{className:"nav-link",to:"/work",children:"My Work"})})]})})]})})};var h=function(){return Object(l.jsx)("footer",{className:"footer mt-auto py-3 bg-dark border-top border-light",children:Object(l.jsx)("div",{className:"container text-center text-light",children:"\xa9 2021 Connor Walden"})})};var b=function(){return Object(l.jsx)("div",{className:"container col-xxl-8 px-4 py-5",children:Object(l.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",children:[Object(l.jsx)("div",{className:"col-10 col-sm-8 col-lg-6",children:Object(l.jsx)("img",{src:"https://avatars.githubusercontent.com/u/20080981?v=4",className:"d-block mx-lg-auto img-fluid",alt:"Connor Walden",width:"700",height:"500",loading:"lazy"})}),Object(l.jsxs)("div",{className:"col-lg-6",children:[Object(l.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3 text-light",children:"Connor Walden"}),Object(l.jsx)("p",{className:"lead text-light",children:"connormwalden@gmail.com"}),Object(l.jsx)("p",{className:"lead text-light",children:"0412248066"}),Object(l.jsxs)("p",{className:"lead text-light",children:["Github: ",Object(l.jsx)("a",{href:"https://github.com/Connor-Walden",target:"_blank",rel:"noreferrer",children:"Connor Walden"})]}),Object(l.jsxs)("p",{className:"lead text-light",children:["LinkedIn: ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/connor-walden-96122011b/",target:"_blank",rel:"noreferrer",children:"Connor Walden"})]}),Object(l.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-start",children:Object(l.jsx)("a",{href:"./download/resume.pdf",className:"btn btn-outline-secondary btn-lg px-4",download:!0,children:"Download resume"})})]})]})})};var j=function(e){return Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("img",{src:e.imgSrc,className:"card-img-top",alt:"Skill Icon",style:{width:"100px"}})})};var p=function(e){return Object(l.jsx)("h5",{className:"card-title text-center",children:e.text})};var m=function(e){return Object(l.jsx)("p",{className:"card-text text-center",children:e.text})};var u=function(e){return Object(l.jsxs)("div",{className:"card",style:{width:"25rem",minHeight:"310px"},children:[Object(l.jsx)(j,{imgSrc:e.skill.imgSrc}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)(p,{text:e.skill.title}),Object(l.jsx)(m,{text:e.skill.body})]})]})};var g=function(){return Object(l.jsx)("div",{className:"container mb-3 mt-3",children:Object(l.jsx)("div",{className:"row",children:[{imgSrc:"https://connor-walden.github.io/updated-portfolio/img/friendly-icon.png",title:"Collaboration",body:"As someone who loves to talk to others, communication and collaboration is very important to me. Without collaboration everything is harder, which is why it is so important to me as a full-stack developer."},{imgSrc:"https://connor-walden.github.io/updated-portfolio/img/speed-icon.png",title:"Speed",body:"Working in factories and such in the past has instilled a desire to be efficient with my work. Deadlines are extremely important and I would rather be ahead of the deadline instead of behind it."},{imgSrc:"https://connor-walden.github.io/updated-portfolio/img/versatile-icon.png",title:"Versatility",body:"Over the years I have built many prototypes for different things such as websites, games, AI and bots in many different languages (Java, Javascript, Python, C++ and C#). Practising these languages has given me a solid foundation in logic and programming."}].map((function(e){return Object(l.jsx)("div",{className:"col-xl-4",children:Object(l.jsx)(u,{skill:e},e.title)},e.title)}))})})};var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(b,{}),Object(l.jsx)(g,{}),Object(l.jsx)(h,{})]})};var f=function(e){return Object(l.jsx)("h2",{className:"text-light",children:e.text})};var v=function(e){return Object(l.jsx)("h3",{className:"text-light",children:e.text})};var O=function(e){return Object(l.jsx)("p",{className:"text-light",children:e.text})};var w=function(e){return Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",value:"goto",children:Object(l.jsx)("img",{src:e.imgSrc,alt:"Project Screenshot",style:{width:"1320px"}})})};var y=function(e){return Object(l.jsxs)("div",{className:"mb-3 mt-3",children:[Object(l.jsx)(f,{text:e.project.subject}),Object(l.jsx)(v,{text:e.project.title}),Object(l.jsx)(O,{text:e.project.description}),Object(l.jsx)(w,{imgSrc:e.project.imgSrc,link:e.project.link})]})};var k=function(){return Object(l.jsx)("div",{className:"container mb-3 mt-3",children:[{subject:"Custom Framework",title:"Dragon",description:"Dragon is a custom framework I built as a fun side-project. It includes a mobile-first responsive grid, and many components such as: Buttons, Alerts, Statements, Forms, Navbars, Badges, Dropdowns, Lists, Accordions and custom styling for many different html elements.",imgSrc:"https://connor-walden.github.io/updated-portfolio/img/dragon.png",link:"https://getdragon.xyz/"},{subject:"Entertainment App",title:"Spotwify",description:"Spotwify is an entertainment app that bundles your favourite music with a lot of information about the artist. Spotwify utilises a few APIs including: AudioDB, Youtube and Twitter. It was our goal to make the site easy to navigate and also easy to use, I think this was achieved.",imgSrc:"https://connor-walden.github.io/updated-portfolio/img/project1.png",link:"https://alex-stew.github.io/project1/"},{subject:"Code Decumentation",title:"DCODE",description:"Use DCODE to search up documentation for javascript functions. Useful for web developers!",imgSrc:"https://connor-walden.github.io/updated-portfolio/img/dcode.png",link:"https://arcane-waters-44478.herokuapp.com/"},{subject:"Weather App",title:"Weather Dashboard",description:"The weather dashboard works so that you can search the weather in a specific city, save it, and search another. When you search multiple cities it appends to a list in the sidebar in which you can select later. This allows user to plan a trip and make sure that the weather is going to be favourable for the trip.",imgSrc:"https://connor-walden.github.io/updated-portfolio/img/weatherApp.png",link:"https://connor-walden.github.io/weather-dashboard/"},{subject:"Track Your Workouts",title:"Workout Tracker",description:"The fitness tracker is an app to keep track of your workouts. Easy to use UI and it will display last 7 days workouts in /stats.",imgSrc:"https://connor-walden.github.io/updated-portfolio/img/fitnessTracker.png",link:"https://shrouded-citadel-72947.herokuapp.com/"},{subject:"Employee Management app",title:"Employee Tracker",description:"Search and sort through employees with an option to filter by name. Made with React",imgSrc:"https://user-images.githubusercontent.com/20080981/116839497-c685a180-ac11-11eb-866d-33290f1e84b4.PNG",link:"https://connor-walden.github.io/employee-directory/"}].map((function(e){return Object(l.jsx)("div",{className:"row",children:Object(l.jsx)(y,{project:e})},e.title)}))})};var N=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(k,{}),Object(l.jsx)(h,{})]})};var S=function(){return Object(l.jsx)("div",{className:"App bg-dark",children:Object(l.jsx)(o.a,{children:Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{exact:!0,path:"/",component:x}),Object(l.jsx)(c.a,{exact:!0,path:"/work",component:N})]})})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),C()}},[[28,1,2]]]);
//# sourceMappingURL=main.72a542d3.chunk.js.map