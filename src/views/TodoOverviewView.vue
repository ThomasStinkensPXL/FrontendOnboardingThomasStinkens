<script setup>
import { useI18n } from 'vue-i18n'

import AppTitle from '@/components/AppTitle.vue'

const { t } = useI18n()
</script>

<template>
	<AppTitle :text="t('shared.empty')" />
</template>
