<template>
	<div id="app">
		<router-view></router-view>
		<MainTabbar></MainTabbar>
	</div>
</template>

<script>
	import MainTabbar from "components/content/main_tabbar/MainTabbar";

	export default {
		name: 'App',
		components: {
			MainTabbar
		},
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style>
@import "assets/css/base.css";
</style>
