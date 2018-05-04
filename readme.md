# training-jojonomic

> training for intern

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


URL reference :

Documentations      : https://bootstrap-vue.js.org/docs
Datepicker          : https://github.com/charliekassel/vuejs-datepicker#demo

!-- 
learn sources

https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2
https://www.udemy.com/vue-2-crash-course/learn/v4/content :
1. each component have template, script and style as tags.
2. normal tags must be inside template to display
3. {{ }} for binding data
- v-bind -> can binding behav of tag
- v-if="fill logic, ex something.length >= 0" and v-else in different tag
- v-for="(renameArray, index) in array" :key="index">
    {{index}}. {{renameArray.attribute}} // gonna show like this : 0. 
4. Scope inside style, gonna apply just inside component self
5. vee-validate for validation package

complete tutorial https://coursetro.com/courses/23/Vue-Tutorial-in-2018---Learn-Vue.js-by-Example