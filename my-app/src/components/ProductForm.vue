<template>
        <form @submit.prevent="onSubmit()">
            <input
                name="item"
                v-model="newProduct.name"
                v-validate="'required|min:3'"
            >
            <button>Add</button>
            <div v-show="errors.has('item')">
                {{ errors.first('item') }}
            </div>
        </form>
</template>

<script>
import uuid from "uuid/v4";

export default {
  name: "ProductForm",
  data() {
    itemName: ""
    return {
      newProduct: {
        name: ""
      }
    };
  },
  //3/ As well as onSubmit
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        //4/ But instead of adding element we're just emitting add-product event with product as a payload
        this.$emit("add-product", {
          id: uuid(),
          ...this.newProduct
        });
        this.newProduct.name = "";
        this.$validator.reset();
      });
    }
  }
};
</script>