import { StyleSheet, Text, View } from 'react-native';

const hydrationBenefits = [
	'Boosts skin health and beauty',
	'Regulates body temperature',
	'Flushes body waste',
	'Maintains blood pressure',
];

export default function TipsScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.heading}>Why Hydrate? 🌊</Text>
				{hydrationBenefits.map((benefit) => (
					<Text key={benefit} style={styles.benefit}>
						{benefit}
					</Text>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f1f1f1',
		paddingHorizontal: 24,
	},
	content: {
		alignItems: 'center',
		gap: 8,
	},
	heading: {
		color: '#18a8e0',
		fontSize: 18,
		fontWeight: '700',
		marginBottom: 4,
	},
	benefit: {
		color: '#444',
		fontSize: 14,
		lineHeight: 20,
		textAlign: 'center',
	},
});
