/**
 * 注入唯一的 symbol 值
 */

import type { InjectionKey } from 'vue'
import type { Location } from '@src/types'

const LocationKey: InjectionKey<Location> = Symbol('Location')

export { LocationKey }
