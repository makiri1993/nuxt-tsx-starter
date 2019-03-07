import Logo from '../components/Logo'
import { VNode } from 'vue'
import { Component, Vue } from 'vue-property-decorator'
import './index.scss'

@Component
export default class extends Vue {
  render(): VNode {
    return (
      <section class="container">
        <div>
          <Logo />
          <h1 class="title">traderepublic-blog</h1>
          <h2 class="subtitle">official traderepublic blog</h2>
          <div class="links">
            <a href="https://nuxtjs.org/" target="_blank" class="button--green">
              Documentation
            </a>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              class="button--grey"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }
}
