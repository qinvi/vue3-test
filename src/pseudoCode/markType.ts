import { computed } from 'vue'
// ts 标注类型

// computed
const double = computed<number>(() => {})

// ref
// Ref<number | undefined>
const n = ref<number>()

// reactive
// 推荐使用 interface 来显形标注，不建议使用泛型参数
interface Book {
  title: string
  year?: number
}
const book: Book = reactive({ title: '杀死一只知更鸟' })
