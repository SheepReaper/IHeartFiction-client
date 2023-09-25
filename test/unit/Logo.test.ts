import { shallowMount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
