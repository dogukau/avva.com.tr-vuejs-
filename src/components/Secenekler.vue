<template>
  <v-app>
    <v-content>
      <v-container class="fill-height about" fluid>
        <div class="d-flex flex-row">
          <v-combobox class="mr-2" outlined label="Filtreler"> </v-combobox>

          <v-combobox class="mr-2" outlined label="Kategoriler"> </v-combobox>

          <v-combobox
            class="mr-2"
            outlined
            label="Beden"
            v-model="model"
            :items="items"
            :search-input.sync="search"
            hide-selected
            multiple
            persistent-hint
            small-chips
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    No results matching "<strong>{{ search }}</strong
                    >". Press <kbd>enter</kbd> to create a new one
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-combobox>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: ["35", "34", "33", "32", "31", "30", "29"],
    model: [],
    search: null,
  }),

  watch: {
    model(val) {
      if (val.length > 1) {
        this.$nextTick(() => this.model.pop());
      }
    },
  },
};
</script>
