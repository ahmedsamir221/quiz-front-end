(this["webpackJsonprouter-app"]=this["webpackJsonprouter-app"]||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var i=n(19),s=n.n(i),c=n(6),a=n(7),r=n(9),o=n(8),l=n(1),u=n.n(l),d=n(4),j=(n(29),n(0)),b=function(e){var t=e.addQuestionClickHandler;return Object(j.jsxs)("button",{onClick:t,className:"add-question",children:[" ","add question"," "]})},h=Object(d.b)(null,(function(e){return{addQuestionClickHandler:function(){e({type:"addQuestion"})}}}))(b),O=function(e){return e.value?Object(j.jsx)("span",{}):Object(j.jsxs)("span",{style:{color:"#de0000",fontSize:"1.3rem"},children:[" ","This field is required"," "]})},m=(n(23),n(41),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).editToggle=function(){e.setState({edit:!e.state.edit})},e.state={edit:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,i=n.name,s=n.updateNameClickHandler;return this.state.edit?Object(j.jsxs)("div",{className:"question-head-block",children:[Object(j.jsx)("textarea",{className:"question-name-input",ref:function(t){return e=t},defaultValue:i}),Object(j.jsxs)("button",{onClick:function(){s(e.value),t.editToggle()},className:"question-name-save",children:[" ","save"]})]}):Object(j.jsxs)("div",{className:"question-head-block",children:[Object(j.jsxs)("div",{className:"question-name",children:["Quiz name : ",i," ",Object(j.jsx)(O,{value:i})]}),Object(j.jsxs)("button",{onClick:function(){t.editToggle()},className:"question-name-edit",children:[" ","edit"," "]})]})}}]),n}(u.a.Component)),v=function(e){return{type:"updateName",value:e}},f=Object(d.b)((function(e){return{name:e.quiz.name}}),(function(e){return{updateNameClickHandler:function(t){e(v(t))}}}))(m),x=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).editToggle=function(){e.setState({edit:!e.state.edit})},e.state={edit:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,i=n.children,s=n.i,c=n.j,a=n.isChecked,r=n.updateAnswerClickHandler,o=n.deleteAnswerClickHandler,l=n.correctAnswerClickHandler;return this.state.edit?Object(j.jsxs)("li",{className:"answer",children:[Object(j.jsx)("textarea",{className:"answer-input",ref:function(t){return e=t},defaultValue:i}),Object(j.jsxs)("button",{onClick:function(){r(s,c,e.value),t.editToggle()},className:"answer-save",children:[" ","save"]})]}):Object(j.jsxs)("li",{className:"answer",children:[Object(j.jsxs)("div",{className:"answer-top",children:[" ",c+1," : ",i,Object(j.jsx)(O,{value:i})]}),Object(j.jsxs)("div",{className:"answer-buttons",children:[Object(j.jsx)("input",{style:{margin:"1rem"},onClick:function(){return l(s,c)},readOnly:!0,type:"checkbox",checked:a}),Object(j.jsxs)("button",{onClick:function(){t.editToggle()},className:"answer-edit",children:[" ","edit"," "]}),Object(j.jsxs)("button",{className:"answer-delete",onClick:function(){return o(s,c)},children:[" ","delete"," "]})]})]})}}]),n}(u.a.Component),p=Object(d.b)((function(e,t){return{isChecked:e.quiz.questions[t.i].correctAnswer===t.j}}),(function(e){return{updateAnswerClickHandler:function(t,n,i){e(function(e,t,n){return{type:"updateAnswer",i:e,j:t,value:n}}(t,n,i))},deleteAnswerClickHandler:function(t,n){e(function(e,t){return{type:"deleteAnswer",i:e,j:t}}(t,n))},correctAnswerClickHandler:function(t,n){e(function(e,t){return{type:"correctAnswer",i:e,j:t}}(t,n))}}}))(x),g=(n(42),function(e){var t=e.children,n=e.i;return Object(j.jsx)("ul",{className:"answer-list",children:t.map((function(e,t){return Object(j.jsx)(p,{i:n,j:t,children:e},t)}))})}),k=(n(43),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).editToggle=function(){e.setState({edit:!e.state.edit})},e.state={edit:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,i=n.i,s=n.children,c=n.updateQuestionClickHandler,a=n.deleteQuestionClickHandler,r=n.AddAnswerClickHandler;return this.state.edit?Object(j.jsxs)("li",{className:"question",children:[Object(j.jsxs)("div",{className:"question-top",children:[Object(j.jsx)("textarea",{className:"question-input",ref:function(t){return e=t},defaultValue:s.question}),Object(j.jsxs)("button",{onClick:function(){c(i,e.value),t.editToggle()},className:"question-save",children:[" ","save"]})]}),Object(j.jsx)("h1",{className:"answer-list-title",children:" Answers "}),Object(j.jsx)(g,{i:i,children:s.answers}),Object(j.jsxs)("button",{className:"answer-add",onClick:function(){return r(i)},children:[" ","add answer"," "]})]}):Object(j.jsxs)("li",{className:"question",children:[Object(j.jsxs)("div",{className:"question-top",children:[Object(j.jsxs)("div",{className:"question-top-val",children:[" ",i+1," : ",s.question,Object(j.jsx)(O,{value:s.question})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{onClick:function(){t.editToggle()},className:"question-edit",children:[" ","edit"," "]}),Object(j.jsxs)("button",{className:"question-delete",onClick:function(){var t;return a(i,null===(t=e)||void 0===t?void 0:t.value)},children:[" ","delete"," "]})]})]}),Object(j.jsx)("h1",{className:"answer-list-title",children:" Answers "}),Object(j.jsx)(g,{i:i,children:s.answers}),Object(j.jsxs)("button",{className:"answer-add",onClick:function(){return r(i)},children:[" ","add answer"," "]})]})}}]),n}(u.a.Component)),w=Object(d.b)(null,(function(e){return{updateQuestionClickHandler:function(t,n){e(function(e,t){return{type:"updateQuestion",i:e,value:t}}(t,n))},deleteQuestionClickHandler:function(t){e(function(e){return{type:"deleteQuestion",i:e}}(t))},AddAnswerClickHandler:function(t){e(function(e){return{type:"addAnswer",i:e}}(t))}}}))(k),N=(n(44),function(e){var t=e.questions;return Object(j.jsx)("ul",{className:"list",children:t.map((function(e,t){return Object(j.jsx)(w,{i:t,children:e},t)}))})}),y=Object(d.b)((function(e){return{questions:e.quiz.questions}}))(N),q=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).editToggle=function(){e.setState({edit:!e.state.edit})},e.state={edit:!1},e}return Object(a.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,i=n.children,s=n.i,c=n.updateEmailClickHandler,a=n.deleteEmailClickHandler;return this.state.edit?Object(j.jsxs)("li",{className:"answer",children:[Object(j.jsx)("textarea",{className:"answer-input",ref:function(t){return e=t},defaultValue:i}),Object(j.jsxs)("button",{onClick:function(){c(s,e.value),t.editToggle()},className:"answer-save",children:[" ","save"]})]}):Object(j.jsxs)("li",{className:"answer",children:[Object(j.jsxs)("div",{className:"answer-top",children:[" ",s+1," : ",i,Object(j.jsx)(O,{value:i})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("button",{onClick:function(){t.editToggle()},className:"answer-edit",children:[" ","edit"," "]}),Object(j.jsxs)("button",{className:"answer-delete",onClick:function(){return a(s)},children:[" ","delete"," "]})]})]})}}]),n}(u.a.Component),C=Object(d.b)(null,(function(e){return{updateEmailClickHandler:function(t,n){e(function(e,t){return{type:"updateEmail",i:e,value:t}}(t,n))},deleteEmailClickHandler:function(t){e(function(e){return{type:"deleteEmail",i:e}}(t))}}}))(q),z=(n(45),function(e){var t=e.emails;return Object(j.jsx)("ul",{className:"email-list",children:t.map((function(e,t){return Object(j.jsx)(C,{i:t,children:e},t)}))})}),A=Object(d.b)((function(e){return{emails:e.quiz.emails}}))(z),Q=function(e){var t=e.addEmailClickHandler;return Object(j.jsxs)("button",{className:"add-question",onClick:t,children:[" ","add email"," "]})},S=Object(d.b)(null,(function(e){return{addEmailClickHandler:function(){e({type:"addEmail"})}}}))(Q),T=(n(46),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(c.a)(this,n),i=t.call(this,e),e.prepare(),i}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.quiz,t=this.props.saveQuizClickHandler;return Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"h1-questions",children:" Questions "}),Object(j.jsx)(y,{}),Object(j.jsx)(h,{})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"h1-questions",children:" Emails"}),Object(j.jsx)(A,{}),Object(j.jsx)(S,{})]}),Object(j.jsxs)("button",{className:"save-quiz",onClick:function(){return t(e)},children:[" ","Save"," "]})]})}}]),n}(u.a.Component)),H=n(16),_=n(15),E=n(3),I=Object(H.b)({name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.value;return"updateName"===n?i:"clearName"===n?"":e},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{question:"",answers:[""],correctAnswer:0}],t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.value,s=t.i,c=t.j;return"clearQuestions"===n?[{question:"",answers:[""],correctAnswer:0}]:"addQuestion"===n?[].concat(Object(E.a)(e),[{question:"",answers:[""],correctAnswer:0}]):"updateQuestion"===n?[].concat(Object(E.a)(e.slice(void 0,s)),[Object(_.a)(Object(_.a)({},e[s]),{},{question:i})],Object(E.a)(e.slice(s+1))):"deleteQuestion"===n?1===e.length?[{question:"",answers:[""],correctAnswer:0}]:[].concat(Object(E.a)(e.slice(void 0,s)),Object(E.a)(e.slice(s+1))):"addAnswer"===n?[].concat(Object(E.a)(e.slice(void 0,s)),[Object(_.a)(Object(_.a)({},e[s]),{},{answers:[].concat(Object(E.a)(e[s].answers),[""])})],Object(E.a)(e.slice(s+1))):"updateAnswer"===n?[].concat(Object(E.a)(e.slice(void 0,s)),[Object(_.a)(Object(_.a)({},e[s]),{},{answers:[].concat(Object(E.a)(e[s].answers.slice(void 0,c)),[i],Object(E.a)(e[s].answers.slice(c+1)))})],Object(E.a)(e.slice(s+1))):"deleteAnswer"===n?[].concat(Object(E.a)(e.slice(void 0,s)),[Object(_.a)(Object(_.a)({},e[s]),{},{answers:e[s].answers.length>1?[].concat(Object(E.a)(e[s].answers.slice(void 0,c)),Object(E.a)(e[s].answers.slice(c+1))):[""],correctAnswer:e[s].correctAnswer<c?e[s].correctAnswer:e[s].correctAnswer===c?0:e[s].correctAnswer-1})],Object(E.a)(e.slice(s+1))):"correctAnswer"===n?[].concat(Object(E.a)(e.slice(void 0,s)),[Object(_.a)(Object(_.a)({},e[s]),{},{correctAnswer:c})],Object(E.a)(e.slice(s+1))):"fillQuestions"===n?t.questions:e},emails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.i,s=t.value;return"addEmail"===n?[].concat(Object(E.a)(e),[""]):"updateEmail"===n?[].concat(Object(E.a)(e.slice(void 0,i)),[s],Object(E.a)(e.slice(i+1))):"deleteEmail"===n?[].concat(Object(E.a)(e.slice(void 0,i)),Object(E.a)(e.slice(i+1))):"clearEmails"===n?[]:"fillEmails"===n?t.emails:e}}),L=Object(d.b)((function(e){return console.log(e),{quiz:e.quiz}}),(function(e,t){return{prepare:function(){t._id||(e({type:"clearQuestions"}),e({type:"clearName"}),e({type:"clearEmails"}))},saveQuizClickHandler:function(e){if(function(e){if(!e.name)return!1;if(0===e.questions.length)return!1;var t=e.questions.every((function(e){return 0!==e.question.length&&e.answers.every((function(e){return 0!==e.length}))}));return!!t&&e.emails.every((function(e){return!!e}))}(e)){if(t._id){e._id=t._id;return fetch("https://make-your-quiz.herokuapp.com/updateQuiz",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.token},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){return console.log(e)})),void(window.location.href="/myQuizzes")}fetch("https://make-your-quiz.herokuapp.com/addQuiz",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.token},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){return console.log(e)})),window.location.href="/myQuizzes"}else console.log("in valid quiz")}}}))(T),B=n(25),G=n(14),J=n(5),D=(n(47),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;Object(c.a)(this,n),(i=t.call(this,e)).state={data:void 0},console.log(e._id);var s="https://make-your-quiz.herokuapp.com/getQuiz/"+e._id;return fetch(s,{method:"GET",headers:{Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(t){e.prepare(t),i.setState({data:!0})})),i}return Object(a.a)(n,[{key:"render",value:function(){return this.state.data?Object(j.jsx)("div",{children:Object(j.jsx)(L,{_id:this.props._id})}):Object(j.jsx)("div",{className:"loading",children:Object(j.jsxs)("div",{class:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}}]),n}(u.a.Component)),P=Object(d.b)(null,(function(e){return{prepare:function(t){e({type:"fillQuestions",questions:t.questions}),e({type:"fillEmails",emails:t.emails}),e(v(t.name))}}}))(D),V=(n(30),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n),(e=t.call(this)).state={data:void 0};return fetch("https://make-your-quiz.herokuapp.com/getQuizzes",{method:"GET",headers:{Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(t){e.setState({data:t})})),e}return Object(a.a)(n,[{key:"render",value:function(){return this.state.data?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("ul",{className:"side",children:this.state.data.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(G.b,{className:"side-item ",to:"/myQuizzes/"+e._id,children:e.name})},e._id)}))}),Object(j.jsx)(J.c,{children:this.state.data.map((function(e){return Object(j.jsx)(J.a,{path:"/myQuizzes/"+e._id,children:Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(P,{_id:e._id})})},e._id)}))})]}):Object(j.jsx)("div",{className:"loading",children:Object(j.jsxs)("div",{class:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}}]),n}(u.a.Component)),M=(n(49),function(e){var t=e.children,n=e.i,i=e.j,s=e.isChecked,c=e.updateTestClickHandler;return Object(j.jsxs)("li",{className:"test-answer",children:[Object(j.jsxs)("div",{className:"test-answer-item",children:[" ",t," "]}),Object(j.jsx)("input",{className:"test-ckeck",type:"checkbox",readOnly:!0,checked:s,onClick:function(){return c(n,i)}})]})}),Y=Object(d.b)((function(e,t){return console.log(e.test),{isChecked:e.test[t.i]===t.j}}),(function(e){return{updateTestClickHandler:function(t,n){e(function(e,t){return{type:"updateTest",i:e,j:t}}(t,n))}}}))(M),F=(n(50),function(e){var t=e.children,n=e.i;return Object(j.jsx)("ul",{className:"test-answer-list",children:t.map((function(e,t){return Object(j.jsx)(Y,{i:n,j:t,children:e},t)}))})}),K=(n(51),function(e){var t=e.children,n=e.i;return Object(j.jsxs)("li",{className:"test-question",children:[Object(j.jsx)("p",{className:"test-question-head",children:t.question}),Object(j.jsx)(F,{i:n,children:t.answers})]})}),R=(n(52),function(e){var t=e.children;return Object(j.jsx)("ul",{className:"test-question-list",children:t.map((function(e,t){return Object(j.jsx)(K,{i:t,children:e},t)}))})}),U=(n(53),n.p+"static/media/loading.0cbad847.png"),W=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;Object(c.a)(this,n),(i=t.call(this,e)).getDegree=function(){i.setState({degree:Object(j.jsxs)("div",{className:"load-img",children:[" ",Object(j.jsx)("img",{src:U,alt:"....loading"})," "]})});var e="https://make-your-quiz.herokuapp.com/getDegree/"+i.props._id;fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.token},body:JSON.stringify(i.props.answers)}).then((function(e){return e.json()})).then((function(e){console.log(e),i.setState({degree:e.degree+" %"})}))},i.state={data:void 0,degree:0};var s="https://make-your-quiz.herokuapp.com/tests/"+e._id;return fetch(s,{method:"GET",headers:{Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(t){e.prepare(t.questions.length),i.setState({data:t})})),i}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.data;return e?Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"test-head",children:[Object(j.jsxs)("h1",{className:"test-head-item",children:[" Quiz name : ",e.name]}),Object(j.jsxs)("div",{className:"test-head-item load-img",children:["Your Degree is : ",this.state.degree]})]}),Object(j.jsx)(R,{children:e.questions}),Object(j.jsxs)("button",{className:"get-degree",onClick:this.getDegree,children:[" ","Get degree"," "]})]}):Object(j.jsx)("div",{className:"loading",children:Object(j.jsxs)("div",{class:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}}]),n}(u.a.Component),X=Object(d.b)((function(e){return{answers:e.test}}),(function(e){return{prepare:function(t){e(function(e){return{type:"fillTest",cnt:e}}(t))}}}))(W),Z=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;Object(c.a)(this,n),(i=t.call(this,e)).state={data:void 0};return fetch("https://make-your-quiz.herokuapp.com/tests",{method:"GET",headers:{Authorization:"Bearer "+sessionStorage.token}}).then((function(e){return e.json()})).then((function(e){i.setState({data:e})})),i}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.data;return e?Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("ul",{className:"side",children:e.map((function(e){return Object(j.jsxs)("li",{children:[" ",Object(j.jsx)(G.b,{className:"side-item",to:"/tests/"+e._id,children:e.name})," "]},e._id)}))}),Object(j.jsx)(J.c,{children:e.map((function(e){return Object(j.jsx)(J.a,{path:"/tests/"+e._id,children:Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(X,{_id:e._id})})},e._id)}))})]}):Object(j.jsx)("div",{className:"loading",children:Object(j.jsxs)("div",{class:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})}}]),n}(u.a.Component),$=(n(54),n.p+"static/media/logo2.187a8c88.jpg"),ee=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).success=function(t){sessionStorage.token=t.tokenId,sessionStorage.name=t.profileObj.givenName,e.setState({isLogedIn:!0})},e.failure=function(){sessionStorage.token="",e.setState({isLogedIn:!1})},e.active=function(t){sessionStorage.active=t,e.setState({active:t})},e.state={isLogedIn:!1,active:"http://localhost:3000/createQuiz"===window.location.href?1:"http://localhost:3000/myQuizzes"===window.location.href?2:"http://localhost:3000/tests"===window.location.href?3:0},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.active;return this.state.isLogedIn?Object(j.jsxs)("div",{children:[Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{children:Object(j.jsx)("img",{className:"nav-item logo",src:$,alt:"logo"})}),Object(j.jsx)("li",{children:Object(j.jsxs)(G.b,{className:"nav-item"+(0===t?" active":""),to:"/",onClick:function(){return e.active(0)},children:[" ","Home"," "]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(G.b,{className:"nav-item"+(1===t?" active":""),to:"/createQuiz",onClick:function(){return e.active(1)},children:[" ","Create Quiz"," "]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(G.b,{className:"nav-item"+(2===t?" active":""),to:"/myQuizzes",onClick:function(){return e.active(2)},children:[" ","My Quizzes"," "]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(G.b,{className:"nav-item"+(3===t?" active":""),to:"/tests",onClick:function(){return e.active(3)},children:[" ","My Tests"," "]})}),Object(j.jsx)("li",{children:Object(j.jsx)("span",{className:"user-icon nav-item",children:sessionStorage.name})}),Object(j.jsx)("li",{children:Object(j.jsx)(B.GoogleLogout,{className:"nav-item",clientId:"1082313788044-ru8kfvsc9j6okm8itc5al91l4qf9kond.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:this.failure})})]}),Object(j.jsxs)(J.c,{children:[Object(j.jsx)(J.a,{path:"/createQuiz",children:Object(j.jsx)(L,{})}),Object(j.jsx)(J.a,{path:"/myQuizzes",children:Object(j.jsx)(V,{})}),Object(j.jsx)(J.a,{path:"/tests",children:Object(j.jsx)(Z,{})}),Object(j.jsx)(J.a,{path:"/",children:Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("p",{children:"* you can with this app to create multiple choice quizzes, to do this click on create a quiz in the navbar."}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"* you can also add people by their emails that can try these quizzes and get results from them."}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"* if anyone adds you to his quiz you can try it, ``and you will find it in the tests in the navbar."}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:" Creator: ahmed samir "}),Object(j.jsx)("h2",{children:" Email: asamir2211997@gmail.com "})]})]})})]})]}):Object(j.jsx)("div",{className:"back",children:Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("p",{children:"long in with your google account"}),Object(j.jsx)(B.GoogleLogin,{clientId:"1082313788044-ru8kfvsc9j6okm8itc5al91l4qf9kond.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.success,cookiePolicy:"single_host_origin",isSignedIn:!0})]})})}}]),n}(u.a.Component),te=Object(H.b)({quiz:I,test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("updateTest"===t.type)return[].concat(Object(E.a)(e.slice(void 0,t.i)),[t.j],Object(E.a)(e.slice(t.i+1)));if("fillTest"===t.type){for(var n=[],i=t.cnt;i--;)n.push(-1);return n}return e}}),ne=Object(H.c)(te);s.a.render(Object(j.jsx)(G.a,{children:Object(j.jsx)(d.a,{store:ne,children:Object(j.jsx)(ee,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.cd3615a4.chunk.js.map