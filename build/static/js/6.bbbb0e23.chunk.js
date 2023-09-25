(this["webpackJsonpchuck-fresco-app"]=this["webpackJsonpchuck-fresco-app"]||[]).push([[6],{727:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var o=t(1),i=t(0),r=(t(2),t(698)),a=t(665),c=t(6),s=t(155),l=t(4),d=t(5),m=[{name:"icon",type:"node",default:"",description:"Icon to show inside the category card"},{name:"title",type:"string",default:"",description:"Category title to show inside the category card"},{name:"align",type:"enum",default:"",description:"The content alignment. One of: left, right, center"},{name:"className",type:"string",default:"",description:"External classes"}],p=function(e){var n=Object.assign({},e);return Object(i.jsxs)("div",Object(o.a)(Object(o.a)({},n),{},{children:[Object(i.jsx)(s.e,{title:"Description",gutterBottom:!0,children:Object(i.jsx)(s.b,{title:"CardCategory",path:"src/components/organisms/CardCategory/CardCategory.js",description:"Component to display the category card"})}),Object(i.jsx)(s.e,{title:"Import",gutterBottom:!0,children:Object(i.jsx)(s.a,{code:"\nimport { CardCategory } from 'components/organisms';\n// or\nimport CardCategory from 'components/organisms/CardCategory';\n"})}),Object(i.jsx)(s.e,{title:"Props & Methods",gutterBottom:!0,children:Object(i.jsx)(s.d,{dataProperties:m})}),Object(i.jsx)(s.e,{title:"Basic Example",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(i.jsx)(r.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(i.jsxs)(a.a,{container:!0,spacing:2,children:[Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Web Design",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-pen-nib",size:"medium",color:c.a.pink})})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Business Analytics",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-book-open",size:"medium",color:c.a.purple})})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Photography",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-camera-retro",size:"medium",color:c.a.blue})})})]})})}),Object(i.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid } from \'@material-ui/core\';\nimport { CardCategory } from \'components/organisms\';\nimport { IconAlternate } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Web Design"\n            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Business Analytics"\n            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Photography"\n            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(i.jsx)(s.e,{title:"Outlined",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(i.jsx)(r.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(i.jsxs)(a.a,{container:!0,spacing:2,children:[Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Web Design",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-pen-nib",size:"medium",color:c.a.pink}),variant:"outlined"})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Business Analytics",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-book-open",size:"medium",color:c.a.purple}),variant:"outlined"})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Photography",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-camera-retro",size:"medium",color:c.a.blue}),variant:"outlined"})})]})})}),Object(i.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid } from \'@material-ui/core\';\nimport { CardCategory } from \'components/organisms\';\nimport { IconAlternate } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Web Design"\n            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Business Analytics"\n            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Photography"\n            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}\n            variant="outlined"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(i.jsx)(s.e,{title:"Custom Shadow and LiftUp Effect",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(i.jsx)(r.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(i.jsxs)(a.a,{container:!0,spacing:2,children:[Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Web Design",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-pen-nib",size:"medium",color:c.a.pink}),withShadow:!0,liftUp:!0})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Business Analytics",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-book-open",size:"medium",color:c.a.purple}),withShadow:!0,liftUp:!0})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Photography",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-camera-retro",size:"medium",color:c.a.blue}),withShadow:!0,liftUp:!0})})]})})}),Object(i.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid } from \'@material-ui/core\';\nimport { CardCategory } from \'components/organisms\';\nimport { IconAlternate } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Web Design"\n            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Business Analytics"\n            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Photography"\n            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}\n            withShadow\n            liftUp\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(i.jsx)(s.e,{title:"Left Aligned",gutterBottom:!0,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(i.jsx)(r.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"700px",children:Object(i.jsxs)(a.a,{container:!0,spacing:2,children:[Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Web Design",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-pen-nib",size:"medium",color:c.a.pink}),withShadow:!0,liftUp:!0,align:"left"})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Business Analytics",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-book-open",size:"medium",color:c.a.purple}),withShadow:!0,liftUp:!0,align:"left"})}),Object(i.jsx)(a.a,{item:!0,xs:4,children:Object(i.jsx)(l.c,{title:"Photography",icon:Object(i.jsx)(d.c,{fontIconClass:"fas fa-camera-retro",size:"medium",color:c.a.blue}),withShadow:!0,liftUp:!0,align:"left"})})]})})}),Object(i.jsx)(s.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid } from \'@material-ui/core\';\nimport { CardCategory } from \'components/organisms\';\nimport { IconAlternate } from \'components/molecules\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Web Design"\n            icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}\n            withShadow\n            liftUp\n            align="left"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Business Analytics"\n            icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}\n            withShadow\n            liftUp\n            align="left"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardCategory\n            title="Photography"\n            icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}\n            withShadow\n            liftUp\n            align="left"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);