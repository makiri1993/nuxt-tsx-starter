import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface LibraryManagedAttributes<C, P> { [name: string]: any }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
