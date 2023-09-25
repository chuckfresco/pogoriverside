(this["webpackJsonpchuck-fresco-app"]=this["webpackJsonpchuck-fresco-app"]||[]).push([[24],{719:function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return p}));var n=t(1),r=t(0),s=(t(2),t(698)),c=t(6),l=t(155),a=t(5),i=[{name:"fontIconClass",type:"string",default:"",description:"The classes of the font icon"},{name:"className",type:"string",default:"",description:"External classes"},{name:"color",type:"enum",default:"",description:"Color of the icon. One of: colors.red, colors.pink, colors.purple, colors.deepPurple, colors.indigo, colors.blue, colors.lightBlue, colors.cyan, colors.teal, colors.green, colors.lightGreen, colors.lime, colors.yellow, colors.amber, colors.orange, colors.deepOrange, colors.brown, colors.grey, colors.blueGrey"},{name:"iconProps",type:"object",default:"",description:"Additional properties to pass to the Icon component"},{name:"shape",type:"enum",default:"",description:"The shape of the alternate icon. One of: circle, square"},{name:"size",type:"enum",default:"medium",description:"Sizes of the icon. One of: extraSmall, small, medium, large"}],p=function(e){var o=Object.assign({},e);return Object(r.jsxs)("div",Object(n.a)(Object(n.a)({},o),{},{children:[Object(r.jsx)(l.e,{title:"Description",gutterBottom:!0,children:Object(r.jsx)(l.b,{title:"IconAlternate",path:"src/components/molecules/IconAlternate/IconAlternate.js",description:"Component to display the alternate icon"})}),Object(r.jsx)(l.e,{title:"Import",gutterBottom:!0,children:Object(r.jsx)(l.a,{code:"\nimport { IconAlternate } from 'components/molecules';\n// or\nimport IconAlternate from 'components/molecules/IconAlternate';\n"})}),Object(r.jsx)(l.e,{title:"Props & Methods",gutterBottom:!0,children:Object(r.jsx)(l.d,{dataProperties:i})}),Object(r.jsx)(l.e,{title:"Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(r.jsxs)(s.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"600px",children:[Object(r.jsx)(a.c,{shape:"circle",size:"small",fontIconClass:"far fa-address-book",color:c.a.purple}),Object(r.jsx)(a.c,{fontIconClass:"fas fa-users",color:c.a.pink}),Object(r.jsx)(a.c,{fontIconClass:"fas fa-quote-right",size:"medium",color:c.a.blue}),Object(r.jsx)(a.c,{fontIconClass:"fas fa-phone-alt",size:"large",color:c.a.green})]})}),Object(r.jsx)(l.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { IconAlternate } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">\n      <Box display="flex" justifyContent="space-around" alignItems="center" minWidth="600px">\n        <IconAlternate shape="circle" size="small" fontIconClass="far fa-address-book" color={colors.purple} />\n        <IconAlternate fontIconClass="fas fa-users" color={colors.pink} />\n        <IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.blue} />\n        <IconAlternate fontIconClass="fas fa-phone-alt" size="large" color={colors.green} />\n      </Box>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);