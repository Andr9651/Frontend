// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from 'vuetify/labs/VDataTable'
//import { VDataTableServer } from 'vuetify/labs/VDataTableServer'
//import { VDataTableVirtual } from 'vuetify/labs/VDataTableVirtual'


export default createVuetify({
  components:{
    ...components,
    VDataTable,
    //VDataTableServer,
    //VDataTableVirtual,
  },
  directives,
  theme: { defaultTheme: 'dark' }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
})
