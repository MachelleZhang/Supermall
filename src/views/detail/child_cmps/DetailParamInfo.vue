<!--详情页-参数尺码信息-->
<template>
	<div class="detail-param-info">
		<div class="name">{{ datas.name }}</div>
		<table class="rule-table">
			<tr v-for="trDatas in datas.tables" class="rule-tr">
				<td v-for="tdData in trDatas" class="rule-td">{{ tdData }}</td>
			</tr>
		</table>
		<table class="info-table">
			<tr v-for="infoObj in datas.infos" class="info-tr">
				<td class="info-td-key">{{ infoObj.key }}</td>
				<td class="info-td-value">{{ infoObj.value }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: "DetailParamInfo",
		props: {
			datas: {
				type: Object,
				default: () => {}
			}
		},
	}
</script>

<style scoped>
	.detail-param-info {
		padding: 10px;
		border-bottom: 5px solid #eeeeee;
	}

	.detail-param-info>.name {
		font-size: 14px;
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #eeeeee;
	}

	.detail-param-info>.rule-table,
	.detail-param-info>.info-table {
		width: 100%;
		border-bottom: 2px solid #eeeeee;
		border-collapse: collapse;
		font-size: 12px;
		color: #898989;
	}

	.detail-param-info>.rule-table tr td,
	.detail-param-info>.info-table tr td {
		height: 30px;
		padding: 0;
	}

	.detail-param-info>.rule-table tr+tr td,
	.detail-param-info>.info-table tr+tr td {
		border-top: 1px solid #eeeeee;
	}

	.detail-param-info>.rule-table .rule-td:first-child,
	.detail-param-info>.info-table .info-td-key:first-child {
		width: 100px;
	}

	.detail-param-info>.info-table .info-td-value {
		color: #ff5777;
	}
</style>
