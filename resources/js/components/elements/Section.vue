<template>
    <div>
        <div class="flex justify-between mt-8-aa items-center" :class="{ 'mb-4': $scopedSlots?.default ?? true }">
            <h4>{{ title }}</h4>
            <slot name="filters">
                <button v-if="resetLabel"
                        class="text-primary dim font-bold no-underline cursor-pointer select-none"
                        @click="$emit('reset')">
                    {{ resetLabel }}
                </button>
            </slot>
        </div>

        <div class="flex flex-wrap mt-6" v-if="$scopedSlots?.default ?? true">
            <slot/>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            resetLabel: {
                type: String,
                default: null
            }
        }
    }

</script>
