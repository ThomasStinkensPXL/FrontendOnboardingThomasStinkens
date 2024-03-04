<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'

import AppIconText from '@/components/AppIconText.vue'
import DeleteIcon from '@/icons/DeleteIcon.vue'
import EditIcon from '@/icons/EditIcon.vue'
import OptionsDotIcon from '@/icons/OptionsDotIcon.vue'

const emit = defineEmits<{
	editClicked: [void]
	deleteClicked: [void]
}>()

const { t } = useI18n()
</script>

<template>
	<Popover class="relative">
		<PopoverButton>
			<OptionsDotIcon class="aspect-square w-full" />
		</PopoverButton>

		<PopoverPanel class="absolute right-0 z-10">
			<div class="flex w-fit flex-col rounded-2xl bg-white p-2 shadow-xl">
				<div class="flex h-fit">
					<AppIconText
						class="flex-none cursor-pointer"
						:text="t('todos.edit')"
						@click="emit('editClicked')"
					>
						<EditIcon class="h-5 w-5" />
					</AppIconText>
				</div>
				<hr class="mb-1" />
				<div class="flex h-fit grow">
					<AppIconText
						class="flex-none cursor-pointer text-red-600"
						:text="t('todos.delete')"
						@click="emit('deleteClicked')"
					>
						<DeleteIcon class="h-5 w-5" />
					</AppIconText>
				</div>
			</div>
		</PopoverPanel>
	</Popover>
</template>
