import { VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'
import './default.scss'

@Component
export default class extends Vue {
  render(): VNode {
    return <nuxt />
  }
}
