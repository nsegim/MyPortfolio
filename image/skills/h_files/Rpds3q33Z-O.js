;/*FB_PKG_DELIM*/

__d("PolarisPostDeleteContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={onDeleted:null};c=a.createContext(b);g["default"]=c}),98);
__d("PolarisPostDeleteContextProvider.react",["PolarisPostDeleteContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useMemo;var j=b.c;function a(a){var b=j(5),d=a.children;a=a.onDeleted;var e;b[0]!==a?(e={onDeleted:a},b[0]=a,b[1]=e):e=b[1];a=e;e=a;b[2]!==e||b[3]!==d?(a=i.jsx(c("PolarisPostDeleteContext").Provider,{value:e,children:d}),b[2]=e,b[3]=d,b[4]=a):a=b[4];return a}g["default"]=a}),98);
__d("usePolarisRemoveNodeFromConnection",["CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.c;function a(){var a=i(2),b=d("CometRelay").useRelayEnvironment(),c;a[0]!==b?(c=function(a,c){d("CometRelay").commitLocalUpdate(b,function(b){b=b.get(a);if(b==null)return;b.getType();d("CometRelay").ConnectionHandler.deleteNode(b,c)})},a[0]=b,a[1]=c):c=a[1];return c}g["default"]=a}),98);