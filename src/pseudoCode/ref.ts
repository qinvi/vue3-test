function ref() {
    const refObj = {
        __value: 0,
        get value() {
            // 更新相关依赖订阅者函数
            track()
            return this.__value
        }
        set value(newVal) {
            this.__value = newVal
            // 执行相关依赖所有订阅者函数
            trigger()
        }
    }    
    return refObj
}