(this["webpackJsonpreact-final"]=this["webpackJsonpreact-final"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(20),l=c.n(i),r=c(5),o=(c(27),c(28),c(2)),j=c(10),b=c(11),d=c(13),u=c(12),h=(c(29),function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).state={},s}return Object(b.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"navigation",children:Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)(r.b,{to:"/home",children:"Home"}),Object(s.jsx)(r.b,{to:"/about",children:"About Me"}),Object(s.jsx)(r.b,{to:"/movies",children:"Movies"}),Object(s.jsx)(r.b,{to:"/contact",children:"Contact"})]})})}}]),c}(a.a.Component)),m=(c(35),function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).handleMouseEnter=function(){s.setState({isMouseInside:!0})},s.handleMouseOut=function(){s.setState({isMouseInside:!1})},s.state={isMouseInside:!1},s}return Object(b.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"home",children:Object(s.jsx)("div",{className:"browse-container",children:Object(s.jsxs)("div",{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseOut,className:"browse",children:[this.state.isMouseInside?Object(s.jsx)(r.b,{to:"/movies",className:"browse-link is-white",children:"BROWSE"}):Object(s.jsx)(r.b,{to:"/movies",className:"browse-link",children:"BROWSE"}),this.state.isMouseInside?Object(s.jsx)("div",{className:"background-button is-hover"}):Object(s.jsx)("div",{className:"background-button"})]})})})}}]),c}(a.a.Component)),O=c(4),x=(c(36),function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(j.a)(this,c),(s=t.call(this,e)).state={},s}return Object(b.a)(c,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("p",{style:{color:"#f5f5f1"},className:"footer-creator",children:"\xa9 Levan Abuladze"})})}}]),c}(a.a.Component)),v=(c(37),function(e){return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("h1",{style:{textAlign:"center",color:"#e50914"},className:"movies-genre",children:e.header}),Object(s.jsx)("div",{className:"movie-wrapper",children:e.movies.map((function(t,c){return Object(s.jsxs)("div",{className:"tile",children:[Object(s.jsx)("div",{className:"tile-media",children:Object(s.jsx)(r.b,{to:"/movies/".concat(t.id),children:Object(s.jsx)("img",{className:"tile-img",src:t.image.medium,alt:t.name})})}),Object(s.jsx)("div",{className:"tile-details",children:Object(s.jsx)("div",{className:"tile-title",children:t.name})}),Object(s.jsx)("div",{className:"tile-like",children:Object(s.jsx)("button",{className:"like-button",onClick:function(){e.like()},children:"React"})})]},t.id)}))})]})}),p=(c(38),function(){var e=Object(n.useState)(1),t=Object(O.a)(e,1)[0],c=Object(n.useState)(void 0),a=Object(O.a)(c,2),i=a[0],l=a[1],r=Object(n.useState)(0),o=Object(O.a)(r,2),j=o[0],b=o[1],d=Object(n.useState)(!1),u=Object(O.a)(d,2),h=u[0],m=u[1];Object(n.useEffect)((function(){fetch("https://api.tvmaze.com/shows"+"?page=".concat(t)).then((function(e){return e.json()})).then((function(e){var t=e;console.log(t),l(t)}),(function(e){console.log(e)}))}),[t,l]);var p=Object(n.useCallback)((function(){b(j+1),11===j&&m(!0)}),[b,j,m]),g=void 0!==i?i.filter((function(e){return e.genres.includes("Drama")})):[],f=void 0!==i?i.filter((function(e){return e.genres.includes("Action")})):[],N=void 0!==i?i.filter((function(e){return e.genres.includes("Comedy")})):[],y=void 0!==i?Object(s.jsx)(v,{like:p,movies:g.slice(0,20),header:"Drama"}):"",S=void 0!==i?Object(s.jsx)(v,{like:p,movies:f.slice(20,40),header:"Action"}):"",k=void 0!==i?Object(s.jsx)(v,{like:p,movies:N.slice(40,60),header:"Comedy"}):"";return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"movies",children:[!h&&Object(s.jsxs)("h1",{style:{textAlign:"center"},children:["Reacts: ",j]}),h&&Object(s.jsxs)("h1",{style:{textAlign:"center",color:"#f6d70b"},children:["Reacts: ",j]}),y,S,k]}),Object(s.jsx)(x,{})]})}),g=(c(39),function(e){var t=e.movie,c=t.genres.map((function(e){return e+" "}));return Object(s.jsx)(n.Fragment,{children:Object(s.jsxs)("div",{className:"movie-wrapper",children:[Object(s.jsx)("img",{style:{width:"384px",padding:"16px"},className:"movie-img",src:t.image.original,alt:t.name}),Object(s.jsxs)("div",{style:{margin:"auto"},className:"movie-details",children:[Object(s.jsx)("h1",{style:{textAlign:"center",color:"#e50914"},className:"movie-name",children:t.name}),Object(s.jsx)("div",{className:"movie-summary",dangerouslySetInnerHTML:{__html:t.summary},style:{padding:"4px 64px",textAlign:"center"}}),Object(s.jsxs)("div",{style:{textAlign:"center",marginTop:"64px"},className:"movie-genre",children:["Genres: ",c]}),Object(s.jsxs)("div",{style:{textAlign:"center",color:"#f6d70b",marginTop:"80px"},className:"movie-rating",children:["Rating: ",null===t.rating.average?"0.0":t.rating.average," \u2605"]})]})]})})}),f=(c(40),function(e){var t=Object(n.useState)(void 0),c=Object(O.a)(t,2),a=c[0],i=c[1];Object(n.useEffect)((function(){fetch("https://api.tvmaze.com/shows"+"/".concat(e.match.params.movieId)).then((function(e){return e.json()})).then((function(e){var t=e;console.log(t),i(t)}),(function(e){console.log(e)}))}),[i,e.match.params.movieId]);var l=void 0!==a?Object(s.jsx)(g,{movie:a}):"";return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)("div",{className:"movie-details",children:l}),Object(s.jsx)(x,{})]})}),N=(c(41),function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],a=t[1],i=function(){a(!c)};return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"about",children:[c?Object(s.jsx)("button",{className:"change-button-yellow",onClick:i,children:"Change Color"}):Object(s.jsx)("button",{className:"change-button",onClick:i,children:"Change Color"}),c?Object(s.jsx)("h1",{className:"about-header-yellow",children:"Levan Abuladze"}):Object(s.jsx)("h1",{className:"about-header",children:"Levan Abuladze"}),Object(s.jsx)("p",{className:"about-position",children:"Backend Developer"}),Object(s.jsx)("p",{className:"about-summary",children:"I\u2019m an enthusiastic, responsible and hard-working IT person. I am able to work well both in a team environment as well as using own initiative. Experience in Java programming. I am able to write clean and high quality code. Good in Georgian and English."}),c?Object(s.jsx)("h1",{className:"about-header-yellow about-detail",children:"Personal Details"}):Object(s.jsx)("h1",{className:"about-header about-detail",children:"Personal Details"}),Object(s.jsxs)("div",{className:"flexit",children:[Object(s.jsx)("p",{children:"levan.abuladze.1@btu.edu.ge"}),Object(s.jsx)("p",{style:{marginTop:"-4px"},children:"Tbilisi, Georgia"})]}),c?Object(s.jsx)("h1",{className:"about-header-yellow",children:"Experience"}):Object(s.jsx)("h1",{className:"about-header",children:"Experience"}),Object(s.jsxs)("div",{className:"flexit",children:[Object(s.jsx)("p",{children:"Backend Developer - Orient Logic"}),Object(s.jsx)("p",{style:{marginTop:"-12px"},children:"2020 - Present"}),Object(s.jsx)("p",{children:"Web Administrator - Tbilisi State University"}),Object(s.jsx)("p",{style:{marginTop:"-12px"},children:"2018 - Present"})]}),c?Object(s.jsx)("h1",{className:"about-header-yellow",children:"Education"}):Object(s.jsx)("h1",{className:"about-header",children:"Education"}),Object(s.jsxs)("div",{className:"flexit",children:[Object(s.jsx)("p",{children:"Informational Technologies - Business and Technology University"}),Object(s.jsx)("p",{style:{marginTop:"-12px"},children:"Bachelor's Degree 2017 - 2021"}),Object(s.jsx)("p",{style:{color:"#f6d70b",marginTop:"4px"},children:"GPA - 3.32"})]}),c?Object(s.jsx)("h1",{className:"about-header-yellow",children:"Professional Skills"}):Object(s.jsx)("h1",{className:"about-header",children:"Professional Skills"}),Object(s.jsxs)("div",{className:"flexit",children:[Object(s.jsx)("p",{children:"Java SE, Java EE (CDI, EJB, JAX-RS, JPA, JMS, Security)"}),Object(s.jsx)("p",{style:{marginTop:"-12px"},children:"Spring Boot, Spring Data JPA"}),Object(s.jsx)("p",{style:{marginTop:"-12px"},children:"HTML, CSS, JavaScript, React"}),Object(s.jsx)("p",{style:{marginTop:"-12px"},children:"Git, AWS (S3, EC2, VPC)"})]}),c?Object(s.jsx)("h1",{className:"about-header-yellow",children:"Social Links"}):Object(s.jsx)("h1",{className:"about-header",children:"Social Links"}),Object(s.jsxs)("div",{style:{marginBottom:"18px"},className:"flexit",children:[Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/levanabuladzee",className:"link",children:"Github"}),Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/levan-abuladze-\r\n6b1359164/",className:"link",children:"Linkedin"})]})]}),Object(s.jsx)(x,{})]})}),y=(c(42),function(){return Object(s.jsx)(n.Fragment,{children:Object(s.jsxs)("div",{className:"success",children:[Object(s.jsx)("h1",{children:"Success"}),Object(s.jsx)("p",{children:"Your information is submitted"}),Object(s.jsx)(r.b,{to:"/home",children:Object(s.jsx)("button",{children:"Go Home"})})]})})}),S=function(e){var t=Object(n.useState)(""),c=Object(O.a)(t,2),a=c[0],i=c[1],l=Object(n.useState)(!1),r=Object(O.a)(l,2),o=r[0],j=r[1];return Object(n.useEffect)((function(){""!==a&&(a.match(e.rgx)?(e.validate(!0),j(!1)):(e.validate(!1),j(!0)))}),[a,j,e,e.rgx,e.validate]),Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"child-container",children:[Object(s.jsx)("label",{className:"child-label",children:Object(s.jsx)("h2",{children:e.children})}),Object(s.jsx)("input",{className:"child-input",value:a,placeholder:"".concat(e.hint),onChange:function(e){i(e.target.value)},type:e.type,name:e.name,required:"required"})]}),!0===o?Object(s.jsx)("span",{className:"error",style:{color:"#e50914"},children:e.errorMessage}):Object(s.jsx)("span",{className:"error"})]})},k=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),l=Object(O.a)(i,2),r=l[0],o=l[1],j=Object(n.useState)(!1),b=Object(O.a)(j,2),d=b[0],u=b[1],h=Object(n.useState)(!1),m=Object(O.a)(h,2),v=m[0],p=m[1],g=Object(n.useState)(!1),f=Object(O.a)(g,2),N=f[0],k=f[1],w=Object(n.useCallback)((function(e){a(e)}),[a]),E=Object(n.useCallback)((function(e){o(e)}),[o]),C=Object(n.useCallback)((function(e){u(e)}),[u]),M=Object(n.useCallback)((function(e){p(e)}),[p]);return Object(n.useEffect)((function(){console.log("First Name - "+c),console.log("Last Name - "+r),console.log("Email - "+r),console.log("Mobile - "+v)}),[c,r,d,v]),Object(s.jsxs)(n.Fragment,{children:[!N&&Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),c&&r&&d&&v?(console.log("It works"),k(!0)):(console.log("It does not works"),k(!1))},children:Object(s.jsxs)("div",{className:"contact",children:[Object(s.jsx)(S,{validate:w,name:"firstname",type:"text",hint:"Enter your first name",rgx:/^[a-zA-Z]+$/,errorMessage:"It must only contain letters",children:"First Name"}),Object(s.jsx)(S,{validate:E,name:"lastname",type:"text",hint:"Enter your last name",rgx:/^[a-zA-Z]+$/,errorMessage:"It must only contain letters",children:"Last Name"}),Object(s.jsx)(S,{validate:C,name:"email",type:"email",hint:"Enter your email",rgx:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,errorMessage:"It must be valid email address",children:"E-Mail"}),Object(s.jsx)(S,{validate:M,name:"mobile",type:"number",hint:"Enter your mobile number",rgx:/^\w{9,9}$/,errorMessage:"It must be valid mobile number",children:"Mobile"}),Object(s.jsx)("label",{className:"child-label",children:Object(s.jsx)("h2",{children:"Subject"})}),Object(s.jsx)("input",{className:"child-input",id:"subject",name:"subject",placeholder:"Enter your subject",required:"required"}),Object(s.jsx)("label",{className:"child-label",children:Object(s.jsx)("h2",{children:"Message"})}),Object(s.jsx)("textarea",{className:"message",id:"message",name:"message",rows:"4",cols:"50",placeholder:"Enter your message",required:"required"}),Object(s.jsx)("button",{className:"submit-button",children:"Submit"})]})}),N&&Object(s.jsx)(y,{}),Object(s.jsx)(x,{})]})},w=function(){return Object(s.jsxs)(n.Fragment,{children:[Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)("h1",{children:"404"}),Object(s.jsx)("p",{children:"Not Found"}),Object(s.jsx)(r.b,{to:"/home",children:Object(s.jsx)("button",{children:"Go Home"})})]}),Object(s.jsx)(x,{})]})};var E=function(){return Object(s.jsxs)("div",{className:"myApp",children:[Object(s.jsx)(h,{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/",exact:!0,component:m}),Object(s.jsx)(o.a,{path:"/home",exact:!0,component:m}),Object(s.jsx)(o.a,{path:"/movies",exact:!0,component:p}),Object(s.jsx)(o.a,{path:"/movies/:movieId",exact:!0,component:f}),Object(s.jsx)(o.a,{path:"/about",exact:!0,component:N}),Object(s.jsx)(o.a,{path:"/contact",exact:!0,component:k}),Object(s.jsx)(o.a,{component:w})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(r.a,{children:Object(s.jsx)(E,{})})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.d56bced3.chunk.js.map