import Alpine from 'alpinejs';

export default function exampleComp() {

  return {
    a: 1,
    b: 2,
    c: null,

    init() {
    },

    add() {
      this.c = this.a + this.b
    },

  };
}
