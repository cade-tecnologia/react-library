(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{282:function(module,exports,__webpack_require__){__webpack_require__(283),__webpack_require__(433),module.exports=__webpack_require__(434)},349:function(module,exports){},434:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(281);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(616)],module)}.call(this,__webpack_require__(435)(module))},616:function(module,exports,__webpack_require__){var map={"./button/button.story.tsx":628};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=616},628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Green",(function(){return button_story_Green})),__webpack_require__.d(__webpack_exports__,"Red",(function(){return button_story_Red}));var react=__webpack_require__(42),react_default=__webpack_require__.n(react),dist=__webpack_require__(70);function Button(_ref){var color=_ref.color,children=_ref.children;return react_default.a.createElement("button",{type:"button",style:{color:color}},children)}__webpack_require__(280).withSource;var addSourceDecorator=__webpack_require__(280).addSource,__SOURCE_PREFIX__="/home/runner/work/react-library/react-library/src/stories/button",__STORY__="import React, { ReactElement } from 'react';\nimport { withKnobs, text } from \"@storybook/addon-knobs\";\n\nimport { Button } from '../../components';\n\nexport default {\n  component: Button,\n  title: 'Button',\n  decorators: [withKnobs],\n  excludeStories: /.*Data$/,\n};\n\nexport function Green(): ReactElement {\n  const color = text('color', 'green');\n  const conteudo = text('conteudo', 'Verde');\n\n  return <Button color={color}>{conteudo}</Button>;\n}\n\nexport function Red(): ReactElement {\n  const color = text('color', 'red');\n  const conteudo = text('conteudo', 'Vermelho');\n\n  return <Button color={color}>{conteudo}</Button>;\n}\n",__ADDS_MAP__={"button--green":{startLoc:{col:7,line:13},endLoc:{col:1,line:18},startBody:{col:7,line:13},endBody:{col:1,line:18}},"button--red":{startLoc:{col:7,line:20},endLoc:{col:1,line:25},startBody:{col:7,line:20},endBody:{col:1,line:25}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},button_story_Green=(__webpack_exports__.default={parameters:{storySource:{source:"import React, { ReactElement } from 'react';\nimport { withKnobs, text } from \"@storybook/addon-knobs\";\n\nimport { Button } from '../../components';\n\nexport default {\n  component: Button,\n  title: 'Button',\n  decorators: [withKnobs],\n  excludeStories: /.*Data$/,\n};\n\nexport function Green(): ReactElement {\n  const color = text('color', 'green');\n  const conteudo = text('conteudo', 'Verde');\n\n  return <Button color={color}>{conteudo}</Button>;\n}\n\nexport function Red(): ReactElement {\n  const color = text('color', 'red');\n  const conteudo = text('conteudo', 'Vermelho');\n\n  return <Button color={color}>{conteudo}</Button>;\n}\n",locationsMap:{"button--green":{startLoc:{col:7,line:13},endLoc:{col:1,line:18},startBody:{col:7,line:13},endBody:{col:1,line:18}},"button--red":{startLoc:{col:7,line:20},endLoc:{col:1,line:25},startBody:{col:7,line:20},endBody:{col:1,line:25}}}}},component:Button,title:"Button",decorators:[dist.withKnobs],excludeStories:/.*Data$/},addSourceDecorator((function Green(){var color=Object(dist.text)("color","green"),conteudo=Object(dist.text)("conteudo","Verde");return react_default.a.createElement(Button,{color:color},conteudo)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.story.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})),button_story_Red=addSourceDecorator((function Red(){var color=Object(dist.text)("color","red"),conteudo=Object(dist.text)("conteudo","Vermelho");return react_default.a.createElement(Button,{color:color},conteudo)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/button.story.tsx",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})}},[[282,1,2]]]);
//# sourceMappingURL=main.7fd58c77279185bb30dd.bundle.js.map