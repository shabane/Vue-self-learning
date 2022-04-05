# vue

this is the doc from me! to be remember it.

## defind/call/assign variable
- to declear any kind of variable we should use `ref` syntax.
- to call the variables in each html element we should use *{{}}* syntax.
- to assign data to a var, use `v-model` in the html element and the var name.

- we can define a variable with `reactive` instead of `ref` but reavtive does not support permitive variables like: [bool, string, int]
- in reactive we do not have to use *var_name*.`value` in methods

```js
# define
import { ref } from 'vue'
const var0 = ref("")
const var0 = ref([])
const var0 = ref({})

# call in html
<h1> var0  </h1>

# assing a data to it
<input v-model='var0'>
```

## loop
the syntax is `v-for' for itrate between a list if items.
you should use the `v-for` in a **html element**.

```js
# list the each item in *items* list

const items = ref(['item1', 'item2', ])
<ul>
	<li v-for='item in items'>{{ item  }}</li>
</ul>
```

## events
event is a directive which will listen for a *mouse click* or *key board input*. like enter or tab or ...
event can define in a html element.
you can use a method or just write a js script in the event.

> note that: use @submit in <form>

```js
<input type='submit' @click='console.log("this is fun")'>
<input type='submit' @click='methodName()'>
```

## methods 
with methods we can write more than one js in a event

> to use variable in methods you should use *var_name*`.value` 

```js
# <script>
const methodName = () =>{
// directive here
}
```

## condition

there is three kind of conditions

- v-if
to check if the varialbe is true or false, if it be true, it will show in the
page, if not it won't even redered.
- v-else
like any other else!
- v-else-if
this is too!, like any other `else if`.

## bind the attribute of html

style, class or something like *href* need to be connect to an attribute.
to connect a html attribute to a variable, use *v-bind* or just simply use *:*.
in the v-bind you can use condition as well as a varialbe
> in the bind you will write a js!

```js
# <script>
const var_name = ref('https://example.com')

# <html>
<a :href="var_name">link</a>

# *striketrout* is the name of the class which will striketoute the text!
# trueORfalse is the boolian variable
# if the trueORfalse var be true, it will use *striketroute* class, if not it wont!
<li :class='{striketrout: trueORfalse}' class='static-class'>something </li>
```


## dynamic css class

this is use to specify a class for an element.
at firest use `v-bind` to use an appropriate class for an element,
than there is two kind of directive to connect an element to class,

- list []
- object {}

> you can use both!

```js
<p :class="[{striketroute: trueORfalse}, 'static-class',]">something</p>
```


## computed properties

to calculate the variable before assign.
for example if you want to run some methods on a variable, before showing the var on a element, you should use *computed*
method.

```js
const var0 = ref('this is a string')
const manipulate = computed(()=>{
	return var0.some().method().and().another().method().and().so().on()
})
```


## vue cli

install vue cli with command `npm install -g @vue/cli`

now you can star your vue project by typing `vue create <project-name>`.
in this point you should select some of the libaray which you want to be installed in your project.

select *babel* and *router* for now.

after installing, there are some file and directory which provide something!

- *./src* directory is where we will write all the code that power our app!
- *./src/assets* directory is where we put all of our assets that need proccessing such as images.
- *./src/components* directory is where we store all our vue component.
- *./src/views/* dirctory we put all the components in to an individual page. pages are views!?
- *./router/index.js* file which define the routes




## router/index.js

this file contain the route of the application.
inside the file there are an array named `routes` which contain *js-object* with **three** keys.

1. *path* the url path of the site.
2. *name* of the route.
3. *components* it refers to.

```js
# importing the component
import Home from "../views/Home.vue"

# define route
const routes = [
	{
		path: "/",
		name: "Home",
		components: Home
	},
	{
		...
	}
];

# create the router instance
const router = createRouter({
history: createWebHistory(proccess.env.BASE_URL),
routes,
})
```


## <router-view/>

this is so important for a single page.
as you know, whene you click on a link, it will redirect you to that link with out refreshing the
page, in each page you should use `<router-view/>` tag for this purpose;
generally we use *a* tag for external link, and *<router-link>* tag for internal links.

> in the in the tamplate tag you should have one <div> tag and all other tags inside it.

```html
<template>
	<div>
		<router-link to='https://google.com/'>come here!</router-link>
	</div>
	<router-view/>
</template>
```


## <router-link>

is use instead of <a> tag for link to a internal link

## views

all the views of the site gose here.
view writed in a tag named *<template> </template>*
you can use style and/or script on thease files.

to pass variable to template you should use an object named *default*.

> note that you should have just **one single line break** at the end of each *.vue* files.
```js
export default {
	date() {
		return {
			var0: "something",
			var1: "this is some other variable",
		}
	}
}
```

