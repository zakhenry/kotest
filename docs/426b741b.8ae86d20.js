(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(149)),i={id:"testfunctions",title:"Property Test Functions",slug:"property-test-functions.html",sidebar_label:"Test Functions"},l={unversionedId:"proptest/testfunctions",id:"proptest/testfunctions",isDocsHomePage:!1,title:"Property Test Functions",description:"There are two variants of functions that are used to execute a property test in Kotest: forAll and checkAll.",source:"@site/docs/proptest/test_functions.md",slug:"/proptest/property-test-functions.html",permalink:"/docs/proptest/property-test-functions.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/test_functions.md",version:"current",sidebar_label:"Test Functions",sidebar:"proptest",previous:{title:"Property-based Testing",permalink:"/docs/proptest/property-based-testing.html"},next:{title:"Generators",permalink:"/docs/proptest/property-test-generators.html"}},s=[{value:"For All",id:"for-all",children:[]},{value:"Check All",id:"check-all",children:[]},{value:"Iterations",id:"iterations",children:[]},{value:"Specifying Generators",id:"specifying-generators",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are two variants of functions that are used to execute a property test in Kotest: ",Object(o.b)("inlineCode",{parentName:"p"},"forAll")," and ",Object(o.b)("inlineCode",{parentName:"p"},"checkAll"),"."),Object(o.b)("h3",{id:"for-all"},"For All"),Object(o.b)("p",null,"The first, ",Object(o.b)("inlineCode",{parentName:"p"},"forAll"),", accepts an n-arity function ",Object(o.b)("inlineCode",{parentName:"p"},"(a, ..., n) -> Boolean")," that tests the property.\nThe test will pass if, for all input values, the function returns true."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class PropertyExample: StringSpec({\n   "String size" {\n      forAll<String, String> { a, b ->\n         (a + b).length == a.length + b.length\n      }\n   }\n})\n')),Object(o.b)("p",null,"Notice that this functions accepts type parameters for the argument types, with arity up to 14.\nKotest uses these type parameters to locate a ",Object(o.b)("em",{parentName:"p"},"generator")," which provides (generates) random values of a suitable type."),Object(o.b)("p",null,"For example, ",Object(o.b)("inlineCode",{parentName:"p"},"forAll<String, Int, Boolean> { a, b, c -> }")," is a 3-arity property test where\nargument ",Object(o.b)("inlineCode",{parentName:"p"},"a")," is a random String, argument ",Object(o.b)("inlineCode",{parentName:"p"},"b")," is a random int, and argument ",Object(o.b)("inlineCode",{parentName:"p"},"c")," is a random boolean."),Object(o.b)("h3",{id:"check-all"},"Check All"),Object(o.b)("p",null,"The second, ",Object(o.b)("inlineCode",{parentName:"p"},"checkAll"),", accepts an n-arity function ",Object(o.b)("inlineCode",{parentName:"p"},"(a, ..., n) -> Unit")," in which you can simply execute assertions against the inputs.\nThis approach will consider a test valid if no exceptions are thrown.\nHere is the same example again written in the equivalent way using checkAll."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class PropertyExample: StringSpec({\n   "String size" {\n      checkAll<String, String> { a, b ->\n         (a + b).length shouldHaveLength a.length + b.length\n      }\n   }\n})\n')),Object(o.b)("p",null,"The second approach is more general purpose than returning a boolean, but the first approach is from the original\nhaskell libraries that inspired this library."),Object(o.b)("h3",{id:"iterations"},"Iterations"),Object(o.b)("p",null,"By default, Kotest will run the property test 1000 times. We can easily customize this by specifying the iteration count\nwhen invoking the test method."),Object(o.b)("p",null,"Let's say we want to run a test 10,000 times."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class PropertyExample: StringSpec({\n   "a many iterations test" {\n      checkAll<Double, Double>(10_000) { a, b ->\n         // test here\n      }\n   }\n})\n')),Object(o.b)("h3",{id:"specifying-generators"},"Specifying Generators"),Object(o.b)("p",null,"You saw in the previous examples that Kotest would provide values automatically based on the type parameter(s).\nIt does this by locating a ",Object(o.b)("em",{parentName:"p"},"generator")," that generates values for the required type."),Object(o.b)("p",null,"For example, the automatically provided ",Object(o.b)("em",{parentName:"p"},"Integer")," generator generates random ints from all possible values -\nnegative, positive, infinities, zero and so on."),Object(o.b)("p",null,"This is fine for basic tests but often we want more control over the sample space.\nFor example, we may want to test a function for numbers in a certain range only."),Object(o.b)("p",null,"Then you would need to specify the generator(s) manually."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class PropertyExample: StringSpec({\n   "is allowed to drink in Chicago" {\n      forAll(Arb.int(21..150)) { a ->\n         isDrinkingAge(a) // assuming some function that calculates if we\'re old enough to drink\n      }\n   }\n   "is allowed to drink in London" {\n      forAll(Arb.int(18..150)) { a ->\n         isDrinkingAge(a) // assuming some function that calculates if we\'re old enough to drink\n      }\n   }\n})\n')),Object(o.b)("p",null,"You can see we created two tests and in each test passed a generator into the ",Object(o.b)("inlineCode",{parentName:"p"},"forAll")," function with a suitable int range."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/proptest/property-test-generators.html"}),"here")," for a list of the built in generators."))}p.isMDXComponent=!0}}]);