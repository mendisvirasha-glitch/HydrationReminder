import { StyleSheet, Text, View } from 'react-native';

const developerName = 'Virasha Mendis';

export default function AboutScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.description}>
					<Text style={styles.heading}>About This App</Text>
					<Text style={styles.body}>
						Built for Mobile Application Development Lab 6. Demonstrates local
						notifications and Expo Router tab navigation.
					</Text>
				</View>

				<Text style={styles.credits}>
					Developed with React Native and Expo.{ '\n' }
					Created by {developerName}.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#f1f1f1',
		paddingHorizontal: 32,
	},
	content: {
		alignItems: 'center',
	},
	description: {
		alignItems: 'center',
		marginBottom: 26,
	},
	heading: {
		color: '#222',
		fontSize: 16,
		fontWeight: '700',
		marginBottom: 10,
		textAlign: 'center',
	},
	body: {
		color: '#666',
		fontSize: 13,
		lineHeight: 18,
		textAlign: 'center',
	},
	credits: {
		color: '#666',
		fontSize: 13,
		lineHeight: 18,
		textAlign: 'center',
	},
});
