<script setup lang="ts">
import { ref, reactive, shallowReactive, isReactive, computed, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import CustomInput from './components/CustomInput.vue'

const count = ref(0)
const object = {
  count
}
function increment() {
  object.count.value++
}

const author = reactive({
  name: 'John Doe',
  books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
})
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const firstName = ref('qingwei')
const lastName = ref('zeng')
let fullName = computed<string>({
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  set(newVal) {
    ;[firstName.value, lastName.value] = newVal.split(' ')
  }
})

// 表单输入
const checked = ref(false)
const checkedNames = ref([])

// watch
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

watch(question, async (newQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

// 子组件触发
function changeColor(color: string) {
  console.log(color)
}
// 子组件 CustomInput 相关
let searchText = ref('...')
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- 子组件 -->
      <HelloWorld @change-color="changeColor" msg="嘿！！小曾 You did it!" />
      <CustomInput class="fallthrough-class" v-model="searchText" />{{ searchText }}

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <div class="api-block">
    <h3>ref reactive 解构相关</h3>
    <div>{{ count }}</div>
    <div>{{ object.count.value }}</div>
    <button
      @click="increment"
      style="background: rgb(255, 0, 0); height: 30px; width: 100%"
    ></button>
    <hr />
  </div>
  <div class="api-block">
    <h3>computed api</h3>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <hr />
  </div>
  <div class="api-block">
    <h3>computer 调用 get、set 方法</h3>
    {{ fullName }}
    <hr />
  </div>
  <div class="api-block">
    <div>
      <h4>单一复选框</h4>
      <h3>表单输入</h3>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div>
      <h4>多个复选框</h4>
      <div>Checked names: {{ checkedNames }}</div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="waylon" value="Waylon" v-model="checkedNames" />
      <label for="waylon">Waylon</label>
    </div>
    <hr />
  </div>
  <div class="api-block">
    <h4>watch function</h4>
    <p>
      Ask a yes/no question:
      <input class="color-black" v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.api {
  &-block {
    width: 100%;
    padding: 10px 0;
  }
}
.color {
  &-black {
    color: black;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
