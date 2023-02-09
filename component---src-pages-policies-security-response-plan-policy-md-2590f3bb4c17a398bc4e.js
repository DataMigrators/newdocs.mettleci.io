"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9263],{3624:function(e,t,n){n.d(t,{Z:function(){return T}});var i=n(7294),a=n(8650),o=n.n(a),r=n(1597),s=n(4799),l=n(7275),c=n(5900),d=n.n(c),u=function(e){var t,n=e.title,a=e.theme,o=e.tabs,r=void 0===o?[]:o;return i.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===a,t))},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},m=function(e){var t=e.relativePagePath,n=e.repository,a=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,s=o.baseUrl,l=o.subDirectory,c=s+"/edit/"+o.branch+l+"/src/pages"+t;return s?i.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"bx--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=n(4703),h=n(1721),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,s=a.split("/").filter(Boolean).slice(-1)[0],l=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),l=n===s,c=new RegExp(s+"/?(#.*)?$"),u=a.replace(c,n);return i.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--aBB0K"]=l,t),"PageTabs-module--list-item--024o6")},i.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+u},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"bx--grid"},i.createElement("div",{className:"bx--row"},i.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(i.Component),f=y,b=n(7296),v=n(5387),g=n(3732),k=function(e){var t=e.date,n=new Date(t);return t?i.createElement(g.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(g.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},T=function(e){var t=e.pageContext,n=e.children,a=e.location,c=e.Title,d=t.frontmatter,h=void 0===d?{}:d,y=t.relativePagePath,g=t.titleType,T=h.tabs,P=h.title,x=h.theme,w=h.description,E=h.keywords,S=h.date,R=(0,v.Z)().interiorTheme,N=(0,r.useStaticQuery)("2456312558").site.pathPrefix,L=N?a.pathname.replace(N,""):a.pathname,D=T?L.split("/").filter(Boolean).slice(-1)[0]||o()(T[0],{lower:!0}):"",A=x||R;return i.createElement(l.Z,{tabs:T,homepage:!1,theme:A,pageTitle:P,pageDescription:w,pageKeywords:E,titleType:g},i.createElement(u,{title:c?i.createElement(c,null):P,label:"label",tabs:T,theme:A}),T&&i.createElement(f,{title:P,slug:L,tabs:T,currentTab:D}),i.createElement(b.Z,{padded:!0},n,i.createElement(m,{relativePagePath:y}),i.createElement(k,{date:S})),i.createElement(p.Z,{pageContext:t,location:a,slug:L,tabs:T,currentTab:D}),i.createElement(s.Z,null))}},9686:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return h}});var i=n(3366),a=(n(7294),n(4983)),o=n(3624),r=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},c=l("PageDescription"),d=l("AnchorLinks"),u=l("AnchorLink"),m={_frontmatter:s},p=o.Z;function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)(p,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(c,{mdxType:"PageDescription"},(0,a.kt)("p",null,"This page describes Data Migrators’ policy on its security response plan.")),(0,a.kt)(d,{mdxType:"AnchorLinks"},(0,a.kt)(u,{mdxType:"AnchorLink"},"Overview"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Purpose"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Scope"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Policy"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Policy Compliance"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Exceptions"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Non-compliance"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Related Documents"),(0,a.kt)(u,{mdxType:"AnchorLink"},"Definitions and Terms")),(0,a.kt)("h2",null,"Overview"),(0,a.kt)("p",null,"A Security Response Plan (SRP) provides the impetus for security and\nbusiness teams to integrate their efforts from the perspective of\nawareness and communication, as well as coordinated response in times of\ncrisis (security vulnerability identified or exploited). Specifically,\nan SRP defines a product description, contact information, escalation\npaths, expected service level agreements (SLA), severity and impact\nclassification, and mitigation/remediation timelines. By requiring\nbusiness units to incorporate an SRP as part of their business\ncontinuity operations and as new products or services are developed and\nprepared for release to consumers, ensures that when an incident occurs,\nswift mitigation and remediation ensues."),(0,a.kt)("h2",null,"Purpose"),(0,a.kt)("p",null,"The purpose of this policy is to establish the requirement that all\nbusiness units supported by the Infosec team develop and maintain a\nsecurity response plan. This ensures that security incident management\nteam has all the necessary information to formulate a successful\nresponse should a specific security incident occur."),(0,a.kt)("h2",null,"Scope"),(0,a.kt)("p",null,"This policy applies any established and defined business unity or entity\nwithin the Data Migrators."),(0,a.kt)("h2",null,"Policy"),(0,a.kt)("p",null,"The development, implementation, and execution of a Security Response\nPlan (SRP) are the primary responsibility of the specific business unit\nfor whom the SRP is being developed in cooperation with the Infosec\nTeam. Business units are expected to properly facilitate the SRP for\napplicable to the service or products they are held accountable. The\nbusiness unit security coordinator or champion is further expected to\nwork with the Data Migrators Security Team in the\ndevelopment and maintenance of a Security Response Plan."),(0,a.kt)("h3",null,"Service or Product Description"),(0,a.kt)("p",null,"The product description in an SRP must clearly define the service or\napplication to be deployed with additional attention to data flows,\nlogical diagrams, architecture considered highly useful."),(0,a.kt)("h3",null,"Contact Information"),(0,a.kt)("p",null,"The SRP must include contact information for dedicated team members to\nbe available during non-business hours should an incident occur and\nescalation be required. This may be a 24/7 requirement depending on the\ndefined business value of the service or product, coupled with the\nimpact to customer. The SRP document must include all phone numbers and\nemail addresses for the dedicated team member(s)."),(0,a.kt)("h3",null,"Triage"),(0,a.kt)("p",null,"The SRP must define triage steps to be coordinated with the security\nincident management team in a cooperative manner with the intended goal\nof swift security vulnerability mitigation. This step typically includes\nvalidating the reported vulnerability or compromise."),(0,a.kt)("h3",null,"Identified Mitigations and Testing"),(0,a.kt)("p",null,"The SRP must include a defined process for identifying and testing\nmitigations prior to deployment. These details should include both\nshort-term mitigations as well as the remediation process."),(0,a.kt)("h3",null,"Mitigation and Remediation Timelines"),(0,a.kt)("p",null,"The SRP must include levels of response to identified vulnerabilities\nthat define the expected timelines for repair based on severity and\nimpact to consumer, brand, and company. These response guidelines should\nbe carefully mapped to level of severity determined for the reported\nvulnerability."),(0,a.kt)("h2",null,"Policy Compliance"),(0,a.kt)("h3",null,"Compliance Measurement"),(0,a.kt)("p",null,"Each business unit must be able to demonstrate they have a written SRP\nin place, and that it is under version control and is available via the\nweb. The policy should be reviewed annually."),(0,a.kt)("h2",null,"Exceptions"),(0,a.kt)("p",null,"Any exception to this policy must be approved by the Infosec Team in\nadvance and have a written record."),(0,a.kt)("h2",null,"Non-Compliance"),(0,a.kt)("p",null,"Any business unit found to have violated (no SRP developed prior to\nservice or product deployment) this policy may be subject to delays in\nservice or product release until such a time as the SRP is developed and\napproved. Responsible parties may be subject to disciplinary action, up\nto and including termination of employment, should a security incident\noccur in the absence of an SRP"),(0,a.kt)("h2",null,"Related Documents"),(0,a.kt)("p",null,"None."),(0,a.kt)("h2",null,"Definitions and Terms"),(0,a.kt)("p",null,"None."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-policies-security-response-plan-policy-md-2590f3bb4c17a398bc4e.js.map