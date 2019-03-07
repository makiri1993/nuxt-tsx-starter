import { Vue, Component } from 'vue-property-decorator'
import { VNode } from 'vue'
import './logo.scss'

@Component
export default class Logo extends Vue {
  render(): VNode {
    return (
      <div class="VueToNuxtLogo">
        <div class="Triangle Triangle--two" />
        <div class="Triangle Triangle--one" />
        <div class="Triangle Triangle--three" />
        <div class="Triangle Triangle--four" />
      </div>
    )
  }
}
