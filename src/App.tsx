import { defineComponent } from 'vue'
import { ElDialog } from 'element-plus'

export default defineComponent({
  setup(props, { slots }) {
    // // 👇 the following code will work
    // return () => (
    //   <ElDialog
    //     modelValue={true}
    //     v-slots={{
    //       ...slots,
    //       default: () => (
    //         <div>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
    //           deserunt ducimus, quae praesentium corporis omnis ullam at modi
    //           non excepturi, delectus consequatur. Veniam, sit quis? Voluptas
    //           perspiciatis accusamus doloremque in.
    //         </div>
    //       ),
    //     }}
    //   ></ElDialog>
    // )

    // 👇 whereas the following doesn't
    return () => (
      <ElDialog modelValue={true}>
        {{
          ...slots,
          default: () => (
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              deserunt ducimus, quae praesentium corporis omnis ullam at modi
              non excepturi, delectus consequatur. Veniam, sit quis? Voluptas
              perspiciatis accusamus doloremque in.
            </div>
          ),
        }}
      </ElDialog>
    )
  },
})
