<template>
	<Tabbar>
		<TabbarItem title="首页" path="/home">
			<template v-slot:item-icon>
				<img src="~assets/image/tabbar/home.svg" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/image/tabbar/home-active.svg" />
			</template>
		</TabbarItem>

		<TabbarItem title="分类" path="/category">
			<template v-slot:item-icon>
				<img src="~assets/image/tabbar/category.svg" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/image/tabbar/category-active.svg" />
			</template>
		</TabbarItem>

		<TabbarItem title="购物车" path="/cart">
			<template v-slot:item-icon>
				<img src="~assets/image/tabbar/cart.svg" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/image/tabbar/cart-active.svg" />
			</template>
		</TabbarItem>

		<TabbarItem title="我的" path="/profile">
			<template v-slot:item-icon>
				<img src="~assets/image/tabbar/profile.svg" />
			</template>
			<template v-slot:item-icon-active>
				<img src="~assets/image/tabbar/profile-active.svg" />
			</template>
		</TabbarItem>
	</Tabbar>
</template>

<script>
	import Tabbar from "components/common/tabbar/Tabbar";
	import TabbarItem from "components/common/tabbar/TabbarItem";

	export default {
		name: "MainTabbar",
		components: {
			Tabbar,
			TabbarItem
		},
	}
</script>

<style scoped>

</style>
