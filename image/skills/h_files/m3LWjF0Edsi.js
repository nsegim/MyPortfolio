;/*FB_PKG_DELIM*/

__d("BotFeedbackKind",[],(function(a,b,c,d,e,f){a=Object.freeze({BOT_FEEDBACK_POSITIVE:0,BOT_FEEDBACK_NEGATIVE_GENERIC:1,BOT_FEEDBACK_NEGATIVE_HELPFUL:2,BOT_FEEDBACK_NEGATIVE_INTERESTING:3,BOT_FEEDBACK_NEGATIVE_ACCURATE:4,BOT_FEEDBACK_NEGATIVE_SAFE:5,BOT_FEEDBACK_NEGATIVE_OTHER:6,BOT_FEEDBACK_NEGATIVE_REFUSED:7,BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING:8,BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT:9,BOT_FEEDBACK_NEGATIVE_PERSONALIZED:10,BOT_FEEDBACK_NEGATIVE_CLARITY:11});f["default"]=a}),66);
__d("CometTimestampUtils",["fbt","formatDate"],(function(a,b,c,d,e,f,g,h){"use strict";var i=1e3*60*60*24,j=i*30;function k(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}function l(a,b){return h._("__JHASH__OsFN0XAyv2W__JHASH__",[h._param("date",a),h._param("time",b)])}function a(a,b){var d=c("formatDate")(b,"g:i A");if(k(b,a))return h._("__JHASH__I7gnNejSDJn__JHASH__",[h._param("time",d)]);var e=new Date(a.valueOf()-i);if(k(b,e))return h._("__JHASH__18g5xTeqQyg__JHASH__",[h._param("time",d)]);e=new Date(a.valueOf()+i);if(k(b,e))return h._("__JHASH__6hOHFFmfNGd__JHASH__",[h._param("time",d)]);e=c("formatDate")(b,"F j");a.getFullYear()!==b.getFullYear()&&(e=c("formatDate")(b,"F j, Y"));return Math.abs(a.valueOf()-b.valueOf())<j?l(e,d):e}function b(a){return l(c("formatDate")(a,"l, F j, Y"),c("formatDate")(a,"g:i A"))}g.getAbsoluteTimestampFbt=l;g.getTimestamp=a;g.getAbsoluteTimestamp=b}),226);
__d("PolarisNotesTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum")({MUTUAL_FOLLOWS:0,BESTIES:1,INTERNAL:2});c=b("$InternalEnum")({EMPTY:7});d=[a.MUTUAL_FOLLOWS,a.BESTIES,a.INTERNAL];e=[a.MUTUAL_FOLLOWS,a.BESTIES];b=b("$InternalEnum")({NEW_NOTE_CTA:"new_note_cta",REPLACE_EXISTING_SELF_NOTE_CTA:"replace_existing_self_note_cta"});f.NoteAudienceOptionValues=a;f.NoteStyle=c;f.NOTE_AUDIENCE_OPTIONS_INTERNAL=d;f.NOTE_AUDIENCE_OPTIONS=e;f.PolarisInboxTrayComposerEntrypoint=b}),66);
__d("hasNotesOnDirectDesktop",["PolarisConfig","PolarisUA"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("PolarisUA").isDesktop()&&d("PolarisConfig").isLoggedIn()}g["default"]=a}),98);
__d("IGDInboxTrayContextProvider",["PolarisNotesTypes","QPLUserFlow","emptyFunction","hasNotesOnDirectDesktop","qpl","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;f=e.createContext;e.useCallback;var j=e.useContext;e.useMemo;var k=e.useState,l=e.c;e={closeComposer:c("emptyFunction"),composerEntrypoint:d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA,isComposerActive:!1,openComposer:c("emptyFunction")};var m=f(e);function a(a){var b=l(8);a=a.children;var e=k(!1),f=e[0],g=e[1];e=k(d("PolarisNotesTypes").PolarisInboxTrayComposerEntrypoint.NEW_NOTE_CTA);var h=e[0],j=e[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=function(a){j(a),g(c("hasNotesOnDirectDesktop")()),c("QPLUserFlow").start(c("qpl")._(379203828,"2170"))},b[0]=e):e=b[0];e=e;var n;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(n=function(){g(!1)},b[1]=n):n=b[1];n=n;b[2]!==h||b[3]!==f?(n={closeComposer:n,composerEntrypoint:h,isComposerActive:f,openComposer:e},b[2]=h,b[3]=f,b[4]=n):n=b[4];e=n;h=e;b[5]!==h||b[6]!==a?(f=i.jsx(m.Provider,{value:h,children:a}),b[5]=h,b[6]=a,b[7]=f):f=b[7];return f}function b(){return j(m)}g.IGDInboxTrayContextProvider=a;g.usePolarisInboxTrayContext=b}),98);
__d("PolarisInboxTrayItemLayout.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useContext,l=e.c,m={base:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"x13a6bvl",position:"x1n2onr6",$$css:!0},large:{width:"x3smdqs",$$css:!0},medium:{width:"xrostsh",$$css:!0},mediumMobile:{width:"xrostsh",$$css:!0},small:{width:"x13oubkp",$$css:!0}},n=j.createContext();function a(){return k(n)}function b(a){var b=l(12),d=a.innerSlot,e=a.rootSlot;a=a.size;if(e==null)return d;var f=m[a||"small"],g;b[0]!==f?(g=(h||(h=c("stylex")))(m.base,f),b[0]=f,b[1]=g):g=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(f="x6s0dn4 x78zum5 xdt5ytf xh8yej3",b[2]=f):f=b[2];b[3]!==d?(f=j.jsx("div",{className:f,children:d}),b[3]=d,b[4]=f):f=b[4];b[5]!==g||b[6]!==e||b[7]!==f?(d=j.jsxs("div",{className:g,children:[e,f]}),b[5]=g,b[6]=e,b[7]=f,b[8]=d):d=b[8];b[9]!==a||b[10]!==d?(g=j.jsx(n.Provider,{value:a,children:d}),b[9]=a,b[10]=d,b[11]=g):g=b[11];return g}g.usePolarisInboxTrayItemLayoutSize=a;g.PolarisInboxTrayItemLayout=b}),98);
__d("PolarisInboxTrayItemGlimmer.react",["IGDSGlimmer.react","PolarisInboxTrayItemLayout.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={glimmer:{backgroundColor:"x1lynahi",$$css:!0}},l={large:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x1ymw6g",width:"xq1dxzn",$$css:!0},small:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"x14z7g9a",width:"x7mnju",$$css:!0}},m={large:{height:"xlrawln",marginTop:"x1gslohp",width:"xq1dxzn",$$css:!0},small:{height:"xlup9mm",marginTop:"x1gslohp",width:"x1exxlbk",$$css:!0}},n={large:{borderTopStartRadius:"x107yiy2",borderTopEndRadius:"xv8uw2v",borderBottomEndRadius:"x1tfwpuw",borderBottomStartRadius:"x2g32xy",height:"xnxb3zj",marginBottom:"xbvv5uc",width:"x1so1ns2",$$css:!0},small:{borderTopStartRadius:"xhw592a",borderTopEndRadius:"xwihvcr",borderBottomEndRadius:"x7wuybg",borderBottomStartRadius:"xb9tvrk",height:"x5kalc8",marginBottom:"xh3wvx0",width:"x13oubkp",$$css:!0}};function a(a){var b=i(12);a=a.size;a=a===void 0?"small":a;var e=l[a],f;b[0]!==e?(f=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.glimmer,e]}),b[0]=e,b[1]=f):f=b[1];e=m[a];var g;b[2]!==e?(g=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.glimmer,e]}),b[2]=e,b[3]=g):g=b[3];b[4]!==f||b[5]!==g?(e=j.jsxs(j.Fragment,{children:[f,g]}),b[4]=f,b[5]=g,b[6]=e):e=b[6];f=n[a];b[7]!==f?(g=j.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:[k.glimmer,f]}),b[7]=f,b[8]=g):g=b[8];b[9]!==e||b[10]!==g?(a=j.jsx(d("PolarisInboxTrayItemLayout.react").PolarisInboxTrayItemLayout,{innerSlot:e,rootSlot:g}),b[9]=e,b[10]=g,b[11]=a):a=b[11];return a}g["default"]=a}),98);