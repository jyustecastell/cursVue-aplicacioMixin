var mixin = {
  data: function () {
    return {
      message: "hola",
      foo: "abc"
    };
  },
  props: {
    testProp: null
  },
  methods: {
    methodExample: function () {
      return this.foo;
    }
  }
};

export default mixin;
