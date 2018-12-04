import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, { propsData: { message: 'Hello world!' }})
    expect(wrapper).toMatchSnapshot()
  })

})
