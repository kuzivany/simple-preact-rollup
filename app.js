import { h } from 'preact';
import Logo from './logo.svg';

export default () => (
	<div class="App">
		<div class="App-header">
			<Logo class="App-logo" />
			<h2>Welcome to Preact</h2>
		</div>
		<p class="App-intro">
			To get started, edit <code>app.js</code> then save and reload.
		</p>
	</div>
);
