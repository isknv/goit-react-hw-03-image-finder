(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{18:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),s=(a(18),a(3)),i=a(4),l=a(6),u=a(5),h=a(11),m=a(0),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.onChangeInpt=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(h.a)({},n,r.toLowerCase()))},e.onSubmitForm=function(t){if(t.preventDefault(),""===e.state.search)return alert("Search field must not be empty");e.props.submitFunction(e.state),e.setState({search:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{onSubmit:this.onSubmitForm,className:"SearchForm",children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onChangeInpt,name:"search",value:e})]})})}}]),a}(r.a.Component),p=a(10),b=a(12),j=a.n(b),g=(a(40),a(9)),f=a.n(g),v=a(13),O={search:"",page:1,fetchArticles:function(){var e=this;return Object(v.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pixabay.com/api/?q=".concat(e.search,"&page=").concat(e.page,"&key=20337481-672a40f89241c2a553d794fbd&image_type=photo&orientation=horizontal&per_page=12"));case 2:return a=t.sent,t.next=5,a.json();case 5:if((n=t.sent).totalHits){t.next=8;break}return t.abrupt("return",alert("Nothing found for this question."));case 8:return e.loadMoreImg(),t.abrupt("return",n);case 10:case"end":return t.stop()}}),t)})))()},query:function(e){this.search=e},loadMoreImg:function(){this.page++},reset:function(){this.page=1}},y=function(e){var t=e.id,a=e.webformatURL,n=e.alt,r=e.largeImgClick;return Object(m.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return r(t)},children:Object(m.jsx)("img",{src:a,alt:n,className:"ImageGalleryItem-image"})},t)},x=function(e){var t=e.loadMore;return Object(m.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeBackdrop=function(t){t.currentTarget===t.target&&e.props.closeModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",(function(t){"Escape"===t.code&&e.props.closeModal()}))}},{key:"render",value:function(){return Object(c.createPortal)(Object(m.jsx)("div",{onClick:this.closeBackdrop,className:"Overlay",children:Object(m.jsx)("div",{className:"Modal",children:this.props.children})}),document.querySelector("#modal-root"))}}]),a}(r.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={img:[],imgModal:"",pending:!1},e.closeModal=function(){e.setState({imgModal:""})},e.loadMore=function(){O.loadMoreImg(),e.saveImg()},e.largeImgClick=function(t){var a=e.state.img.find((function(e){return e.id===t})).largeImageURL;e.setState({imgModal:a})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.search!==this.props.search&&(O.query(this.props.search),O.reset(),this.saveImg(),this.setState({img:[]})),t.img.length&&t.img!==this.state.img&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"saveImg",value:function(){var e=this;this.setState({pending:!0}),O.fetchArticles().then((function(t){var a=t.hits;return e.setState((function(e){var t=e.img;return{img:[].concat(Object(p.a)(t),Object(p.a)(a))}}))})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({pending:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.img,n=t.imgModal,r=t.pending;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("ul",{className:"ImageGallery",children:a.map((function(t){var a=t.id,n=t.webformatURL,r=t.tags;return Object(m.jsx)(y,{webformatURL:n,alt:r,id:a,largeImgClick:e.largeImgClick},a)}))}),n&&Object(m.jsx)(k,{closeModal:this.closeModal,children:Object(m.jsx)("img",{src:n,alt:"Modal"})}),Object(m.jsx)("div",{className:"container-btn",children:!!a.length&&!r&&Object(m.jsx)(x,{loadMore:this.loadMore})}),Object(m.jsx)("div",{className:"container-loader",children:r&&Object(m.jsx)(j.a,{type:"Puff",color:"#00BFFF",height:200,width:200})})]})}}]),a}(r.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:""},e.query=function(t){var a=t.search;return e.setState({search:a})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d,{submitFunction:this.query}),Object(m.jsx)(S,{search:e})]})}}]),a}(r.a.Component);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8ffe5979.chunk.js.map